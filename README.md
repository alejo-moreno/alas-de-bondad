# Fundación Alas de Bondad

Sitio estático de la fundación: bienestar e inclusión para personas con discapacidad, cuidadores, niños y familias en Madrid, Funza, Mosquera, Facatativá y Cundinamarca.

Hecho a partir de Taller (Astro, HTML estático, Cloudflare Workers).

## Páginas

- `/` — Inicio
- `/nosotros` — Quiénes somos
- `/labor` — Qué hacemos
- `/sumate` — Donar, voluntariado, alianzas y formulario

## Scripts

```bash
npm run dev      # desarrollo local
npm run check    # Astro + TypeScript
npm run build    # salida estática en dist/
npm run preview  # vista previa de dist/
```

## Datos de la fundación

| Qué | Dónde |
| --- | --- |
| Nombre, contacto, tema, Tally, WhatsApp | `src/config/site.ts` |
| Textos de las páginas | `src/content/` |
| Colores | `src/styles/global.css` (tema `warm`) |

Los campos entre corchetes (`[Correo]`, `[Banco]`, `[Cuenta]`, `[Nequi]`) son huecos a propósito. No inventar premios, testimonios ni cifras.

El formulario de Súmate es un embed de [Tally](https://tally.so). Hasta que exista un ID, la página muestra un aviso y no un checkout.

## Publicar

Ver [docs/deployment.md](docs/deployment.md). El Worker se llama `alas-de-bondad`.
