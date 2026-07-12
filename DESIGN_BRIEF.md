# DREW B IT — Definitive Design Brief (v2 "The Ledger")

This is the single source of truth for the drewb-it.com rebuild. Four builders work from this
document without talking to each other: one builds `styles.css` + `script.js` (the design system),
three build pages (`index.html`, `work.html` + `services.html`, `contact.html`). Follow it exactly.

**Hard constraints (never violate):**
- Static HTML/CSS/JS only. GitHub Pages. No build step, no backend, no third-party JS.
- Google Fonts CDN is the ONLY external resource.
- Do NOT touch `shepherdandme/` or `CNAME`.
- ALL PRICES ARE FIXED — copy them verbatim from §6. Never invent or alter a number.
- Contact email: `drew@drewb-it.com`. Assets: `headshot.jpeg`, `family.jpeg` (both must be
  compressed before ship — see §8 Performance).

---

## 1. Positioning & Voice

### 1.1 Positioning statement (internal)
One senior person in California's Central Valley who builds websites, marketing automation, and
Claude AI systems for small businesses — priced like a subscription, with every price public,
everything owned by the client, and a human verifying everything the AI touches. Solo is the
premium feature, not the apology. The Central Valley identity and the verification-first promise
are the two moats; both get badge-level treatment, not fine print.

### 1.2 Hero headlines — EXACT copy per page

| Page | Kicker | H1 | Subhead (lede) |
|---|---|---|---|
| index.html | `Web · Automation · AI — Central Valley, California` | **Technology that earns its keep. Every month.** | Websites, marketing automation, and Claude AI for Central Valley small businesses — on flat monthly plans instead of five-figure invoices. Built, run, and answered by one person you can actually call. |
| work.html | `The Galleria` | **Live work you can click into.** | Nothing here is a mockup. Every preview loads the real site, running in production right now — scroll them, click them, judge them. Below the sites: the automation and AI systems that run behind the scenes. |
| services.html | `Services & Pricing` | **Every price is on this page.** | Three service lines. Fixed setups, flat monthly plans, and a plain-English list of what you get. No "contact us for pricing," no mystery invoices, no contracts holding you hostage. |
| contact.html | `Contact` | **Send one link. I'll send three fixes.** | Email me the URL of your website or your Instagram, and I'll reply with the three specific things I'd fix first — free, no strings, usually within one business day. Or skip ahead and book the free 30-minute call. |

Hero H1s always contain exactly one Fraunces-italic emphasis span (`<em>`): index = "earns its keep",
work = "click into", services = "on this page", contact = "three fixes".

Under the index hero H1, a founder-guarantee line is mandatory (the `.founder-line` component, §4.8):
headshot thumbnail + "**Run entirely by Drew Babbitt.** Nothing outsourced, nothing offshored —
you work with the person who builds it."

### 1.3 Voice rules
Written by Drew, first person singular. "I", never "we" (a "we" implies a fake team and burns the
solo moat). Rules:

1. **Short declaratives. Concrete nouns. Numbers over adjectives.** If a sentence works without an
   adjective, cut the adjective.
2. **Name the objection before the reader does**, then answer it plainly (ownership, contracts,
   "why so cheap," who does the work).
3. **BANNED WORDS:** seamless, robust, cutting-edge, unlock, elevate, empower, leverage (verb),
   solutions, innovative, world-class, "#1", synergy, "take your business to the next level".
   No emoji anywhere. No exclamation points except at most one per page.
4. **Anchor prices against the market, never apologize for them** (exact anchor lines in §6).
5. Keep the existing sharp lines — they set the register: "money leak in your tech,"
   "one person who answers his own email," "I keep clients with results, not contracts,"
   "Gray-area bots get accounts suspended; I won't build them, even if you ask nicely."

Three example sentences in the correct voice:
- "A law firm's site vanished off GoDaddy. Ten days later it was back online, rebuilt, and ranking."
- "Typical AI consulting retainers run $2,000–$8,000 a month. Managed AI starts at $350 because it's productized, not bespoke."
- "When you email, I'm the one who replies — not a ticket queue with my name on it."

### 1.4 The four personal threads — where each lives
- **One-person / trust:** index founder-line (above the fold), services FAQ ("Who actually does
  the work?"), contact page headshot + one-business-day promise. Every page carries at least one
  "you talk to me" sentence.
- **Central Valley:** hero kicker on index; the `.route-line` component (§4.9) — a typographic
  "Modesto → Oakdale → Turlock → Manteca → Tracy" route treatment — appears once on index (proof
  band) and once on contact. City names also in meta/schema. One line of genuinely local voice on
  index: "I live here. Highway 99 traffic and all."
- **Faith. Family. Technology.** NO chips. It appears exactly twice: (a) as a Fraunces-italic
  pull-line inside the contact-page personal band, next to the compressed `family.jpeg`;
  (b) the footer line "Proverbs 16:3 — Commit your work to the Lord." (keep verbatim — it is the
  one tasteful execution already in place). Nowhere else. Tasteful, never dominant.
- **Verification-first / compliance:** the `.trust-strip` badge row (§4.10) near the index hero and
  repeated on services (marketing + AI sections): "AI drafts · A human approves · Official Meta
  APIs only." This is our version of "no AI, real writers" — sell it loudly.

### 1.5 "The Galleria" — committed brand device
We keep the word and commit to it. "The Galleria" is the official name of the work page and the
portfolio. It always appears in small-caps ledger-label styling (§3.3) — never as a bare word in a
sentence. Nav label stays "Work"; the page identity is The Galleria.

---

## 2. Design Tokens (styles.css `:root` — exact values)

### 2.1 Color

```css
/* Brand */
--navy-950: #081226;   /* page-dark, footer, hero */
--navy-900: #0b1b34;   /* dark band surface     */
--navy-800: #12294e;   /* dark card surface     */
--navy-700: #1c3a6b;   /* dark hover/border     */
--navy-100: #dbe4f3;

--orange-700: #9a3412; /* orange text on light surfaces (AA-safe small text) */
--orange-600: #c2410c; /* rules, ticks, large-text accent on light */
--orange-500: #ea580c; /* CTA fills, badges, LIVE pulse */
--orange-400: #f97316; /* accent on DARK surfaces only (large text/ticks)   */
--orange-100: #ffedd5;

/* Neutrals — warm paper, never pure #fff/#000 */
--paper:     #faf7f2;  /* page background */
--surface:   #ffffff;  /* cards           */
--ink:       #16202e;  /* headings/body   */
--ink-soft:  #44526a;  /* secondary text  */
--ink-faint: #6b7890;  /* meta text       */
--line:      #e3ddd2;  /* hairlines       */

/* On-dark */
--on-dark:      #f2ede4; /* warm off-white, never pure #fff body text */
--on-dark-soft: #b9c4d8;
```

**Orange contrast law (non-negotiable):**
- Body-size orange text on light surfaces: `--orange-700` only.
- Orange on navy: NEVER at body size. Only ≥1.5rem-bold headings, kickers (which are ≥3:1 large-text
  exempt by size+weight+tracking), ticks, rules, and CTA fills. CTA fill `--orange-500` always
  carries white text at ≥600 weight, ≥1rem.
- No purple, no indigo, no blue-to-purple gradients anywhere. The two existing radial-gradient
  hero blobs are DELETED — dark surfaces are flat `--navy-950`/`--navy-900` with hairline
  `rgba(242,237,228,0.10)` borders. Depth comes from type and rules, not glow.

### 2.2 Typography — two families, loaded once, identically on every page

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..700;1,9..144,400..700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

- **Fraunces (variable, opsz axis active)** — display: H1/H2/H3, prices, pull-quotes, stat numbers,
  the brand mark, ledger labels. Use `font-optical-sizing: auto`. Italic Fraunces = the emphasis
  voice (hero `<em>`, pull-lines, footer tagline).
- **Inter 400/500/600** — body, nav, buttons, lists, meta. Never bold headlines in Inter.
- `font-display: swap` (in the URL). Fallback stacks: `Georgia, serif` / `-apple-system,
  "Segoe UI", sans-serif`.

**Type scale — these tokens ONLY. No other font sizes may appear in the CSS.**

```css
--text-xs:   0.8125rem;  /* meta, ledger labels, badges, footer-bottom */
--text-sm:   0.9375rem;  /* card body, list items, nav */
--text-base: 1.0625rem;  /* page body */
--text-lg:   1.25rem;    /* ledes, card H3 supporting size */
--display-sm: clamp(1.5rem, 2.4vw, 1.9rem);    /* H3 */
--display-md: clamp(2rem, 3.6vw, 2.75rem);     /* H2 */
--display-lg: clamp(2.6rem, 5vw, 4rem);        /* subpage H1 */
--display-xl: clamp(3rem, 7vw, 5.75rem);       /* index H1 only — the statement size */
--display-price: clamp(2.6rem, 4vw, 3.5rem);   /* price numbers — the number IS the product */
```

H1/H2 get `text-wrap: balance` and `letter-spacing: -0.015em`; `line-height: 1.05` on
`--display-xl`, `1.12` on `--display-lg/md`.

### 2.3 Spacing scale

```css
--s-1: 4px;  --s-2: 8px;  --s-3: 12px; --s-4: 16px; --s-5: 24px;
--s-6: 32px; --s-7: 48px; --s-8: 64px; --s-9: 96px;
--section-pad: clamp(72px, 9vw, 128px);  /* vertical section padding */
--wrap: 1160px;                          /* content max-width, 24px side padding */
```

### 2.4 Radius / border / shadow vocabulary — "physical, not floating"
The old site rounded and shadowed everything identically (AI-slop tell). New law:

- **Cards, frames, addons, FAQ:** `--radius-card: 4px`, `1px solid var(--line)` (real borders),
  NO shadow at rest.
- **Buttons, badges, LIVE pill:** `--radius-pill: 999px`.
- **Images/media:** `--radius-media: 8px`.
- **Shadows exist in exactly two places:** the featured price card
  (`0 12px 32px rgba(11,27,52,0.12)`) and an activated live-frame
  (`0 18px 48px rgba(11,27,52,0.18)`). Nothing else casts a shadow.
- Hover on cards = border-color deepens to `--navy-800` + a 2px orange top-rule slides in
  (`::before` scaleX) — NOT translateY lift on everything.

---

## 3. Layout System

### 3.1 Grid & rhythm law
12-col mental grid inside `.wrap` (1160px). **Section pacing rule: the "section-head + equal card
grid" pattern may appear at most TWICE per page.** Every page must contain, between card moments:
at least one asymmetric split band (7/5 or 8/4 columns), at least one full-bleed dark band (max two
dark bands per page — flat navy, no gradients), and at least one pure-typography moment (pull-quote
or statement line, no cards). Grids with cards use asymmetric cell sizes where specified but
STRICTLY identical gutters (`--s-5`) throughout a page.

### 3.2 SIGNATURE MOVE #1 — **The Ledger Line** (recurs on every page)
The site's memorable device, echoing the positioning ("every price listed, everything accounted
for" — a ledger). Every major section opens not with a floating H2 but with a **full-width hairline
rule that carries a small-caps Fraunces label and an orange tick**, like a line item in a ledger:

```
——●——— № 01 · THE WORK ————————————————————————
```

Component `.ledger-line`: `border-top: 1px solid var(--line)` (on dark:
`rgba(242,237,228,0.14)`), a 24px `--orange-600` tick segment at the left edge (`::before`), then
the label: `№ 01 · THE WORK` set in Fraunces 600, `--text-xs`, `letter-spacing: 0.18em`,
uppercase, `--ink-faint` with the `№ 01` numeral in `--orange-700` (`--orange-400` on dark).
Numbering runs continuously down each page (№ 01, № 02 …). The H2 sits BELOW the ledger line,
left-aligned, with its supporting paragraph beside or under it per blueprint. This replaces every
old `.section-head` centered-intro. The footer closes each page with a final unnumbered ledger
line labeled `· DREW B IT · CENTRAL VALLEY, CALIFORNIA ·`.

### 3.3 SIGNATURE MOVE #2 — **The Live Frame** (the Galleria device)
Live iframes are the one asset competitors can't show; they become a first-class product
demonstration instead of hover thumbnails.

`.live-frame` = a browser-chrome device frame: navy title bar (three 8px dots in
`--ink-faint`, a truncated real URL in a mono-ish `--text-xs` pill, and a `.live-badge` — pill,
`--orange-500`, white text "LIVE" with a 6px pulsing dot). Below the bar, a 16/10 viewport.

**Facade pattern — mandatory:**
1. At rest the viewport shows a `.frame-poster`: flat `--navy-900` panel with the project's
   oversized Fraunces initial ghosted at 30% opacity, project name, industry tag, and a pill
   button **"▶ Load the live site"** (visible always — works on touch).
2. Clicking the poster injects the iframe (`src` from `data-src`), full-interactive
   (`pointer-events: auto`), scrollable, scaled at `width:200%; height:200%;
   transform:scale(0.5)` so real layouts render legibly. Caption under the frame:
   *"This is the real site — scroll it."* plus a "Visit full site ↗" text link.
3. **Max 2 iframes active simultaneously** — activating a third deactivates the oldest (script.js
   swaps its poster back). No iframe ever loads without user intent, with ONE exception: the index
   featured Dickerson frame auto-loads via IntersectionObserver when scrolled into view (it is the
   homepage's proof centerpiece).
4. **The self-embedding drewb-it.com card is DELETED.** Five portfolio pieces, not six.

### 3.4 Hero pattern per page
No two heroes identical. All are flat `--navy-950`, off-white text, ledger-style bottom edge
(the page's first `.ledger-line` sits at the hero's bottom border). Subpage heroes use
`.hero--compact` (a class, NOT inline styles — all inline `style=""` attributes are banned
site-wide).

- **index:** asymmetric editorial split — left ~60%: kicker, `--display-xl` H1, lede, dual CTAs,
  founder-line with headshot thumb. Right ~40%: the headshot (the LCP element — `fetchpriority=
  "high"`, explicit width/height, never lazy) in a `.live-frame`-styled portrait card whose title
  bar reads `drew@drewb-it.com` with the LIVE badge reading "REAL HUMAN". Below the split, the
  trust-strip (§4.10).
- **work:** statement hero — kicker "The Galleria", H1 + lede only, no buttons, no stats. The
  first live frame is the star; the hero gets out of its way.
- **services:** H1 + lede + a horizontal `.anchor-nav` of three ledger-labeled jump links
  (№ 01 Websites / № 02 Marketing / № 03 Claude AI) styled as underlined text links with orange
  ticks — NOT three pill buttons. Directly under the hero: the ownership strip (§4.6).
- **contact:** split hero — left: kicker, H1, lede, primary CTA "Email one link → get 3 fixes"
  (mailto) + secondary "Book the free 30-min call" (mailto). Right: headshot with the
  one-business-day promise caption. Nav CTA label is **"Book a free call"** on ALL pages
  including contact (the old contact-page swap to "Email Drew" is removed).

### 3.5 Section rhythm per page (summary; full blueprints §6)
Dark bands: index = process band + closing CTA; work = automation case-study band; services =
"What's next: Marketing & Sales Agents" band; contact = none (contact stays warm/light after its
hero).

---

## 4. Component Specs

### 4.1 Header / nav
Sticky, `rgba(8,18,38,0.92)` + `backdrop-filter: blur(12px)`, 68px, 1px bottom hairline. Brand
"Drew B **IT**" in Fraunces 600, the "IT" in `--orange-400`. Links Inter 500 `--text-sm`;
current page gets a 2px orange underline offset 6px. `.nav-cta` pill (orange-500, white,
"Book a free call") on every page. Mobile ≤720px: `.nav-toggle` is an **animated 2-line SVG/CSS
hamburger** (two 18px bars that rotate to an X, 200ms) — the raw ☰ character is banned. Menu
drops as a full-width navy panel. `aria-expanded` managed by script.js.

### 4.2 Buttons
All pill (`--radius-pill`), Inter 600, 14px 28px padding, 200ms transitions on
transform/background only.
- `.btn-primary`: `--orange-500` fill, white text; hover `--orange-400` + `translateY(-1px)`.
- `.btn-ghost`: 1.5px `rgba(242,237,228,0.35)` border, on-dark text (dark surfaces only).
- `.btn-outline`: 1.5px `--navy-800` border, navy text; hover fills navy (light surfaces only).
- `.btn-text`: underlined text link with orange tick prefix, for tertiary actions.
Every interactive element gets a `:focus-visible` style: `outline: 2px solid var(--orange-500);
outline-offset: 3px;` — site-wide, no exceptions.

### 4.3 Price cards (`.price-grid` / `.price-card`)
Three cards per service line, LOW → FEATURED → HIGH (rightmost = anchor tier). Gutters `--s-5`.
- Standard card: `--surface`, 4px radius, 1px `--line` border, no shadow.
- `.price-card--featured` (middle): **flat `--navy-900` dark treatment** (the featured tier
  "glows" against light siblings), 4px radius, the one card with a shadow, scale ~1.02 on
  desktop, `.badge` pill top-left ("Most popular" / "Best value" / "Recurring value"), orange
  H3 tick. This intentionally breaks the three-identical-cards tell.
- **The price is the hero of the card:** Fraunces `--display-price`, `--navy-900` (on-dark:
  `--on-dark`), with `/mo` or `one-time` as a deliberate `--text-sm` `--ink-faint` suffix.
- Bullets: benefit narratives, not feature dumps (≤5 per card), `--text-sm`, orange ✓,
  dashed hairline separators.
- Each card footer: direct-action CTA ("Start with Growth" → `/contact.html`), and where §6
  specifies, a `.ladder-line` — `--text-xs` italic Fraunces naming the next rung ("Most
  Jumpstart clients continue on Managed AI →").
- Under every recurring price card grid, the guarantee line (§4.6) appears within one viewport.

### 4.4 Add-on row (`.addon-row` / `.addon`)
3-cell grid, `--paper` cells, 4px radius, 1px border, `--text-sm`. Price in `--orange-700` 700.
Used ONLY for true add-ons — the roadmap teaser is promoted out of it (§6 services).

### 4.5 FAQ (`.faq`)
`<details>` blocks, 4px radius, 1px border, Fraunces 600 summary with an orange "+" marker that
rotates 45° when open (200ms). Chevron/marker via `::marker` suppression + `::after`. One FAQ
block per page minimum on services and index (§6).

### 4.6 Ownership / guarantee strip (`.own-strip`) — highest-leverage trust component
A slim full-width band, `--orange-100` background, `--ink` text, orange left rule, appearing:
directly under the services hero, and beneath the web price grid on index's pricing teaser.
Exact copy: **"You own your site, your domain, your content. Every monthly plan cancels with 30
days' notice — and after the 12-month $0-down term, the site is 100% yours. If you leave, you
leave with everything."** Plus on services web section: "First 30 days on any care plan: not
happy, don't pay."

### 4.7 Stat / proof elements (`.stat-row` / `.stat`)
Fraunces number (`--display-sm`, orange-700/orange-400 per surface) over an Inter `--text-xs`
uppercase label. **Only real, defensible stats.** Approved set: `5` live client-grade sites ·
`10+ yrs` IT, MSP & sales engineering · `1` site recovered from total loss · `1 business day`
reply promise. The old "$0 surprise invoices" and "6 sites" padded stats are banned.

### 4.8 Founder line (`.founder-line`)
48px round headshot thumb + one line: "**Run entirely by Drew Babbitt.** Nothing outsourced,
nothing offshored — you work with the person who builds it." Used in index hero; a text-only
variant appears above the services FAQ.

### 4.9 Route line (`.route-line`)
The Central Valley typographic device: `MODESTO → OAKDALE → TURLOCK → MANTECA → TRACY` in
Fraunces small-caps `--text-xs`, letter-spaced, arrows in `--orange-600`, cities in `--ink-soft`,
optionally wrapped by hairlines. Appears on index (proof band) and contact (direct-line card).

### 4.10 Trust strip (`.trust-strip`)
Three inline badge items separated by orange ticks, `--text-sm`, each with a Fraunces 600 lead:
**"AI drafts — a human approves." · "Official Meta APIs only." · "If a tactic risks your
account, I won't build it."** Sits under the index hero split and is repeated inside services
№ 02 and № 03 sections.

### 4.11 CTA band (`.cta-band`)
Full-bleed flat `--navy-900` band (not a rounded floating card): ledger-line top edge, Fraunces
H2, one supporting line, dual CTAs — `.btn-primary` (Book the free call) + `.btn-text` on-dark
(Send one link → get 3 fixes). Appears once at the bottom of index, work, services. Contact ends
with the personal band instead.

### 4.12 Process (`.process`)
Named method: **Audit → Build → Verify → Care.** Rendered as a horizontal 4-stop timeline on a
dark band — orange nodes on a hairline spine, Fraunces step names, one plain sentence each
(copy in §6 index). NOT four equal cards. Collapses to a vertical spine ≤720px.

### 4.13 Case-study cards (`.case-card`) — numbers mandatory
Dark cards (navy-800, 4px radius, hairline border) with a `.case-stat` slot: one Fraunces
orange-400 metric headline per card (approved copy in §6 work). Where no client number exists,
use the concrete-scenario line instead of inventing a metric.

### 4.14 Footer
Flat `--navy-950`. Closing ledger line (§3.2), then 4-col grid (brand+tagline / Explore /
Services / Connect), then footer-bottom with © line and — verbatim, always —
"Proverbs 16:3 — Commit your work to the Lord." Footer tagline: Fraunces italic
"Websites. Automation. AI. One person, flat monthly plans." ("One person", not "one partner".)

### 4.15 Head boilerplate (every page)
Unique `<title>` + meta description per page; canonical; OG tags with per-page description;
`og:image` = `headshot.jpeg` (compressed); favicon on every page as inline SVG data URI —
navy rounded square, Fraunces-style orange "D":
`<link rel="icon" href="data:image/svg+xml,...">` (design-system builder defines the exact URI;
page builders copy it). Keep the existing JSON-LD ProfessionalService block on index (unchanged),
and add `FAQPage` JSON-LD on services matching the visible FAQ.

---

## 5. Motion — complete inventory (nothing else animates)

| # | Animation | Spec | Notes |
|---|---|---|---|
| 1 | Section reveal | opacity 0→1 + translateY(14px→0), 400ms ease-out, via IntersectionObserver (`script.js`), threshold 0.15, unobserve after fire | Applied to section-level blocks and card GRIDS only — never to individual paragraphs or the hero (hero renders instantly; it's the LCP) |
| 2 | Grid stagger | children of a revealed grid get `transition-delay: calc(var(--stagger-i) * 70ms)`, capped at 4 steps | `--stagger-i` set by nth-child in CSS. Uniform simultaneous fade = banned |
| 3 | Card hover | border-color 200ms + top orange rule scaleX 0→1 200ms | transform/opacity/border-color only |
| 4 | Button hover | background 200ms, translateY(-1px) 150ms | |
| 5 | LIVE badge pulse | 6px dot, opacity 1→0.35→1, 2s infinite | The only looping animation on the site |
| 6 | Hamburger morph | bars rotate to X, 200ms | |
| 7 | FAQ marker | "+" rotates 45°, 200ms | |
| 8 | Live-frame activation | poster fades out 250ms as iframe fades in | |

`@media (prefers-reduced-motion: reduce)`: reveals render visible immediately (script.js also
checks `matchMedia` and skips observing), LIVE dot static, `scroll-behavior: auto`, all
transitions ≤1ms. No parallax, no scroll-jacking, no countdowns, ever.

`script.js` total responsibilities: reveal observer, nav toggle, live-frame facade loader
(click-to-load, 2-active cap, Dickerson auto-load on index), footer year. Nothing else. ~120
lines max, vanilla JS.

---

## 6. Per-Page Blueprints

**PRICING — FIXED, VERBATIM:** Web builds from $1,500 (or $0-down on 12-mo Growth term); care
plans $99 Essential / $249 Growth (featured) / $499 Partner per month; landing page $250; local
SEO +$200/mo (add-on ONLY); DM Concierge $750 one-time; Social Autopilot from $400/mo (featured);
Prospecting Engine +$250/mo; extra channel +$100/mo; AI Jumpstart $950; Managed AI from $350/mo
(featured); Team Rollout from $2,500; consulting $125/hr (overflow, de-emphasized text line);
extra training workshop $300/session.

### 6.1 index.html
1. **Hero** — per §3.4. CTAs: primary "See services & pricing" → `/services.html`; ghost "Walk
   through the Galleria" → `/work.html`. Founder-line below CTAs. `.trust-strip` closes the hero.
2. **№ 01 · WHAT I DO** — ledger line + H2 "Three ways I make your business run better" (keep).
   The ONE bento-style grid of the page: asymmetric 3-cell layout (Web cell spans wider; identical
   gutters). Each `.pillar`: number, H3 (keep "Websites that work" is banned as H3 — replace with
   "Websites that win customers" / "Marketing on autopilot" / "Claude AI, set up right"), 2-3
   sentence body (current copy is good), "from $X/mo" line, text link. De-dupe "built to convert"
   (use once site-wide, on work.html).
3. **№ 02 · THE PROOF** — the Dickerson recovery story as an oversized asymmetric feature (7/5
   split): left = narrative told as a 3-beat recovered-vs-lost timeline ("The site vanished off
   GoDaddy." → "I recovered every page of content." → "Rebuilt, relaunched, structured for local
   search.") with the industry tag "Law firm · Oakdale, CA" and a `.stat` "1 site recovered from
   total loss"; right = the auto-loading Dickerson `.live-frame` (§3.3). Below: a compact
   single-row strip of the other four projects as small poster cards (name + industry tag,
   linking to work.html — no iframes here). Close with `.route-line` + the local-voice line.
4. **№ 03 · THE METHOD** — dark band. H2 "How working together goes" + `.process` timeline
   Audit → Build → Verify → Care. Step copy: Audit = "Thirty minutes on what you sell, who you
   serve, and where technology is costing you money." Build = "A one-page fixed-scope proposal,
   then you watch the build at a live preview link." Verify = "Nothing ships until a human — you
   and me — has approved it. That goes double for anything AI touches." Care = "Your monthly plan
   keeps it fast, secure, and improving, with a real human one email away."
5. **№ 04 · WHY MONTHLY** — pure-typography split moment (no cards): Fraunces pull-quote left —
   "When every edit is a $200 invoice, sites go stale. Flat plans make improvement frictionless."
   Right: 3 short paragraphs — the TCO stack (hosting + security + backups + monitoring + a
   developer on call, bought separately, costs more than $99–$249), the honest 5-year math named
   head-on, and the `.own-strip` ownership copy (§4.6).
6. **№ 05 · ABOUT** — asymmetric strip: headshot (4px-radius framed) + "Built by one person who
   answers his own email" + current bio copy (keep, it's good) — chips DELETED, replaced by one
   Fraunces-italic line: "Faith. Family. Technology." is NOT here (it lives on contact); instead
   close with "Based in the Central Valley. When you call, you get the person who built your
   site — not a ticket queue."
7. **№ 06 · FAIR QUESTIONS** — 3 FAQs (ownership, who does the work, why monthly — condensed from
   services).
8. **CTA band** — H2 "Let's find the money leak in your tech." (keep) + dual CTA per §4.11.

### 6.2 work.html
1. **Hero** — statement hero per §3.4.
2. **№ 01 · THE GALLERIA — WEBSITES** — H2 "Five industries. One standard: fast, honest, built to
   convert." Editorial stack, NOT a uniform 2-up grid: Dickerson first and full-width (7/5 split,
   live frame left, recovery story right — same 3-beat timeline as index, slightly longer); then
   the remaining four in a 2-up grid of `.live-frame` facade cards, each with industry tag, H3,
   2-3 sentence "challenge → what I built" caption, and meta line (keep current captions — they're
   good; drop the drewb-it.com self-card entirely). Order: Dickerson (Law Firm), Shepherd & Me
   (Coaching), Preschool Playbook Co. (Education e-commerce), DaBomb Breaks (Marketplace),
   Drewbeee Rips (Data-driven catalog).
3. **№ 02 · BEHIND THE SCENES — AUTOMATION & AI** — dark band, 6 `.case-card`s with mandated
   metric/scenario headlines: HaloPSA = "Tickets, alerts, and invoices flow with zero copy-paste";
   Acronis = "Backup failures surface in minutes — not at restore time"; Security assessments =
   "A client-ready report in minutes, not an afternoon of writing"; CloudRadial = "Common requests
   answer themselves; the rest route with full context attached"; Job-application agent = "Researches,
   drafts, and waits for one-tap human approval before anything sends"; Claude deployment = "A
   whole team onboarded: setup scripts, SOPs, and training that stuck." Cross-link line under the
   grid: "These systems power the plans on the services page →".
4. **№ 03 · Pull-quote moment** — light, pure typography: "Nothing in this Galleria is a mockup.
   If I'll show it to you, it's running."
5. **CTA band** — "Want yours in the Galleria?" + dual CTA.

### 6.3 services.html
1. **Hero** — per §3.4 with `.anchor-nav`. Then `.own-strip` full copy (§4.6).
2. **№ 01 · WEBSITES** — intro (keep current copy) + build-price anchor line, verbatim pattern:
   "Custom small-business sites typically run $3,000–$6,000. Mine start at **$1,500** — or **$0
   down** on a 12-month Growth term — because I build lean, fast, static sites with no platform
   bloat." Then the $0-down explainer in one plain sentence (Mighty-Sites style): "No setup fees,
   no first-year-only pricing that triples in year two; cancel after the term and the site is
   simply yours." Price grid: Essential $99 / **Growth $249 featured, dark card, "Most popular"**
   / Partner $499 (anchor). Growth reframe line for the law-firm buyer: "Less than one billable
   hour a month." Ladder lines: build addon → "Every site launches onto a care plan (Growth
   pre-selected)." Add-on row: landing page $250 · Local SEO "+$200/mo — add-on to any care plan"
   (never standalone) · new build from $1,500. Guarantee line under grid. Proof cross-link:
   "See it live: the Dickerson Law rebuild →".
3. **№ 02 · MARKETING AUTOMATION** — intro (keep) + `.trust-strip` + anchor line: "Full-service
   social agencies charge $1,200+/month. Social Autopilot delivers consistent, on-brand posting
   from **$400** because software does the heavy lifting — and a human approves everything."
   Price grid: DM Concierge $750 one-time / **Social Autopilot $400/mo featured "Best value"** /
   Prospecting Engine +$250/mo (anchor, labeled add-on). Ladder line on Concierge: "Most Concierge
   clients graduate to Social Autopilot →". Add-on row: extra channel +$100/mo · compliance
   promise cell (keep copy).
4. **№ 03 · WHAT'S NEXT (dark band, full-width — promoted OUT of the addon row):** H2 "Coming
   next: AI Marketing & Sales Agents." Copy: agents that research competitors' posts, comments,
   and audiences, then hand you a weekly brief of warm leads and content angles already working
   in your market — official Meta APIs only, every outreach human-approved. CTA: working mailto
   `.btn-primary` "Join the early list" (`mailto:drew@drewb-it.com?subject=Early%20list%3A%20AI%20Marketing%20Agents`).
5. **№ 04 · CLAUDE AI** — intro (keep) + `.trust-strip` + THE anchor move, verbatim pattern:
   "Typical AI consulting retainers run $2,000–$8,000 a month. Managed AI starts at **$350**
   because it's productized, not bespoke." Payback mini-math line: "Save 10 hours a week at
   $50/hr and you've recovered about $2,000 a month — Managed AI pays for itself in the first
   week." Reporting promise: "The monthly report shows what the automations did — not hours
   logged." Price grid: AI Jumpstart $950 / **Managed AI $350/mo featured "Recurring value"** /
   Team Rollout $2,500 (anchor). Ladder line on Jumpstart: "Most Jumpstart clients continue on
   Managed AI →". Add-on row: training workshop $300 · verification-first cell (keep copy) ·
   consulting as a plain de-emphasized TEXT LINE below the row (not a card): "Need extra hands?
   Workflow & integration consulting at $125/hr — overflow only; the monthly plans are the main
   engagement." Proof cross-link: "See it in production: team-wide Claude deployment →" (work.html).
6. **№ 05 · FAIR QUESTIONS** — keep all five current FAQs verbatim (they're the strongest copy on
   the site) + add one: "What do I actually own?" answered with the ownership copy. Founder-line
   text variant above the block.
7. **CTA band** — "Not sure which plan fits?" (keep copy) + dual CTA.

### 6.4 contact.html
1. **Hero** — per §3.4: 3-fixes as H1/primary, call as secondary. Nav CTA stays "Book a free call".
2. **№ 01 · THE DIRECT LINE** — asymmetric split: left card = `drew@drewb-it.com` big-link,
   "Email lands directly with me — not a shared inbox, not a ticket system. I reply within one
   business day, usually much faster." + `.route-line` + GitHub link. Right card = "What makes a
   great first email" (keep current 4-item list verbatim — it's excellent) + the "everything is
   public on purpose" line.
3. **№ 02 · THE PERSON** — the personal band (light, warm): compressed `family.jpeg` (4px-radius
   frame) + Fraunces-italic pull-line **"Faith. Family. Technology."** + 2 sentences: "Drew B IT
   is how I take care of my family — which is exactly why your project gets treated like it
   matters. Based in the Central Valley; I live here, Highway 99 traffic and all." Tasteful,
   ~40% viewport height max.
4. **Closing strip** — not a full CTA band: single centered line + button: "Thirty minutes, zero
   pressure. Worst case, you leave with a punch list you can hand to anyone." → "Book the free
   call" (mailto with the existing prefilled body).

---

## 7. Class-Name Vocabulary Contract (styles.css implements ALL of these; pages use ONLY these)

Layout: `.wrap` `.section` `.section--dark` `.section--tight` `.split` `.split--7-5` `.split--5-7`
`.bento` `.stack`
Ledger system: `.ledger-line` `.ledger-line__label` `.ledger-line--dark` `.ledger-line--footer`
Header/nav: `.site-header` `.brand` `.brand__dot` `.site-nav` `.nav-cta` `.nav-toggle`
`.nav-toggle__bar` `.site-nav.open`
Hero: `.hero` `.hero--compact` `.hero__kicker` `.hero__lede` `.hero-actions` `.anchor-nav`
Buttons: `.btn` `.btn-primary` `.btn-ghost` `.btn-outline` `.btn-text`
Live frames: `.live-frame` `.live-frame__bar` `.live-frame__dots` `.live-frame__url`
`.live-badge` `.live-frame__viewport` `.frame-poster` `.frame-poster__initial`
`.frame-poster__load` `.live-frame.is-active` `.frame-caption`
Work: `.galleria` `.work-feature` `.work-grid` `.work-card` `.work-card__tag` `.work-card__meta`
`.timeline-3beat` `.case-grid` `.case-card` `.case-stat`
Pillars/bento: `.pillars` `.pillar` `.pillar__num` `.pillar__from` `.pillar-link`
Pricing: `.price-grid` `.price-card` `.price-card--featured` `.badge` `.tier-note` `.price`
`.price__per` `.price-sub` `.ladder-line` `.addon-row` `.addon` `.price-inline` `.anchor-note`
`.guarantee-line`
Trust/proof: `.own-strip` `.trust-strip` `.trust-strip__item` `.founder-line` `.founder-line__thumb`
`.stat-row` `.stat` `.stat__num` `.stat__label` `.route-line` `.pull-quote`
Process: `.process` `.process__step` `.process__node` `.process__spine`
About/personal: `.about-strip` `.personal-band` `.ethos-line`
Contact: `.contact-grid` `.contact-card` `.big-link` `.contact-list`
FAQ: `.faq` `.faq__summary`
CTA/footer: `.cta-band` `.cta-band__actions` `.site-footer` `.footer-grid` `.footer-tag`
`.footer-bottom`
Motion/state: `.reveal` `.reveal.in` (stagger via `--stagger-i` on grid children)
Utilities (the ONLY utilities): `.visually-hidden` `.text-center`

Rules: BEM-ish as listed, no new top-level classes without adding them here, ZERO inline `style`
attributes in any HTML file, no `!important` except the existing `.nav-cta` color override if
strictly needed.

---

## 8. Performance & QA Ship Checklist (every builder verifies before done)

1. `headshot.jpeg` compressed (≤1200px longest side, ≤120KB — `sips -Z 1200 -s formatOptions 70`);
   `family.jpeg` compressed likewise (≤250KB) and actually USED (contact §6.4) — no dead-weight
   assets. Explicit `width`/`height` on every `<img>`. Hero headshot: `fetchpriority="high"`,
   never lazy; everything below the fold `loading="lazy"`.
2. No iframe loads without user intent except the index Dickerson frame (IntersectionObserver).
   Max 2 active frames. No self-embedding drewb-it.com frame anywhere.
3. Fonts: single identical `<link>` block per §2.2 on all pages, preconnects present.
4. AI-slop audit: no gradients on dark surfaces, no purple/indigo, no uniform radius (4px cards /
   pill buttons / 8px media only), no three-identical-card rows (featured tier is dark), no
   uniform reveal timing (stagger present), no emoji, no banned words (§1.3), no inline styles,
   no stock/AI imagery — real screenshots-via-iframe, headshot, family photo only.
5. Accessibility: `:focus-visible` everywhere, WCAG AA on every text/background pair (orange law
   §2.1), `prefers-reduced-motion` honored, `aria-expanded` on nav toggle, `aria-hidden` +
   `tabindex="-1"` on unactivated iframes, descriptive alt text on all images.
6. Every page: unique title + meta description, canonical, OG set, inline-SVG favicon, footer
   Proverbs line verbatim. Index keeps JSON-LD ProfessionalService; services adds FAQPage JSON-LD.
7. Test at 375 / 428 / 768 / 1024 / 1440px: no horizontal scroll, ledger lines full-width, price
   grids stack to 1-col ≤720px (featured card first in stacked order).
8. Prices cross-checked against §6 header — character-for-character.
