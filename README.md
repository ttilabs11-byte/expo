# Green Pakistan Expo 2026 · personal invitation

Tti Labs Sustainability Center invitation page for Green Pakistan Expo 2026: 26 to 28 November 2026, 10:00 AM to 6:00 PM, Hall 2, International Expo Centre Lahore.

- Live: https://ttilabs11-byte.github.io/expo/
- Link maker: https://ttilabs11-byte.github.io/expo/make.html

## How personal links work

`https://ttilabs11-byte.github.io/expo/#n=Mr.+Ahmed+Raza&c=Nishat+Mills`

- `n` is the guest's name and `c` is their company (optional). Both sit in the URL fragment (after `#`), so the browser never sends them to GitHub. No guest list is stored anywhere.
- With no name, the page reads "Our honoured guest".
- `make.html` turns a list of `Name, Company` lines into links. For each guest it can copy the message, copy the link, share on WhatsApp, or preview. It can also export everything as a CSV.

## RSVP

Accept and Decline open WhatsApp to Naeem A. Butt (+92 301 114 9706) with a prefilled message. The message carries the guest's name, chosen day and topics. Nothing is sent until the guest presses send. The guest's choice is remembered in their own browser (localStorage), and "Change response" clears it.

## Files

| Path | What |
|---|---|
| `index.html` | Invitation page. The first screen holds the logo; below it, a line globe with accurate Natural Earth coastlines (orthographic, centred on 70°E 15°S, Lahore marked with a pulsing point) and a sprout on its horizon. The globe is static SVG built by `../src/make_globe.py` and animated in CSS: the rim, grid and coastlines draw in, then the stem and leaves, and the leaves sway. Then come the guest's name, the event, the dates, and the dual clock: an analog dial in Lahore time (the green arc marks expo hours, 10 AM to 6 PM), next to countdown tiles (days, hours, minutes, seconds) that switch to "Open now · closes in" during the expo and to a thank-you after it. Last on this screen is the green reply button. All motion pauses off-screen and steps or stays still under reduced motion. Six tap-to-open panels hold the rest: what we'll show you, when (days and calendar links), where (the map loads only when this panel is opened), brochures, about Tti Labs and your host. Then come the RSVP card, the footer, and a sticky Reply button that appears once the hero buttons have scrolled away. |
| `make.html` | Personal link maker (noindex). |
| `../src/make_globe.py` | Rebuilds `../src/globe.svg` from `../data/land-110m.json` (world-atlas 2.0.2, Natural Earth 110m, public domain). Paste the result over `<svg id="globe">` in index.html and og.html. |
| `assets/img/og.png` | 1200×630 link-preview card. Source: `../src/og.html`, which embeds `../src/globe.svg`; rendered with Playwright over http. |
| `assets/img/*` | Tti logo (`tti-logo.webp`, 640 px, from the user's own file saved as `../src/tti-logo-user.png`, used unaltered), light lockup (`tti-lockup-light.webp`), OneClickESG and Greenbud logos, and brochure covers (webp, 420×594). |
| `assets/fonts/*` | Inter, Inter Tight, Instrument Serif Italic (guest names) and JetBrains Mono (woff2, latin). |

The brochure buttons link to the live PDFs on framerusercontent.com, the same files as ttilabs.net/brochures (checked on 28 Oct 2026).

## Edit and publish

1. Edit the files in `D:\Downloads\tti-expo-invite\site`.
2. Run `git add -A && git commit -m "..." && git push`.
3. GitHub Pages redeploys in about a minute.

The countdown and the "Today" badge use fixed PKT (UTC+5) times. Change `OPEN`, `CLOSE` and `DAYS` in the script if the dates move.

## History

- 2026-10-28 v1: dark navy design with a sealed "Open invitation" cover. Superseded the same day.
- 2026-10-28 v2: light-blue redesign at the user's request. The name, event and invitation lead; everything else sits in tap-to-open panels; animated sustainability emblem; official logo.
- 2026-10-28 v3: the user rejected v2's logo treatment and cartoon landscape. Now the user's exact logo, with no halo or shadow, sits in fine-line growth rings. The background is a clean cool pale blue (#F4F8FD to #D6E4F4) with no lime glow. The RSVP sprig is removed. Backup of v2: `../src/index-v2-backup.html`.
- 2026-10-28 v4: the user asked for a simple line-only leaf or globe animation, not around the logo but below it, and for the clock back as both analog and digital. The growth rings are removed. The logo now stands alone, with a wireframe planet horizon and sprout below it, and the countdown has moved out of the When panel into its own clock section. Image prompts for style references: `../IMAGE-PROMPTS.md` (results go in `../refs/`).
- 2026-10-28 v5: rebuilt from the user's reference images (`../refs/`, generated from `../IMAGE-PROMPTS.md`) in our palette. The globe now has real coastlines (Natural Earth) with Lahore marked, and the reply button is green (#1A7F44). The dual clock (analog dial with a digital window, plus countdown tiles) replaces the "days to go" pill in the hero, and the separate clock section is gone. `assets/emblems.js` is removed.
- 2026-10-28 v5.1: the digital window inside the dial is removed, since the countdown tiles beside it already give the digital readout.
