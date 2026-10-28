# Green Pakistan Expo 2026 · personal invitation

Tti Labs Sustainability Center invitation page for Green Pakistan Expo 2026: 26 to 28 November 2026, 10:00 AM to 6:00 PM, Hall 2, International Expo Centre Lahore.

- Live: https://ttilabs11-byte.github.io/expo/
- Link maker: https://ttilabs11-byte.github.io/expo/make.html

## How personal links work

`https://ttilabs11-byte.github.io/expo/#n=Mr.+Ahmed+Raza&c=Nishat+Mills`

- `n` is the guest's name and `c` is their company (optional). Both sit in the URL fragment (after `#`), so the browser never sends them to GitHub. No guest list is stored anywhere.
- `?open` skips the sealed cover (useful for checks).
- With no name, the page reads "Our honoured guest" and "You're invited".
- `make.html` turns a list of `Name, Company` lines into links. For each guest it can copy the message, copy the link, share on WhatsApp, or preview. It can also export everything as a CSV.

## RSVP

Accept and Decline open WhatsApp to Naeem A. Butt (+92 301 114 9706) with a prefilled message. The message carries the guest's name, chosen day and topics. Nothing is sent until the guest presses send. The guest's choice is remembered in their own browser (localStorage), and "Change response" clears it.

## Files

| Path | What |
|---|---|
| `index.html` | Invitation page. Its sections are: cover, hero and dates, countdown (PKT) with calendar links, four services, proof, brochures, venue map, RSVP, host and footer. |
| `make.html` | Personal link maker (noindex). |
| `assets/img/og.png` | 1200×630 link-preview card. Source: `../src/og.html`, rendered with Playwright. |
| `assets/img/*` | Tti icon and lockup, OneClickESG and Greenbud logos, and brochure covers (webp, 420×594). |
| `assets/fonts/*` | Inter, Inter Tight and JetBrains Mono (woff2, latin). |

The brochure buttons link to the live PDFs on framerusercontent.com, the same files as ttilabs.net/brochures (checked on 28 Oct 2026).

## Edit and publish

1. Edit the files in `D:\Downloads\tti-expo-invite\site`.
2. Run `git add -A && git commit -m "..." && git push`.
3. GitHub Pages redeploys in about a minute.

The countdown and the "Today" badge use fixed PKT (UTC+5) times. Change `OPEN`, `CLOSE` and `DAYS` in the script if the dates move.
