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
