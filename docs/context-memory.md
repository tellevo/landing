# TeLlevo Landing — Context Memory

Este documento resume la arquitectura, stack, convenciones y comandos del proyecto para acelerar el onboarding y servir como guía de contexto para un LLM.

## Resumen del stack
- Framework: Qwik + Qwik City (SSR/ISR, routing por archivos)
- Build: Vite 5
- Lenguaje: TypeScript (TS 5.4)
- UI/Estilos: TailwindCSS 3, Flowbite, Font Awesome
- Lint/Format: ESLint + @typescript-eslint + eslint-plugin-qwik, Prettier
- Deploy/Adapter: Cloudflare Pages (`adapters/cloudflare-pages/`)

## Estructura principal
- `public/`: activos estáticos.
- `src/`:
  - `entry.*.tsx`: puntos de entrada (SSR, preview, cloudflare-pages).
  - `root.tsx`: root app con `<QwikCityProvider/>` y registro SW.
  - `global.css`: Tailwind y tema base.
  - `routes/`: sistema de rutas Qwik City.
  - `components/`: componentes UI (header, secciones, youtube, etc.).
- `adapters/cloudflare-pages/vite.config.ts`: configuración de build para Cloudflare Pages.
- `vite.config.ts`: configuración base de Vite + plugins Qwik y rutas.
- `tailwind.config.js`: configuración Tailwind/Flowbite.
- `postcss.config.js`: PostCSS + autoprefixer.
- `tsconfig.json`: paths y opciones TS.

## Routing y páginas
- Layout base: `src/routes/layout.tsx`
  - Importa estilos `src/routes/styles.css` y Font Awesome.
  - Header/Footer comunes.
  - Control de caché con `onGet` y `cacheControl`.
- Página principal: `src/routes/index.tsx`
  - Secciones: `Hero`, `Features`, `Beneficios`, `Inscripcion`, `Ranking`.
  - SEO: `export const head: DocumentHead` con `title` + `meta` description.
- Service Worker: `src/routes/service-worker.ts` con `setupServiceWorker()` (prefetching).

## Componentes destacados
- `src/components/header/` y `src/components/starter/footer/`: layout shell.
- `src/components/tellevo/*`: bloques de negocio (empresa/shared, beneficios, ranking, etc.).
- `src/components/youtube/tellevo.tsx`: wrapper de YouTube para el hero.

## Estilos
- `src/global.css`: importa tema Flowbite (`@import "flowbite/src/themes/default"`) y directivas Tailwind.
- `src/routes/styles.css`: estilos del layout/base (tipografías, colores, botones, decoraciones, iconos).
- Tailwind: `tailwind.config.js`
  - Asegurar que `content` incluya paths de `src/**/*` y `node_modules/flowbite-qwik/**/*.{cjs,mjs}`.
  - Plugin de Flowbite: usar import ESM de forma consistente.

## Configuración y build
- `vite.config.ts`:
  - Plugins: `qwikCity()`, `qwikVite()`, `tsconfigPaths()`.
  - Encabezados anti-cache en dev y cacheables en preview.
  - Utilidad `errorOnDuplicatesPkgDeps` para evitar duplicados entre `dependencies` y `devDependencies` y garantizar que los paquetes Qwik estén en dev.
- Adaptador Cloudflare: `adapters/cloudflare-pages/vite.config.ts`
  - SSR: true; inputs: `src/entry.cloudflare-pages.tsx` y `@qwik-city-plan`.

## Dependencias relevantes
- Dev: `@builder.io/qwik`, `@builder.io/qwik-city`, `vite`, `typescript`, `eslint`, `prettier`, `vite-tsconfig-paths`, `tailwindcss`, `postcss`, `autoprefixer`, `wrangler`, `@qwik-ui/headless`, `flowbite-qwik`, `flowbite-qwik-icons`.
- Prod: `flowbite`, `@fortawesome/fontawesome-free`.

## Comandos (package.json)
- `start`: `vite --open --mode ssr`
- `dev`: `vite --mode ssr`
- `build`: `qwik build`
- `build.server`: `vite build -c adapters/cloudflare-pages/vite.config.ts`
- `build.preview`: `vite build --ssr src/entry.preview.tsx`
- `preview`: `qwik build preview && vite preview --open`
- `serve`: `wrangler pages dev ./dist --compatibility-flags=nodejs_als`
- `deploy`: `wrangler pages deploy ./dist`
- `lint`: `eslint "src/**/*.ts*"`
- `fmt` / `fmt.check`: Prettier

## Desarrollo local
1) Instalar dependencias con tu gestor (se observa `bun.lockb`, se puede usar bun o npm):
   - Bun: `bun install`
   - NPM: `npm install`
2) Levantar dev SSR:
   - `npm run dev` (o `bun run dev`)
3) Build de producción + preview:
   - `npm run preview`

## Despliegue (Cloudflare Pages)
- Build command: `bun build` o `npm run build` (según CI).
- Output: `dist/`
- Previsualización local: `bun serve` (o `npm run serve`) y abrir `http://localhost:8787/`.
- Rutas de funciones: `_routes.json` auto-generado en `dist/` por el adaptador salvo que se provea `public/_routes.json`.

## Observaciones técnicas y mejoras sugeridas
- Tailwind config (`tailwind.config.js`):
  - Hay dos claves `content`; unificar en una sola para evitar conflictos. Ejemplo recomendado:
    - `content: ['node_modules/flowbite-qwik/**/*.{cjs,mjs}', './src/**/*.{html,js,jsx,ts,tsx,mdx}']`
  - Consistencia ESM/CJS: actualmente se importa `flowbite/plugin` como ESM pero se usa `require` en `plugins`. Recomendado:
    - `import flowbitePlugin from 'flowbite/plugin'`
    - `plugins: [flowbitePlugin]`
- Accesibilidad/SEO: verificar etiquetas alt en imágenes SVG JSX y mejorar metadatos por ruta si se agregan más páginas.
- Performance: aprovechar `cacheControl` ya presente en el layout; evaluar imágenes optimizadas y lazy loading en componentes multimedia.
- Environments: no se observan `.env` requeridos. Si se agregan integraciones (Analytics, APIs), documentar variables en un `.env.example`.

## Convenciones
- Componentes en `src/components/` con paths absolutos vía alias `~/*` (ver `tsconfig.json`).
- Rutas en `src/routes/` con layout por defecto y SEO por ruta usando `DocumentHead`.
- Evitar duplicar dependencias entre `dependencies` y `devDependencies` (Vite lanzará error mediante util incluida).

## Checklist (rápido)
- [ ] Unificar `tailwind.config.js` (content único + plugins con ESM)
- [ ] Revisar estilos redundantes entre `global.css` y `routes/styles.css`
- [ ] Agregar `docs/context-memory.md` al repositorio (este archivo)
- [ ] Confirmar flujo de deploy en Cloudflare Pages con `wrangler` en CI

---
Última actualización: automatizada por asistente. Ajusta y extiende este documento conforme evolucione el proyecto.
