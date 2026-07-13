# BRAND_KIT.md — Official Brand Integration Spec (v2.1 "The Ledger, Hand-Painted")

## Master Brand (authoritative — source: `/Users/drewanthonybabbitt/.claude/jobs/dc7260a6/tmp/DrewB-IT_Master_Brand/`)

Drew's Master Brand package supersedes this spec wherever they disagree. Its directives:

- **Creative north star:** *"Technology rooted in community."* Lives in the index hero kicker
  and the `.footer-tag` line on all four pages.
- **Brand story:** *"Drew B.-IT exists to preserve and grow local businesses through thoughtful
  technology."* Placed verbatim in the index № 05 About section.
- **Name styling:** the official wordmark is **"Drew B.-IT"** — period after the B, hyphen
  before IT. Applies to the header/footer `.brand` text (`Drew B.<span class="brand__dot">-IT</span>`),
  `<title>` tags, og:titles, JSON-LD `name`, and all brand-name mentions in visible copy.
  Domain (`drewb-it.com`) and email (`drew@drewb-it.com`) are unchanged.
- **Official color names** (annotate tokens with these; hexes unchanged):
  - `#0F2B46` navy — **Modesto Water Tower Blue**
  - `#D97132` orange — **Orange Grove Gold**
  - `#F2EDE3` cream — **Almond Blossom Cream**
  - `#6B7F5A` olive — **Valley Olive**
  - `#ADA79A` warm gray — **Barnwood Brown**
  - `#3B5A6B` slate — no Master Brand name; keeps its existing "BRAND SLATE" comment.
- **Aesthetic:** "Hand-painted California Heritage Modern. Avoid generic tech visuals."
  Circuit language stays confined to the two sanctioned texture devices (§4). Orange-grove /
  almond-blossom motifs are sanctioned brand language.

---

This document layers Drew's hand-painted brand kit onto the shipped Ledger design system.
**It is a re-skin + asset integration, NOT a redesign.** Structure, typography (Fraunces + Inter),
layout, components, motion, copy, and ALL pricing stay exactly as DESIGN_BRIEF.md specifies.
Where this document and DESIGN_BRIEF.md disagree on a COLOR VALUE or a BRAND ASSET, this
document wins. On everything else, DESIGN_BRIEF.md wins.

Hard constraints unchanged: static HTML/CSS/JS, GitHub Pages, no build step, do not touch
`shepherdandme/` or `CNAME`, prices verbatim, zero inline styles.

---

## 0. Assets on disk (`/assets/brand/`)

| File | Size | Notes |
|---|---|---|
| `logo-full.jpg` | 1400×933 | Full horizontal wordmark. **Opaque cream background** — only on cream/paper surfaces or framed. Never floated on navy. |
| `logo-full-800.jpg` | 800×533 | Same, for in-page use. |
| `badge-640.jpg` | 640×640 | Circular badge, opaque white bg (print/reference; not used in HTML). |
| `badge-320.png` | 320×320 | Badge, **opaque** (no alpha), near-white corners. |
| `badge-48.png` / `badge-32.png` | 48/32 | Favicon sizes. |
| `apple-touch-icon.png` | 180×180 | iOS icon. |

**Measured fact:** none of the badge PNGs have an alpha channel; corners are `#FDFEFD` and the
painted navy rim reaches the image edges. Therefore every on-page badge `<img>` MUST get
`border-radius: 50%` (crops the white corners exactly at the inscribed circle). This is the
`.brand__badge` treatment below.

**One derived asset to generate** (retina header mark — 40px display needs 80px+ source;
badge-48 is too soft at 2×, badge-320 is a 180KB header tax):

```bash
sips -Z 96 assets/brand/badge-320.png --out assets/brand/badge-96.png
```

---

## 1. TOKEN REMAP — styles.css `:root`

Brand anchors: navy `#0F2B46` · slate `#3B5A6B` · orange `#D97132` · olive `#6B7F5A` ·
cream `#F2EDE3` · warm gray `#ADA79A`. Every derived shade below was chosen by computed
WCAG math (ratios listed are computed, not estimated).

### 1.1 The remap table (edit tokens in place; component CSS mostly untouched)

```css
/* Brand navy ramp — anchored on #0F2B46 */
--navy-950: #0A1E31;   /* was #081226 — page-dark, footer, hero (derived darker brand navy) */
--navy-900: #0F2B46;   /* was #0b1b34 — dark band surface  ← BRAND NAVY, exact */
--navy-800: #1A3A57;   /* was #12294e — dark card surface  (derived lighter) */
--navy-700: var(--slate); /* was #1c3a6b — dark hover/border → slate takes this job */
--navy-100: #D8E1E6;   /* was #dbe4f3 — cool-cream tint */

/* Brand orange ramp — anchored on #D97132 */
--orange-700: #A34E12; /* was #9a3412 — small orange text on light (AA-derived) */
--orange-600: #B4551B; /* was #c2410c — rules/ticks on light + REST state of white-text fills */
--orange-500: #C2551C; /* was #ea580c — CTA hover fills, focus ring (white text still AA) */
--orange-400: #E58B50; /* was #f97316 — orange text/ticks on DARK surfaces (AA at small size) */
--orange-100: #F6E3CE; /* was #ffedd5 — soft orange tint (kept for future use) */
--orange-brand: #D97132; /* NEW — decorative-only brand orange: brush ticks, process/timeline
                            nodes, LIVE pulse contexts, hover top-rules. NEVER text, never a
                            fill that carries body-size white text. */

/* Neutrals — the page becomes the brand's cream paper */
--paper:     #F2EDE3;  /* was #faf7f2 — ← BRAND CREAM, exact. logo-full.jpg now sits seamless. */
--surface:   #FBF8F1;  /* was #ffffff — cards: derived cream-white, never pure #fff */
--ink:       #1C2B36;  /* was #16202e — headings/body (warm navy-black) */
--ink-soft:  var(--slate); /* was #44526a — secondary text → slate takes this job */
--ink-faint: #66604F;  /* was #5d6a82 — meta text: DERIVED FROM WARM GRAY #ADA79A (darkened) */
--line:      #DCD5C6;  /* was #e3ddd2 — hairlines: derived tint of warm gray */
--gray-warm: #ADA79A;  /* NEW — ← BRAND WARM GRAY, exact. Decorative only: photo/logo frame
                          borders, .live-frame__dots, stronger hairlines on cream. Never text. */

/* NEW brand tokens with specific jobs */
--slate: #3B5A6B;      /* ← BRAND SLATE, exact. JOB: secondary UI — secondary text on light
                          (--ink-soft), dark-surface hover borders (--navy-700), .btn-outline
                          border/fill, .process__spine on light contexts. */
--olive: #6B7F5A;      /* ← BRAND OLIVE, exact. JOB: proof/compliance/guarantee accents —
                          .own-strip left rule, .trust-strip ticks, .guarantee-line ✓.
                          Decorative only on cream (3.74:1). */
--olive-700: #556247;  /* NEW derived — olive TEXT on light (verification strongs, est-lines) */
--olive-300: #A9BB90;  /* NEW derived — olive accent/text on dark (trust ticks on navy) */
--olive-100: #E7EADC;  /* NEW derived — .own-strip background tint */

/* On-dark */
--on-dark:      #F2EDE3; /* was #f2ede4 — ← BRAND CREAM, exact */
--on-dark-soft: #B8C7D0; /* was #b9c4d8 — slate-tinted cream */
--line-dark:     rgba(242, 237, 227, 0.14);  /* re-derive from #F2EDE3 */
--hairline-dark: rgba(242, 237, 227, 0.10);
```

### 1.2 Computed WCAG ratios (every text-on-surface pair this spec uses)

**On light — paper `#F2EDE3` / surface `#FBF8F1`:**

| Pair | Ratio | Verdict |
|---|---|---|
| ink `#1C2B36` on paper / surface | **12.43 / 13.67** | AAA |
| navy-900 `#0F2B46` on paper (prices, big-link) | **12.38** | AAA |
| slate `#3B5A6B` (ink-soft) on paper / surface | **6.29 / 6.92** | AA all sizes ✓ |
| slate on olive-100 `#E7EADC` | **6.01** | AA ✓ |
| ink-faint `#66604F` on paper / surface (text-xs labels) | **5.37 / 5.91** | AA ✓ |
| orange-700 `#A34E12` on paper / surface (small orange text) | **4.92 / 5.42** | AA ✓ — this is the AA-safe orange; raw `#D97132` on cream is only **2.83** (fails, hence banned as text) |
| olive-700 `#556247` on paper (olive text) | **5.58** | AA ✓ |
| ink `#1C2B36` on olive-100 (own-strip body) | **11.88** | AAA |
| orange-600 `#B4551B` on paper / surface (rules, ✓ marks — non-text 3:1) | **4.23 / 4.65** | ✓ |
| olive `#6B7F5A` on paper / olive-100 (rules — non-text 3:1) | **3.74 / 3.58** | ✓ |
| orange-500 `#C2551C` focus ring vs paper (non-text 3:1) | **3.90** | ✓ |

**White text on orange fills (buttons, badges — 4.5:1 required at ≤17px/600):**

| Fill | White-text ratio | Use |
|---|---|---|
| `#B4551B` (orange-600) | **4.93** | REST state: `.nav-cta`, `.btn-primary`, `.live-badge`, `.frame-poster__load`, `.badge` |
| `#C2551C` (orange-500) | **4.56** | HOVER state (lighter-on-hover preserved, still AA) |
| `#D97132` raw | **3.30** | FAILS — never a white-text fill. Decorative only. |

**On dark — navy-950 `#0A1E31` / navy-900 `#0F2B46` / navy-800 `#1A3A57`:**

| Pair | Ratio | Verdict |
|---|---|---|
| cream `#F2EDE3` on 950 / 900 / 800 | **14.48 / 12.38 / 10.07** | AAA |
| on-dark-soft `#B8C7D0` on 950 / 900 / 800 | **9.75 / 8.33 / 6.78** | AA all ✓ |
| orange-400 `#E58B50` on 950 / 900 / 800 (kickers, № numerals, small ticks) | **6.55 / 5.60 / 4.56** | AA even at text-xs ✓ |
| orange-brand `#D97132` on 950 / 900 (LARGE text ≥1.5rem/600 only, e.g. `.case-stat` may stay `--orange-400` anyway) | **5.12 / 4.37** | ≥3:1 large ✓ |
| olive-300 `#A9BB90` on 950 / 900 | **8.20 / 7.01** | AA ✓ |
| cream on slate `#3B5A6B` | **6.29** | AA ✓ |
| on-dark-soft on slate | **4.24** | <4.5 → **rule: slate is never a surface under soft/body text**; borders + accents only |

### 1.3 Component re-pointing (small CSS edits, not new components)

1. `.own-strip` → `background: var(--olive-100); border-left: 4px solid var(--olive);`
   (the ownership guarantee is a PROOF component — olive's job). Text stays `--ink`.
2. `.trust-strip__item + .trust-strip__item::before` (ticks) → `var(--olive)` on light,
   `var(--olive-300)` on dark. `.guarantee-line::before` (✓) → `var(--olive)`.
   Price-card `li::before` ✓ marks STAY orange (`--orange-600`) — orange = commerce, olive = compliance.
3. `.live-frame__dots` → `background/box-shadow: var(--gray-warm)`.
4. `.about-strip img`, `.personal-band img` borders → `1px solid var(--gray-warm)` (photo-frame job).
5. `.btn-outline` → `border-color: var(--slate); color: var(--slate); hover background: var(--slate)`.
6. `.btn-primary` → rest `var(--orange-600)`, hover `var(--orange-500)` (both AA with white; the
   old lighter-hover `#f97316` slot is gone). Same pattern for `.frame-poster__load` (already 600→500).
7. `.process__node`, `.timeline-3beat li::before` → `var(--orange-brand)` (decorative dots get
   the true brand orange).
8. Hero/`.case-card`/`.pillar` etc. hover top-rules (`::before` 2px) → `var(--orange-brand)` on
   light, keep `--orange-400` on dark.
9. Everything else inherits correctly through the token remap — no further edits.

---

## 2. LOGO USAGE

### 2.1 Header (all four pages) — badge beside the wordmark
The navy header gets the circular badge as a 40px "enamel pin" left of the existing text brand.
Full logo is BANNED here (cream box on navy).

```html
<a class="brand" href="/">
  <img class="brand__badge" src="/assets/brand/badge-48.png"
       srcset="/assets/brand/badge-48.png 1x, /assets/brand/badge-96.png 2x"
       alt="" width="40" height="40">
  Drew B <span class="brand__dot">IT</span>
</a>
```

```css
.brand { display: inline-flex; align-items: center; gap: var(--s-3); }
.brand__badge {
  width: 40px; height: 40px;
  border-radius: 50%;                                  /* crops the opaque white corners */
  box-shadow: 0 0 0 1px var(--hairline-dark);          /* hairline seat on navy */
}
.site-footer .brand__badge { width: 32px; height: 32px; }
```

### 2.2 Footer (all four pages) — badge, not full logo
Footer is `--navy-950` → badge only (32px, same markup) in the brand column, above `.footer-tag`.
Plus the new `.footer-est` line (see §3).

### 2.3 Hero — DECISION: no badge, no watermark
The index hero's right column is the headshot ("REAL HUMAN") — the brand kit must not compete
with the founder's face, and the header badge is already 12px above. No ghosted watermarks
anywhere (kitsch risk). Heroes unchanged.

### 2.4 The full logo's one on-page moment — index brand strip
`logo-full-800.jpg` appears exactly once on the site, on index, in a slim cream band directly
above the footer (after the CTA band), where its cream background sits seamlessly on
`--paper` (#F2EDE3 — now an exact match):

```html
<section class="section section--tight brand-strip">
  <div class="wrap">
    <img src="/assets/brand/logo-full-800.jpg"
         srcset="/assets/brand/logo-full-800.jpg 800w, /assets/brand/logo-full.jpg 1400w"
         sizes="(max-width: 720px) 90vw, 560px"
         alt="Drew B IT — hand-painted logo: the Modesto water tower with almond blossoms and circuit traces. Managed IT. Websites. AI Automation. Est. 2024."
         width="800" height="533" loading="lazy">
    <div class="ledger-line ledger-line--footer">
      <span class="ledger-line__label">· Modesto Proud · Local Focused · Est. 2024 ·</span>
    </div>
  </div>
</section>
```

```css
.brand-strip { background: var(--paper); text-align: center; }
.brand-strip img {
  max-width: 560px; width: 100%; margin: 0 auto var(--s-6);
  border-radius: var(--radius-media);
  border: 1px solid var(--gray-warm);   /* the framed-context treatment */
}
```

No caption text repeating the taglines — they are already painted inside the image (alt text
carries them for a11y/SEO).

### 2.5 Social cards — og:image + twitter (all four pages)
Replace `og:image` headshot with the full logo (1400×933, ideal card aspect):

```html
<meta property="og:image" content="https://drewb-it.com/assets/brand/logo-full.jpg">
<meta property="og:image:width" content="1400">
<meta property="og:image:height" content="933">
<meta property="og:image:alt" content="Drew B IT — Managed IT. Websites. AI Automation. Est. 2024, Modesto CA.">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="https://drewb-it.com/assets/brand/logo-full.jpg">
```

### 2.6 Favicons (all four pages) — replace the inline-SVG "D" entirely

```html
<link rel="icon" type="image/png" sizes="32x32" href="/assets/brand/badge-32.png">
<link rel="icon" type="image/png" sizes="48x48" href="/assets/brand/badge-48.png">
<link rel="apple-touch-icon" href="/assets/brand/apple-touch-icon.png">
```

Delete the `data:image/svg+xml` favicon `<link>` on every page. (This supersedes
DESIGN_BRIEF §4.15's inline-SVG favicon — official mark now exists.)

---

## 3. TAGLINES & VOICE — placements (no conversion copy displaced)

| Brand line | Lives at | Treatment |
|---|---|---|
| **"Managed IT. Websites. AI Automation."** | (a) Painted inside logo-full (brand strip + og alt). (b) Footer `.footer-est` line on all pages. | `.footer-est`: text-xs, `--on-dark-soft`, under `.footer-tag`: `Managed IT. Websites. AI Automation. · Est. 2024` |
| **"Local Support. Modern Solutions. Real Results."** | The CTA-band ledger label on index, work, services (replaces "№ 0x · The Next Step" / "Your Turn" labels — keep the № numeral). | e.g. `<strong>№ 07</strong> · Local Support · Modern Solutions · Real Results` — small-caps Fraunces, already styled |
| **"Est. 2024"** | (a) `.footer-est` (above). (b) footer-bottom © line on all pages: `© 2026 Drew B IT · Est. 2024 · Modesto — Central Valley, California` | plain text swap |
| **"Modesto Proud. Local Focused."** | (a) Index brand-strip ledger label (§2.4). (b) Contact № 01 direct-line card: one line directly under the `.route-line`. | Contact: `<p class="work-card__meta">Modesto proud. Local focused. · Est. 2024</p>` |

**Managed IT honesty weave** (Drew's MSP background is real; the site's three pillars stay
Web / Marketing automation / Claude AI — do NOT add a fourth pillar):
- Index № 05 About: append one sentence to the existing bio paragraph: *"Before Drew B IT, I
  spent a decade in managed IT — helpdesks, backups, security baselines — which is why every
  site I run stays patched, monitored, and backed up like an MSP client, not a brochure."*
- Services № 01 Websites intro: append: *"Care plans are managed IT for your website: hosting,
  security, backups, and monitoring handled the way an MSP would — because that's where I come from."*
- Footer `.footer-est` carries the tagline verbatim (above). Nothing else changes.

```css
.footer-est {
  font-size: var(--text-xs);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--on-dark-soft);
  margin-top: var(--s-3);
}
```

New vocabulary classes added to the DESIGN_BRIEF §7 contract: `.brand__badge` `.brand-strip`
`.footer-est`. No others.

---

## 4. TEXTURE — exactly two devices, both retrofits of existing components

### Device A — the brush tick (hand-painted echo)
The ledger line's flat 24×2px orange tick becomes a hand-painted brush dash. One CSS change,
recurs on every section of every page. Inline SVG data URI (self-contained, no asset request):

```css
.ledger-line::before {
  content: "";
  position: absolute; top: -3px; left: 0;
  width: 24px; height: 6px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 6'%3E%3Cpath d='M1 3.2C4 1.6 7.5 2.7 10.5 2.1 14 1.4 18 2.9 23 2.2 21.5 3.9 16 3.4 12 4.1 8 4.8 3.5 4.3 1 3.2Z' fill='%23D97132'/%3E%3C/svg%3E") no-repeat center / contain;
}
```

(Replaces the old `height: 2px; background: var(--orange-600)` rule. On dark ledger lines the
same #D97132 dash works — 5.12:1 on navy-950, decorative anyway.) Do NOT brush anything else:
buttons, underlines, and rules stay crisp. One painterly accent per section is the whole point.

### Device B — the circuit pad (trace-terminal echo)
Every `.ledger-line` gets a right-end terminal quoting the logo's circuit pads: hairline runs
into a small open ring. Pure CSS:

```css
.ledger-line::after {
  content: "";
  position: absolute; top: -5px; right: 0;
  width: 8px; height: 8px;
  border: 1.5px solid var(--slate);
  border-radius: 50%;
  background: var(--paper);
}
.section--dark .ledger-line::after,
.hero .ledger-line::after,
.cta-band .ledger-line::after,
.site-footer .ledger-line::after {
  border-color: var(--on-dark-soft);
  background: var(--navy-950);
}
.cta-band .ledger-line::after { background: var(--navy-900); }
.ledger-line--footer::after { display: none; }  /* centered footer line keeps symmetry */
```

That's it. No painted textures, no paper-grain overlays, no watercolor backgrounds, no
almond-blossom clip art. The blossoms and water tower live exclusively inside the two real
logo assets.

---

## 5. PER-PAGE CHECKLIST

### styles.css (do first — most of the reskin is here)
1. §1.1 token remap in `:root` (including the three aliases and six new tokens).
2. §1.3 component re-pointing items 1–8.
3. §2.1 `.brand`/`.brand__badge` rules; §2.4 `.brand-strip`; §3 `.footer-est`.
4. §4 Device A (replace `.ledger-line::before`) + Device B (add `.ledger-line::after` set).
5. Generate `assets/brand/badge-96.png` (§0 command).

### ALL four pages (identical edits)
- **Head:** delete inline-SVG favicon link → add the three §2.6 favicon/apple-touch links.
  Swap `og:image` to `logo-full.jpg` + add `og:image:width/height/alt` + twitter tags (§2.5).
- **Header:** add `.brand__badge` img inside `.brand` (§2.1 markup, before the text node).
- **Footer:** add 32px badge img inside the footer `.brand`; add `.footer-est` line after
  `.footer-tag`; footer-bottom © line → `© <span data-year>2026</span> Drew B IT · Est. 2024 ·
  Modesto — Central Valley, California`.

### index.html
- CTA band (№ 07) ledger label → `<strong>№ 07</strong> · Local Support · Modern Solutions · Real Results`.
- Insert `.brand-strip` section (§2.4) between the CTA band and the footer.
- № 05 About: append the managed-IT sentence (§3).
- № 04 own-strip: no markup change (olive reskin is CSS-only).
- JSON-LD: add `"foundingDate": "2024"` and `"logo": "https://drewb-it.com/assets/brand/badge-320.png"`
  to the ProfessionalService block.

### work.html
- CTA band (№ 04 "Your Turn") ledger label → `<strong>№ 04</strong> · Local Support · Modern
  Solutions · Real Results`. (H2 "Want yours in the Galleria?" copy unchanged.)
- No other section-level edits — the Galleria is iframe-driven and inherits the reskin.

### services.html
- CTA band (№ 05) ledger label → `<strong>№ 05</strong> · Local Support · Modern Solutions · Real Results`.
- № 01 Websites intro: append the care-plans-are-managed-IT sentence (§3).
- own-strip / trust-strips: CSS-only reskin, no markup change.

### contact.html
- № 01 direct-line card: add `<p class="work-card__meta">Modesto proud. Local focused. · Est. 2024</p>`
  directly under the `.route-line`.
- No CTA band on contact (per brief) — closing strip unchanged.

### QA additions to the DESIGN_BRIEF §8 checklist
- Badge renders as a clean circle in header/footer (no white corners) at 1× and 2×.
- `logo-full-800.jpg` edge blends into `--paper` in the brand strip (cream now matches exactly);
  the `--gray-warm` frame border reads as intentional matting.
- Re-verify: no `#D97132` used as text at any size on light, or as a white-text fill anywhere.
- Favicon shows the water-tower badge in the tab on all four pages; apple-touch icon on iOS.
- og:image validates at 1400×933 in a card debugger.
