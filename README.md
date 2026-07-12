# drewb-it.com — Studio 2.0

The website for **Drew B IT**, Drew Babbitt's web, automation, and AI studio serving small businesses in California's Central Valley.

## Positioning

Three productized, MRR-first service lines with transparent flat pricing:

1. **Websites that work** — custom builds + monthly care plans ($99 / $249 / $499 per month, $0-down build available on the Growth plan)
2. **Marketing on autopilot** — Instagram/Facebook DM automation on Meta's official APIs (DM Concierge $750 setup, Social Autopilot from $400/mo, Prospecting Engine +$250/mo), with AI marketing/sales research agents on the roadmap
3. **Claude AI for business** — AI Jumpstart $950, Team Rollout from $2,500, Managed AI from $350/mo, integration consulting $125/hr

## Pages

- `index.html` — home: positioning, three pillars, featured work, process, about
- `work.html` — the galleria: live iframe previews of every production site + automation case studies
- `services.html` — full pricing for all three pillars, add-ons, FAQ
- `contact.html` — free discovery-call funnel (email-first, no backend needed)
- `shepherdandme/` — client redesign concept (The Shepherd & Me), left untouched

## Stack

Vanilla HTML/CSS/JS — no build step, no framework, $0 hosting on GitHub Pages behind the `drewb-it.com` custom domain (see `CNAME`). Design system lives in `styles.css` (Fraunces + Inter, deep navy + burnt orange). Shared behavior (mobile nav, scroll reveals) in `script.js`.

The work galleria embeds live subsites (`/dickerson-law-site/`, `/shepherdandme/`, `/crayon-crate-demo/`, `/dabomb-breaks/`, `/drewbeeerips/`) as scaled, non-interactive iframes so previews are always current with zero screenshot maintenance.

## Editing

- Prices and plan contents: `services.html` (mirrored on the home-page pillar cards)
- Adding a portfolio piece: copy a `.work-card` block in `work.html`
- Contact email is `drew@drewb-it.com` everywhere — update in all four pages if it changes
