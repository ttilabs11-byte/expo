// Line-only emblem drawn in code below the logo. Usage: TtiEmblem.mount(svgElement, "horizon", { t: fixedTime })
// Drawn in a 360 × 170 viewBox: the top of a slowly turning wireframe planet with a sprout on its horizon.
(() => {
  const NS = "http://www.w3.org/2000/svg", C = 180, RAD = Math.PI / 180;
  const el = (tag, attrs, parent) => { const e = document.createElementNS(NS, tag); for (const k in attrs) e.setAttribute(k, attrs[k]); if (parent) parent.append(e); return e; };
  const f = v => v.toFixed(1);

  // ---------- one leaf, as a line: outline plus midrib ----------
  function leaf(parent, bx, by, ang, len, wid, delay, color) {
    const d = [Math.cos(ang), Math.sin(ang)], n = [-d[1], d[0]];
    const tip = [bx + d[0] * len, by + d[1] * len];
    const c1 = [bx + d[0] * len * .5 + n[0] * wid, by + d[1] * len * .5 + n[1] * wid];
    const c2 = [bx + d[0] * len * .5 - n[0] * wid, by + d[1] * len * .5 - n[1] * wid];
    const g = el("g", { class: "sway" }, parent);
    g.style.transformOrigin = `${f(bx)}px ${f(by)}px`; g.style.animationDelay = (delay * 1.7 % 5).toFixed(2) + "s";
    el("path", { class: "draw", pathLength: 1, d: `M${f(bx)} ${f(by)}Q${f(c1[0])} ${f(c1[1])} ${f(tip[0])} ${f(tip[1])}Q${f(c2[0])} ${f(c2[1])} ${f(bx)} ${f(by)}`, fill: "none", stroke: color, "stroke-width": 1.4, "stroke-linejoin": "round", style: `animation-delay:${delay.toFixed(2)}s` }, g);
    el("path", { class: "draw", pathLength: 1, d: `M${f(bx)} ${f(by)}L${f(bx + d[0] * len * .82)} ${f(by + d[1] * len * .82)}`, fill: "none", stroke: color, "stroke-opacity": .55, "stroke-width": .9, style: `animation-delay:${(delay + .25).toFixed(2)}s` }, g);
  }

  // ---------- the top of a turning planet, with a sprout on its horizon (viewBox 0 0 360 170) ----------
  function horizon(svg, { R = 240, cy = 340, tip = 20, speed = .1 } = {}) {
    const cx = 180, top = cy - R, ca = Math.cos(tip * RAD), sa = Math.sin(tip * RAD);
    const defs = el("defs", {}, svg), grad = el("linearGradient", { id: "hz-fade", x1: 0, y1: 0, x2: 0, y2: 1 }, defs);
    el("stop", { offset: (top / 170).toFixed(2), "stop-color": "#fff" }, grad); el("stop", { offset: 1, "stop-color": "#fff", "stop-opacity": 0 }, grad);
    el("rect", { width: 360, height: 170, fill: "url(#hz-fade)" }, el("mask", { id: "hz-mask" }, defs));
    const g = el("g", { class: "fade", mask: "url(#hz-mask)" }, svg);
    const back = el("path", { fill: "none", stroke: "#1B3564", "stroke-opacity": ".1", "stroke-width": ".8" }, g);
    const front = el("path", { fill: "none", stroke: "#1B3564", "stroke-opacity": ".42", "stroke-width": ".9" }, g);
    let rim = "";
    for (let i = 0; i <= 80; i++) { const a = Math.PI + Math.PI * i / 80; rim += (i ? "L" : "M") + f(cx + R * Math.cos(a)) + " " + f(cy + R * Math.sin(a)); }
    el("path", { class: "draw", pathLength: 1, d: rim, fill: "none", stroke: "#2C63A8", "stroke-width": 1.3, "stroke-linecap": "round" }, el("g", { mask: "url(#hz-mask)" }, svg));
    const P = (b, l) => { const x = Math.cos(b) * Math.sin(l), y = Math.sin(b), z = Math.cos(b) * Math.cos(l); return [cx + R * x, cy - R * (y * ca - z * sa), y * sa + z * ca]; };
    const trace = (pts, F, B) => { let cur = null; for (let i = 1; i < pts.length; i++) { const a = pts[i - 1], b = pts[i], t = a[2] + b[2] > 0 ? F : B; if (cur !== t) { t.d += "M" + f(a[0]) + " " + f(a[1]); cur = t; } t.d += "L" + f(b[0]) + " " + f(b[1]); } };
    // the sprout stands on the horizon
    const s = el("g", {}, svg);
    el("path", { class: "draw", pathLength: 1, d: `M180 ${top}Q175 ${top - 22} 182 ${top - 46}`, fill: "none", stroke: "#3F8F5E", "stroke-width": 1.6, "stroke-linecap": "round", style: "animation-delay:.7s" }, s);
    leaf(s, 182, top - 44, -58 * RAD, 50, 13.5, 1.2, "#9DB82A");
    leaf(s, 178.5, top - 22, -146 * RAD, 30, 8.5, 1.5, "#3F8F5E");
    el("circle", { cx: 180, cy: top, r: 2.6, fill: "#3F8F5E" }, s);
    return t => {
      const F = { d: "" }, B = { d: "" }, phi = t * speed;
      for (let j = 0; j < 24; j++) { const l = j * Math.PI / 12 + phi, pts = []; for (let i = 0; i <= 24; i++) pts.push(P(Math.PI / 2 * i / 24, l)); trace(pts, F, B); }
      for (const deg of [15, 30, 45, 60, 75]) { const b = deg * RAD, pts = []; for (let i = 0; i <= 96; i++) pts.push(P(b, Math.PI * 2 * i / 96)); trace(pts, F, B); }
      front.setAttribute("d", F.d); back.setAttribute("d", B.d);
    };
  }

  const KINDS = { horizon };
  window.TtiEmblem = {
    mount(svg, kind, { t } = {}) {
      const draw = KINDS[kind](svg);
      if (!draw) return;
      const still = t !== undefined || matchMedia("(prefers-reduced-motion: reduce)").matches;
      draw(t || 0);
      if (still) return;
      let on = true; const t0 = performance.now();
      const loop = now => { if (!on) return; draw((now - t0) / 1000); requestAnimationFrame(loop); };
      if ("IntersectionObserver" in window) new IntersectionObserver(([e]) => { const was = on; on = e.isIntersecting; if (on && !was) requestAnimationFrame(loop); }).observe(svg);
      requestAnimationFrame(loop);
    }
  };
})();
