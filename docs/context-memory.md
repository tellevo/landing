{{ ... }}
## Comandos (package.json)
- Desarrollo:
  - `start`: `vite --open --mode ssr`
  - `dev`: `vite --mode ssr`
  - `dev.debug`: `node --inspect-brk ./node_modules/vite/bin/vite.js --mode ssr --force`
- Build/Preview/Adapter:
  - `build`: `qwik build`
  - `build.preview`: `vite build --ssr src/entry.preview.tsx`
  - `build.server`: `vite build -c adapters/cloudflare-pages/vite.config.ts`
  - `preview`: `qwik build preview && vite preview --open`
- Cloudflare Pages:
  - `serve`: `wrangler pages dev ./dist --compatibility-flags=nodejs_als`
  - `deploy`: `wrangler pages deploy ./dist`
- Utilidad:
  - `qwik`: `qwik` (CLI)
  - `lint`: `eslint "src/**/*.ts*"`
  - `fmt` / `fmt.check`: Prettier

## Desarrollo local
1) Instalar dependencias con pnpm (primario) o npm:
   - pnpm: `pnpm install`
   - npm: `npm install`
2) Levantar dev SSR:
   - `pnpm dev` (o `npm run dev`)
3) Build de producción + preview:
   - `pnpm run preview` (ejecuta build + preview)
## Despliegue (Cloudflare Pages)
- Build command: `pnpm run build` (o `npm run build` en su defecto).
- Output: `dist/`
- Previsualización local: `pnpm run serve` (o `npm run serve`) y abrir `http://localhost:8787/`.
- Rutas de funcion: `_routes.json` auto-generado en `dist/` por el adaptador salvo que se provea `public/_routes.json`.

## Convenciones de UI/Responsive y Branding (Mobile-first)
- Breakpoints: se mantienen los valores por defecto de TailwindCSS.
- Títulos (h1–h4): color de marca `text-[#1054F1]` por defecto en todas las páginas/componentes.
  - Excepción: se permite el estilo de texto con gradiente existente como "estilo especial" cuando ya está aplicado (no se reemplaza).
- Enfoque mobile-first aplicado en homepage y secciones relacionadas: tipografías responsivas (`text-4xl md:text-5xl`), paddings verticales ajustados en móviles, y botones principales 100% ancho en pantallas pequeñas cuando corresponde.

### Componentes/Páginas actualizadas (títulos a `text-[#1054F1]` y mejoras mobile-first)
- `src/components/tellevo/shared/hero.tsx`: h1 responsivo y botón principal a ancho completo en móvil.
- `src/components/tellevo/shared/features.tsx`: h2 e h3 en color de marca; limpieza de spans con gradiente en título principal.
- `src/components/tellevo/shared/beneficios.tsx`: h3 en color de marca (responsivo).
- `src/components/tellevo/empresa/inscripcion.tsx`: h2 en color de marca (responsivo).
- `src/components/tellevo/empresa/ranking.tsx`: h3 y h4 en color de marca.
- `src/components/tellevo/shared/empresas.tsx`: h3 en color de marca (responsivo).
- `src/components/tellevo/empresa/descarga_app.tsx`: h2 en color de marca.
- `src/components/tellevo/empresa/formulario_inscripcion.tsx`: h1 en color de marca (responsivo).
- `src/routes/simular/index.tsx`: subtítulos internos (h3/h4) a color de marca; título principal con gradiente conservado.
- `src/routes/nosotros/index.tsx`: nombres de miembro (h3) en color de marca; título principal con gradiente conservado.
- `src/components/tellevo/persona/opciones.tsx`: títulos de tarjetas (h3) a color de marca; título principal con gradiente conservado.
- Starter examples (para consistencia visual):
  - `src/components/starter/examples/next-steps/next-steps.tsx`: h2 a color de marca.
  - `src/components/starter/examples/hero/hero.tsx`: h1 a color de marca.
  - `src/components/starter/examples/infobox/infobox.tsx`: h3 a color de marca.

## Footer (Diseño y comportamiento)
- Ubicación: `src/components/starter/footer/footer.tsx` (referenciado en `src/routes/layout.tsx`).
- Estilos base: fondo azul de marca `#1054F1`, texto blanco, layout centrado y responsive.
- Logo oficial: `src/assets/tellevo-app-300x90.png?jsx` mostrado a `h-20` (ancho automático).
- Subtítulo bajo el logo: “Soluciones de movilidad”.
- Navegación (coincide con el header):
  - `Nosotros` → `/nosotros`
  - `Pasajero` → `/personas#pasajero`
  - `Conductor` → `/personas#conductor`
  - `Regístrate` → `/registro`
  - `Simular` → `/simular`
  - Enlaces con `target="_blank"` y `rel="noopener"`, color `text-white`, `hover:underline`.
- Texto descriptivo: “Tellevo App es una Aplicación que pertenece a Sociedad de Inversiones DRJ Spa”.
- Email de contacto: `mailto:contacto@tellevoapp.cl` con `text-white hover:underline hover:opacity-90`.
- Redes sociales: Facebook e Instagram (Font Awesome), con `target="_blank" rel="noopener"` y `hover:opacity-90`.

## Fundamentos técnicos verificados
- Meta viewport presente en `src/components/router-head/router-head.tsx`.
- Tailwind configurado en `tailwind.config.js` (sin tocar breakpoints), PostCSS activo (`postcss.config.js`).
- `src/global.css` mantiene importaciones base y utilidades; no se sobreescribe el color de títulos globalmente.
