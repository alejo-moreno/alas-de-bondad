# Architecture

**Taller** is a website factory: one static starter you copy per client, then change config and content. Casa Norte Studio is only the demo business.

There is no database, no React, and no server of your own. After `npm run build`, Cloudflare serves files from `dist/`.

Related docs: [client-workflow.md](./client-workflow.md), [deployment.md](./deployment.md).

## What you run

| Command | What it does |
| --- | --- |
| `npm run dev` | Astro local server. Day-to-day work. |
| `npm run check` | TypeScript + Astro type-check. Run before you call a change done. |
| `npm run build` | Writes HTML, CSS, and fonts to `dist/`. |
| `npm run preview` | Serves `dist/` the Astro way. For the Cloudflare asset server, use `npx astro build && npx wrangler dev`. |

Node.js **22.12+** is required (`engines` in `package.json`). Astro 7 needs it.

## Libraries

Four runtime packages, three dev tools. That list should stay short.

| Package | When it runs | Why it is here |
| --- | --- | --- |
| `astro` | Build + dev | Pages and components are `.astro` files. Output is static HTML. |
| `tailwindcss` | Build + dev | Utility classes (`text-muted-foreground`, `md:grid-cols-12`). |
| `@tailwindcss/vite` | Build + dev | Official Tailwind v4 hook. Vite plugin, not the old `@astrojs/tailwind`. |
| `@astrojs/sitemap` | Build | Writes `sitemap-index.xml`. Needs `site:` in `astro.config.mjs`. |
| `@astrojs/check` + `typescript` | Dev | Powers `npm run check`. |
| `wrangler` | Dev | Cloudflare CLI. Deploy or preview `dist/`. Not shipped to the browser. |

`create-astro` installed Astro **7**, not 6. That is the current official CLI. The Fonts API and static output work the same way.

### Do not add these unless a real client need appears

- **React, Next, or shadcn React components.** Official shadcn-for-Astro needs React. This project only reused shadcn **token names** (`--background`, `--primary`, …). Buttons and cards are Astro + HTML.
- **A database, CMS, or backend API.** Client facts live in TypeScript files.
- **`@astrojs/cloudflare`.** That adapter is for SSR (HTML rendered on each request). This site is pre-rendered.
- **A Worker `main` script.** `wrangler.jsonc` only points at `dist/`. Adding `main` makes Cloudflare expect server code.

If a change needs a new npm package, ask first: does HTML, CSS, or Tally already cover it?

## How a page becomes HTML

```text
src/pages/about.astro
    → imports MainLayout + content
    → Astro renders it at build time
    → dist/about/index.html
```

`src/pages/` is the router. File name = URL:

- `index.astro` → `/`
- `about.astro` → `/about`
- `404.astro` → unknown URLs (Cloudflare uses `not_found_handling: "404-page"`)

`src/layouts/MainLayout.astro` is the chrome: `<html>`, fonts, SEO, header, footer, skip link.

`@/` means `src/`. So `@/config/site` is `src/config/site.ts`. That alias is in `tsconfig.json`.

## The two places you edit for a new client

**1. Identity and settings** — `src/config/site.ts`

Name, tagline, `url`, theme, email, phone, address, hours, social, WhatsApp, Tally form ID, schema type.

**2. Words on pages** — `src/content/`

`navigation.ts`, `home.ts`, `about.ts`, `services.ts`, `projects.ts`, `contact.ts`.

Pages and components **read** those objects. They should not hard-code a business name or phone number except as demo data inside those files.

If a value is empty or starts with `[` (like `[Phone]`), helpers in `src/lib/links.ts` treat it as a placeholder:

- WhatsApp button is not rendered
- Phone is shown as text, not a `tel:` link
- Tally iframe is not shown; email is shown instead

Do not invent reviews, awards, statistics, or named clients to fill a page.

## Styling

`src/styles/global.css` has two layers.

**Theme variables** on `[data-theme="…"]`: `--background`, `--foreground`, `--primary`, `--muted`, `--border`, `--radius`, and the rest.

`MainLayout` sets `data-theme={site.theme}` on `<html>`. Set `site.theme` to `editorial`, `warm`, `professional`, `minimal`, or `alas` (Fundación Alas de Bondad brand) and the site retints. You do not need a new layout per theme.

`--highlight` / `--highlight-foreground` is an optional brand-pop pair (gold in `alas`) used for the inverse button and ordinals on dark bands. It defaults to `--background` / `--foreground`, so themes that skip it look unchanged. Add the theme's background hex to `themeColors` in `site.ts` for the browser `theme-color`.

**Tailwind `@theme inline`** maps those variables to classes:

- `bg-background` → `var(--background)`
- `text-foreground` → `var(--foreground)`
- `font-serif` → heading font
- `max-w-container-site` → page width token

Colors are `oklch(...)`. You do not need to memorize OKLCH. Copy an existing theme block and tweak.

Do not sprinkle random hex colors in components. If a new color is needed, add a token, then use the class.

Heading font is **Bricolage Grotesque**, body is **Atkinson Hyperlegible Next** (Braille Institute, built for low-vision readers). Both are SIL Open Font License. The `font-serif` utility name is kept for headings even though the family is now a sans. Astro’s Fonts API downloads them at build time and hosts them with the site. Only the heading font is preloaded. Families are registered in `astro.config.mjs`; `<Font />` in `MainLayout` turns them on. Keep the CSS variable names `--font-heading` and `--font-body` if you swap families.

## Component kit

This is a small set, not a component marketplace.

| Folder | What | Notes |
| --- | --- | --- |
| `src/components/layout/` | `Container`, `Section`, `Stack`, `Grid`, `Split`, `SectionHeading` | Page structure so you do not rewrite max-width and padding every time |
| `src/components/ui/` | `Button`, `Card`, `Badge`, `Accordion` | Accordion is native `<details>` |
| `src/components/hero/` | `HeroEditorial`, `HeroMinimal` | Two different layouts, not restyled clones |
| `src/components/site/` | `Header`, `Footer`, `WhatsAppCta` | Header mobile menu is `<details>` |
| `src/components/forms/` | `ContactForm` | Tally iframe or mailto placeholder |
| `src/components/seo/` | `Seo`, `JsonLd` | Used from `MainLayout` |

`src/lib/cx.ts` only joins class names. There is no `clsx` or `tailwind-merge` package.

Interactive patterns stay HTML-first: `<details>` for menus and FAQs, Tally for forms. Do not add `client:load` React islands.

## Forms and WhatsApp

**Tally** is a hosted form. Create the form on [tally.so](https://tally.so), send answers to Google Sheets from Tally, and put the form ID in `site.forms.tallyFormId`. This app only embeds:

```text
https://tally.so/embed/{id}?alignLeft=1&hideTitle=1&transparentBackground=1
```

No backend and no env secret for the form.

**WhatsApp** is a normal link built in `whatsappUrl()`: `https://wa.me/{digits}?text={message}`. Use digits with country code.

## SEO

Every page passes `title` and `description` into `MainLayout` → `Seo`:

- `<title>`, description, canonical (from `site.url` + path)
- Open Graph and Twitter summary tags
- `theme-color`

`JsonLd` emits one `ProfessionalService` object (or whatever `schemaType` you set). Empty and placeholder fields are omitted so we do not publish fake addresses.

`src/pages/robots.txt.ts` prints `robots.txt` and points at `sitemap-index.xml`. The sitemap is created **only on `npm run build`**. It 404s in `astro dev`. That is expected.

Set `site.url` to the real origin before launch, or canonicals and the sitemap stay on `https://example.com`.

One `<h1>` per page. Inner headings are `h2` / `h3`.

## Deploy

Cloudflare Workers serves `dist/` as static assets. There is no adapter and no Worker script.

`wrangler.jsonc` means: upload `dist/`, and unknown paths serve `404.html`. The dashboard Worker name must match `"name"` in that file.

First URL: `https://<name>.workers.dev`. Custom domain later does not change the app architecture. Full steps and official Cloudflare links: [deployment.md](./deployment.md).

Do not run `create-cloudflare --framework=astro` on top of this repo. Autoconfig can add the SSR adapter.

## Common jobs

**New client** — Follow [client-workflow.md](./client-workflow.md). The Cursor skill `.cursor/skills/new-client-site` is the same checklist.

**New page** — Add `src/pages/foo.astro`, optional `src/content/foo.ts`, and a nav item in `navigation.ts`. Wrap the page in `MainLayout` with its own title and description.

**New section** — Compose `Section` + `Container` + existing UI. Do not start from a gradient hero and a 3-card grid. See `.cursor/rules/design-system.mdc`.

**New look** — Edit a `[data-theme="…"]` block, or add a theme name in `site.ts` **and** a matching CSS block.

**Tally or WhatsApp** — Fill fields in `site.ts`. No component change.

**Fonts** — Change the `fonts` array in `astro.config.mjs`. The family name must match Fontsource or Google. Keep `--font-heading` and `--font-body`.

## Mental model

```text
Client facts     →  src/config + src/content
Look and feel    →  global.css tokens + site.theme
Page structure   →  src/pages + layout / hero components
SEO              →  MainLayout (Seo + JsonLd) + sitemap integration
Hosting          →  dist/ + wrangler.jsonc (files only)
```

Cursor keeps this direction via `AGENTS.md` and `.cursor/rules/`.
