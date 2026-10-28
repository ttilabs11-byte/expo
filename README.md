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
| `index.html` | Invitation page. The first screen holds the logo, with a line-only animation below it (the top of a slowly turning wireframe planet with a sprout on its horizon, drawn by `assets/emblems.js`), then the guest's name, the event, the dates, a "days to go" pill that jumps to the clock, and the reply button. Next comes the clock: an analog dial showing Lahore time (lime arc = expo hours, 10 AM to 6 PM, with a "Lahore now" digital window) above a digital countdown (days, hours, minutes, seconds) and a progress bar; it switches to "Open now · closes in" during the expo and to a thank-you after it. The hands sweep in the first time the clock is seen. All motion pauses off-screen and steps or stays still under reduced motion. Six tap-to-open panels hold the rest: what we'll show you, when (days and calendar links), where (the map loads only when this panel is opened), brochures, about Tti Labs and your host. Then come the RSVP card, the footer, and a sticky Reply button that appears once the hero buttons have scrolled away. |
| `assets/emblems.js` | The line animation (`TtiEmblem.mount(svg, "horizon")`), plain SVG plus requestAnimationFrame, no libraries. |
| `make.html` | Personal link maker (noindex). |
| `assets/img/og.png` | 1200×630 link-preview card. Source: `../src/og.html`, which loads `assets/emblems.js` frozen at t=8; rendered with Playwright over http. |
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
