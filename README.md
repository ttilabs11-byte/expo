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
| `index.html` | Invitation page. The first screen holds the logo, the animated emblem, the guest's name, the event, the dates and the reply button. The animated emblem is an SVG landscape with sun, turbines, river, solar panels and a growing sapling, inside the Scope rings, with drifting leaves. Six tap-to-open panels hold the rest: what we'll show you, when (with a PKT countdown and calendar links), where (the map loads only when this panel is opened), brochures, about Tti Labs and your host. Then come the RSVP card, the footer, and a sticky Reply button that appears once the hero buttons have scrolled away. |
| `make.html` | Personal link maker (noindex). |
| `assets/img/og.png` | 1200×630 link-preview card. Source: `../src/og.html`, which reuses the page's emblem; rendered with Playwright over http. |
| `assets/img/*` | Tti logo (`tti-logo.webp`, from `D:\Downloads\TTI LOGO new.png`, with a white sticker edge), light lockup (`tti-lockup-light.webp`), OneClickESG and Greenbud logos, and brochure covers (webp, 420×594). |
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
