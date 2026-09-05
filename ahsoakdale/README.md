# ahsoakdale — Advanced Hair Specialists (draft site)

Static five-page site. No build step, no dependencies. Designed to live at
`drewbabbitt.github.io/ahsoakdale/` without touching the personal root site.

## Deploy

1. Copy this whole `ahsoakdale/` folder into the root of `drewbabbitt/drewbabbitt.github.io`.
2. Commit and push to `main`.
3. Live at https://drewb-it.com/ahsoakdale/ within a minute or two.

That's it — Pages is already serving that repo, so no settings change is needed.

## Files

| File | Page |
|---|---|
| `index.html` | Home — hero, mission, what we do, Google reviews, CTA |
| `services.html` | Four services in detail + four-step "How it works" |
| `about.html` | The studio. **Needs Elsie's bio** (marked on the page) |
| `results.html` | Before & after grid. **All six images are placeholders** |
| `contact.html` | Address, hours table, OpenStreetMap embed, contact form |
| `styles.css` | Everything. Carries over #745bde, Cinzel and Source Sans from the old site |
| `sitemap.xml`, `robots.txt` | Submit the sitemap in Google Search Console |
| `.nojekyll` | Stops Pages running Jekyll over the folder |

## Two things to wire up before it goes to a real domain

**Contact + newsletter forms.** GitHub Pages is static, so it cannot process a form.
Both forms post to `https://formspree.io/f/YOUR_FORM_ID`. Create a free Formspree
form, then replace `YOUR_FORM_ID` in `contact.html` and in the footer of all five
pages. Alternatives: Netlify Forms, Basin, or Google Forms.

**Google reviews.** The three review cards are hardcoded from the live Google
listing (5.0, 4 reviews, captured 2026-09-04) and the star summary is static. They
will not update on their own. To make them live, use the Google Places API
(`place/details` returns up to five reviews) with a browser-key restricted to the
domain, or a widget service like Elfsight or Trustindex. The markup in the
`.review` cards is the shape to fill.

## Content still needed from the owner

- Six to nine before/after photos with written client consent. These almost
  certainly exist on the Facebook and Instagram accounts already.
- Elsie's bio, experience and credentials. Reviewers name her; the site never has.
- A photo of Elsie.
- Confirmation of the four service descriptions — they were written from the
  category, not from her own words, and should be checked before publishing.
- Pricing or a price range, even "consultations free, systems from $X".

## Assets

`assets/hero.jpg` and the icons come from the existing site's own CDN, pulled out of
the `ahsoakdale-capture` archive. Note the GoDaddy CDN re-encodes on resize, so the
`.png` icons are actually JPEG bytes — browsers sniff and render them fine.
