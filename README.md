# Green Pakistan Expo 2026 · personal invitation

Tti Sustainability Center invitation page for Green Pakistan Expo 2026: 26 to 28 November 2026, 10:00 AM to 6:00 PM, Hall 2, International Expo Centre Lahore.

- Live: https://ttilabs11-byte.github.io/expo/
- Link maker: https://ttilabs11-byte.github.io/expo/make.html

## How personal links work

`https://ttilabs11-byte.github.io/expo/#n=Mr.+Ahmed+Raza&c=Nishat+Mills&d=CEO&i=<invite id>`

- `n` name, `c` company, `d` designation (both optional), `i` the guest's row id in the invited list. They sit in the URL fragment (after `#`), so GitHub never sees them.
- With no name, the page reads "Our honoured guest".
- `make.html` turns `Name, Company, Designation` lines (or columns pasted from Excel) into links. With the team passcode it saves every guest to the invited list first (same name + company keeps the same id, so re-making a link never duplicates anyone). For each guest it can copy the message, copy the link, share on WhatsApp, or preview, and it exports a CSV. Its "Guest wall" panel lists everyone with their reply and hides or shows any entry on the wall.
- The team passcode is in `D:\Downloads\tti-expo-invite\TEAM-PASSCODE.txt` (outside the repo, never committed). Only its bcrypt hash is stored (`expo_settings.maker_pass`).

## RSVP and guest wall

"Accept the invitation" opens a second step: an optional photo for the guest wall (shrunk to 480 px square in the browser and uploaded at once), plus name and company fields when the link carries no name. "Send my reply on WhatsApp" then opens WhatsApp to Naeem A. Butt (+92 301 114 9706) with a prefilled message (name, designation, company, day, topics; nothing is sent until the guest presses send) and records the reply. Decline skips the photo. The guest's choice is remembered in their browser (localStorage) and "Change response" clears it; a changed reply updates the same row.

The "Who's coming" wall sits above the RSVP card: accepted guests first (photo, or initials), then "Also invited" (first 12, then "Show all"). It refreshes every 20 s while the tab is visible and pops in new faces.

### Backend (Supabase)

- Project `tti-amplify` (`fuhnyjmbjzjflxylxakw`, ap-south-1); a dedicated project was not possible (free plan, 2 active projects). Everything for the expo is prefixed `expo_`; migration `expo_guest_wall`.
- `public.expo_guests` (name, company, designation, status invited/accepted/declined, photo, days, hidden, source maker/rsvp, token) and `public.expo_settings` are closed to the public (RLS on, no grants); the page uses only these functions: `expo_wall()` (public list, no ids), `expo_rsvp(...)` (insert or update by invite id or by the browser's own id + token), and the passcode-checked `expo_add_invites`, `expo_admin_list`, `expo_admin_hide`.
- Photos: public bucket `expo-guests`, webp/jpeg up to 700 KB, uuid file names; anyone may add a file, nobody may overwrite or delete one through the API. Remove photos in the Supabase dashboard (Storage).
- The page uses the publishable key `sb_publishable_X6El...` (public by design).

## Files

| Path | What |
|---|---|
| `index.html` | Invitation page. The first screen holds the logo; below it, a line globe with accurate Natural Earth coastlines (orthographic, centred on 70°E 15°S, Lahore marked with a pulsing point) and a sprout on its horizon. The globe is static SVG built by `../src/make_globe.py` and animated in CSS: the rim, grid and coastlines draw in, then the stem and leaves, and the leaves sway. Then come the guest's name, the event, the dates, and the dual countdown: an analog stopwatch (crown and pushers; the green hand sweeps each minute, a lime arc shows what is left of it, and small dials show the hours and minutes left), next to split-flap countdown tiles (days, hours, minutes, seconds) that switch to "Open now · closes in" during the expo and to a thank-you after it. Last on this screen is the green reply button. All motion pauses off-screen and steps or stays still under reduced motion. Six tap-to-open panels hold the rest: what we'll show you, when (days and calendar links), where (the map loads only when this panel is opened), brochures, about Tti Labs and your host. Then come the guest wall, the RSVP card, the footer, and a sticky Reply button that appears once the hero reply button has scrolled away. |
| `make.html` | Personal link maker and guest wall controls (noindex). |
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
- 2026-10-28 v5.2: "Sustainability Center" in the hero is green (#1A7F44). Every reply action now matches the green button: Accept with WhatsApp, Open WhatsApp again, and the selected day and topic chips. The duplicate scroll cue is removed ("See the details" already goes there). The link maker accepts Excel columns.
- 2026-10-28 v5.3: the countdown tiles are redesigned as navy split-flap displays (white digits, a centre seam, and a flip when a number changes). A thin lime bar along each tile drains with its unit: days out of 30, hours out of 24, minutes and seconds out of 60.
- 2026-10-28 v5.4: the analog clock (Lahore time) is replaced by an analog stopwatch that counts down to the same target as the tiles (`swT`, set in `tick()`).
- 2026-10-28 v5.5: changes from the sustainability team. The name is now "Tti Sustainability Center" everywhere: page, RSVP messages, calendar, link maker and preview card. The GHG card uses the team's wording. The environment card follows the team's flyer: a highlighted ZDHC Sampling & Testing card first, then Water, Air & Noise, Environmental Compliance, and Waste & Resources, then Other Environmental Compliance & Related Services.
- 2026-10-28 v5.6: the brochure shelf has previous/next arrows (hidden at either end) so mouse users can reach all five covers. Naeem A. Butt's title and email follow the team's flyer: Executive Director, Environment & Sustainability, naeem.butt@ttilabs.net.
- 2026-10-28 v5.7: eight line-drawn leaves (#i-leafl, four on phones) drift slowly behind the top of the page in leaf green and blue, outside the text column on desktop; they stand still under reduced motion. The environment card follows the team's updated flyer: ZDHC "Pakistan's only local ZDHC-approved lab", fuller water and air lines, NOCs (IEE and EIA cases), Sludge Testing, Other Environmental Compliance and Audit-Related Services.
- 2026-10-28 v5.8: the detail rows use bespoke duotone icons (navy line plus one lime accent: flask, calendar, pin, brochures, award) on soft gradient tiles; open rows turn navy. Naeem A. Butt's portrait (assets/img/naeem.webp, 192 px crop of the team's photo) is the "Your host" row icon and sits beside the RSVP note.
- 2026-10-29 v5.9: about 2.3 s after the page opens it glides down so the clock and the green "Reply to the invitation" button fill the first screen, with the button at the bottom edge (never past the guest's name; skipped if the guest already scrolled, tapped or opened a #section link; instant under reduced motion). The floating reply button appears only once that button scrolls away. ESG card drops the Scope 1, 2 and 3 line; the GHG prompt no longer asks for 12 months of records.
- 2026-10-29 v6.0: guest wall on Supabase. Accept now asks for an optional photo before WhatsApp; accepted guests appear live with photo, name, designation and company; the link maker saves every invited guest (with the team passcode) and adds `d` and `i` to links; team panel to hide entries. WhatsApp messages carry designation and company.
