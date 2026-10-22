# Deployment

This site is static. Cloudflare serves `dist/` as [Workers static assets](https://developers.cloudflare.com/workers/static-assets/). There is no Worker script and no `@astrojs/cloudflare` adapter.

Official references:

- [Astro on Cloudflare Workers](https://developers.cloudflare.com/workers/framework-guides/web-apps/astro/) (use the **If you have a static site** section)
- [Wrangler configuration](https://developers.cloudflare.com/workers/wrangler/configuration/)
- [Workers Builds](https://developers.cloudflare.com/workers/ci-cd/builds/)
- [Custom Domains](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/)
- [Astro: deploy to Cloudflare](https://docs.astro.build/en/guides/deploy/cloudflare/)

## Local production preview

```bash
npx astro build
npx wrangler dev
```

Day-to-day development is `npm run dev`.

## Git-connected deploy

1. Push the repository to GitHub or GitLab.
2. In the Cloudflare dashboard, open **Workers & Pages** → **Create** → **Import a repository**.
3. Build command: `npx astro build`
4. Deploy command: `npx wrangler deploy`
5. Node.js must be **22.12 or later** if you override the Workers Builds default ([Astro Node requirements](https://developers.cloudflare.com/workers/framework-guides/web-apps/astro/)).
6. The dashboard Worker name must match `name` in `wrangler.jsonc`.

First URL: `https://<name>.workers.dev`.

Do not let Wrangler autoconfig add a `main` field or the Cloudflare adapter. This repo already commits an assets-only config:

```jsonc
{
  "name": "alas-de-bondad",
  "compatibility_date": "2026-09-06",
  "assets": {
    "directory": "./dist",
    "not_found_handling": "404-page"
  }
}
```

## Custom domain

When the client owns a domain on the same Cloudflare account, attach it in the dashboard or add a route in that project’s `wrangler.jsonc`:

```jsonc
{
  "routes": [{ "pattern": "clientdomain.com", "custom_domain": true }]
}
```

See [Custom Domains](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/). Do not commit a client domain in this starter.

Then update `site.url` in `src/config/site.ts` and rebuild.
