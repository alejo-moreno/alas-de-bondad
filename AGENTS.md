# Project instructions

## Mission

This repository is Taller, a reusable small-business website factory. Prioritize simplicity, maintainability, performance, accessibility, design quality, and minimal dependencies.

## Architecture

- Astro first. Pages and components are `.astro` unless a rare interactive case needs a few lines of vanilla JS.
- Static output only. No React, no backend, no database, no Cloudflare adapter, no Worker `main`.
- Do not add React for tooling. Wrangler is a CLI only.
- Reuse existing components before creating new ones.

## Design

Do not generate generic AI-looking websites. Use the design tokens and layout primitives. Compose pages for the specific business. See `.cursor/rules/design-system.mdc`.

## Content

Keep client data in `src/config` and `src/content`. Do not invent awards, reviews, statistics, certifications, named clients, or business claims. Use placeholders when information is missing.

## Accessibility and performance

Semantic HTML, keyboard access, visible focus, meaningful alt text, and `prefers-reduced-motion`. Minimize JavaScript and third-party scripts.

## Validation

Before calling a task complete:

- `npm run check`
- `npm run build`
- Inspect affected pages. Fix broken links, obvious a11y issues, and broken responsive behavior.

Never claim something passed unless it was checked.

## AI behavior

Do not make unrelated changes. Do not install dependencies without a reason. Inspect the repo or official docs before guessing.
