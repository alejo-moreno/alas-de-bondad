# New client workflow

Use Taller as the factory. Do not add React, a CMS, a database, or the Cloudflare adapter unless the client later needs them.

1. Duplicate the repository and rename the project in `package.json` and `wrangler.jsonc` (`name` must match the Worker name in the Cloudflare dashboard). For this site, that name is `alas-de-bondad`.
2. Replace identity in `src/config/site.ts`: name, tagline, description, `url`, theme, contact, location, hours, social, WhatsApp, `forms.tallyFormId`.
3. Replace copy in `src/content/*.ts`. Leave `[placeholders]` where facts are missing. Do not invent awards, reviews, statistics, or named clients.
4. Swap `public/favicon.svg` and images under `src/assets`.
5. Set `theme` to `editorial`, `warm`, `professional`, `minimal`, or `alas`.
6. Compose pages from the layout primitives. Do not reuse Casa Norte’s section order if it does not fit the business.
7. Point `site.url` at the production origin so the sitemap and canonical URLs are correct.
8. Add a Tally form ID when the client has one. Until then the contact page shows email only.
9. Run `npm run check` and `npm run build`.
10. Push to Git and connect [Workers Builds](https://developers.cloudflare.com/workers/ci-cd/builds/). See [deployment.md](./deployment.md).
11. Send the `*.workers.dev` URL. Attach a custom domain only after the client owns the domain.

## Forms

Default path: website → [Tally](https://tally.so) → Google Sheets.

Set `forms.tallyFormId` to the Tally form ID. The contact section embeds `https://tally.so/embed/{id}`. Do not build a backend.

## WhatsApp

Set `contact.whatsapp` to digits with country code and `contact.whatsappMessage` for the prefilled text. The CTA is hidden when the number is empty.
