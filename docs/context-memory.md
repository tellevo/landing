{{ ... }}

---

## Variables de entorno (.env)
- Recomendado crear `.env` (no commitear) y `.env.example` con claves públicas necesarias.
- Variables actuales usadas por el código:
  - `PUBLIC_GOOGLE_MAPS_API_KEY`: requerida por `src/utils/google-map-loader.ts`.
  - `VITE_API_BASE_URL`: URL base para el servicio de contacto en `src/services/contacto.service.ts`.
- Ejemplo `.env.example`:
  ```env
  PUBLIC_GOOGLE_MAPS_API_KEY=
  VITE_API_BASE_URL=http://localhost:7083/tellevoapp/contacto
  ```
- Nota: Prefijo `PUBLIC_` expone la variable al cliente. No almacenar secretos sin `PUBLIC_` en el cliente.

## Cloudflare Pages (Settings y Deploy)
- Build command: `pnpm run build`
- Build output directory: `dist`
- Local preview (Pages): `pnpm run serve` → http://localhost:8787/
- Autenticación Wrangler: `pnpm wrangler login` (una vez en la máquina).
- Deploy: `pnpm run deploy`
- Headers/Redirects:
  - `public/_headers` ya configura no-cache para service worker y caché fuerte para `/build/*`.
  - `public/_redirects` disponible (actualmente vacío). Formato ejemplo:
    ```
    # Redirección 301 de /old a /new
    /old  /new  301
    ```

## Tailwind config (recomendación de limpieza)
Unificar la clave `content` y usar import ESM para plugins.

Sugerencia para `tailwind.config.js`:
```js
/** @type {import('tailwindcss').Config} */
import flowbitePlugin from 'flowbite/plugin'

export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx,mdx}',
    'node_modules/flowbite-qwik/**/*.{cjs,mjs}',
  ],
  theme: {
    extend: {
      animation: {
        'from-left': 'slideFromLeft 0.2s 1',
        'from-right': 'slideFromRight 0.2s 1',
      },
      keyframes: {
        slideFromLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideFromRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      colors: {
        blue: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [flowbitePlugin],
}
```

## Scripts (quick reference)
- Desarrollo
  - `pnpm start` → abre navegador con SSR
  - `pnpm dev` → SSR dev server
  - `pnpm dev.debug` → SSR con inspector
- Build/Preview/Adapter
  - `pnpm build` → build Qwik
  - `pnpm build.client` → Vite client build
  - `pnpm build.preview` → SSR preview build
  - `pnpm build.server` → build adapter Cloudflare Pages
  - `pnpm preview` → build preview + vite preview (abre navegador)
- Cloudflare Pages
  - `pnpm serve` → Wrangler Pages local
  - `pnpm deploy` → deploy a Pages
- Calidad
  - `pnpm lint` → ESLint sobre `src/**/*.ts*`
  - `pnpm fmt` / `pnpm fmt.check` → Prettier

## Activos, fuentes e iconos
- Activos estáticos en `public/` se sirven tal cual; los de `src/assets/` se importan vía Vite (ej. `?jsx` para SVG/PNG tipados como componentes donde corresponda).
- Fuentes: Google Fonts cargadas en `RouterHead` con `preconnect`.
- Iconos:
  - Font Awesome importado globalmente en `src/routes/layout.tsx`.
  - También disponibles `flowbite-qwik-icons` y `qwik-icons`.

## Flowbite y Flowbite Qwik
- Componentes interactivos (`Carousel`, etc.) provienen de `flowbite-qwik`.
- Asegurar que las clases de Tailwind usadas por Flowbite estén presentes en `content` de Tailwind para purga correcta (ver snippet recomendado).

## SwitchPersonasEmpresas Componente

Componente de interruptor profesional para alternar entre vistas "Personas" y "Empresas".

**Ubicación**: `src/components/tellevo/widgets/switch-personas-empresas.tsx`

**Características técnicas**:
- **Estilos modulados**: Usa `switch-personas-empresas.module.css` para CSS profesional
- **Cross-browser compatibility**: Animaciones con vendor prefixes para Chrome, Firefox, Safari
- **Accesibilidad**: ARIA labels, keyboard navigation, screen reader support (WCAG 2.1 AA)
- **Performance**: Hardware-accelerated animations con `will-change`, `transform3d`
- **Responsive**: Optimizado para desktop y mobile con touch targets de 44px mínimo
- **Micro-interactions**: Smooth transitions (300ms cubic-bezier), hover states, loading feedback

**Estructura**:
```tsx
<SwitchPersonasEmpresas
  isLoading={isLoading}
  activeView={activeView}
  isMenuOpen={isMenuOpen} // opcional
/>
```

**Styling profesional incluye**:
- Gradientes lineales para backgrounds
- Sombras en capas para profundidad
- Animaciones suaves del indicador deslizante
- Estados de carga mejorados con spinners
- Soporte para modo alto contraste
- Prefers-reduced-motion para accesibilidad
- Fallbacks para navegadores antiguos

**Props**:
- `isLoading: Signal<boolean>` - Para deshabilitar botones y mostrar spinners
- `activeView: Signal<"personas" | "empresas">` - Estado activo del switch
- `isMenuOpen?: Signal<boolean>` - Para cerrar menú móvil en cambio

## Convenciones de Qwik City
- Cada ruta puede exportar `head: DocumentHead` para título y metadatos.
- El `<Slot />` en `layout.tsx` renderiza la ruta hija.
- Service worker en `src/routes/service-worker.ts` se encarga de prefetch avanzado.

## Troubleshooting y diagnóstico (ampliado)
- Node runtime
  - Asegurar versión compatible con `engines` (`^18.17.0 || ^20.3.0 || >=21.0.0`).
- Tailwind
  - Si clases no se aplican: revisar `content` y rutas a `flowbite-qwik`.
- Google Maps
  - 401/403: revisar `PUBLIC_GOOGLE_MAPS_API_KEY` y restricciones.
  - Mapa en blanco: `importLibrary('maps')` correcto y contenedor con dimensiones (`class="h-64"`).
- Cache y SW
  - Cambios que no aparecen: invalidar caché, revisar `public/_headers` y reiniciar `wrangler pages dev`.
- Qwik deps en `dependencies`
  - El `vite.config.ts` lanza error si detecta paquetes Qwik en `dependencies`. Mover a `devDependencies`.
- Deploy
  - Confirmar que `dist/` se genera, y que `wrangler` está logueado (`wrangler whoami`).
