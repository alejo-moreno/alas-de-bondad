---
name: new-client-site
description: >-
  Duplicate this starter into a new small-business site. Use when creating a
  client website, rebranding Casa Norte, changing siteConfig, or following the
  new-client workflow.
---

# New client site

Work from this starter. Do not introduce React, a CMS, a database, or a Cloudflare adapter.

## Workflow

1. Confirm this repo is the factory (read `src/config/site.ts` and `docs/client-workflow.md` if present).
2. Replace identity in `src/config/site.ts`: name, tagline, description, `url`, theme, contact, location, hours, social, `forms.tallyFormId`, WhatsApp.
3. Replace copy in `src/content/*.ts`. Leave placeholders where facts are missing.
4. Swap logo/favicon and images under `src/assets` / `public`.
5. Pick `theme`: `editorial` | `warm` | `professional` | `minimal` | `alas`.
6. Compose pages from existing primitives. Do not reuse the Casa Norte section order if it does not fit the business.
7. Point `site.url` at the production origin so the sitemap is correct.
8. Run `npm run check` and `npm run build`.
9. Deploy with Workers Builds: `npx astro build` then `npx wrangler deploy`. Worker `name` in `wrangler.jsonc` must match the dashboard name.

## Do not

- Invent testimonials, awards, stats, or certifications
- Add hero/card-grid template chrome
- Embed a Tally form without a real form ID
