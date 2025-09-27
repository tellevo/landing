import { component$ } from '@builder.io/qwik';
import ImgPreviewApp from '~/assets/preview-descarga.png?jsx';
import GooglePlayBadge from '~/assets/google-play.png?jsx';
import AppStoreBadge from '~/assets/app-store.png?jsx';

export default component$(() => {
  return (
    <section class="min-h-[60vh] flex items-center bg-gradient-to-br from-gray-50 to-blue-50">
      <div class="container mx-auto px-4 py-12">
        <div class="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Columna de imagen */}
          <div class="lg:w-1/2 flex justify-center">
            
            <ImgPreviewApp/>
          </div>

          {/* Columna de contenido */}
          <div class="lg:w-1/2 text-center lg:text-left">
            <h2 class="text-4xl md:text-5xl font-bold text-[#1054F1] mb-6">
              Descarga nuestra aplicación
            </h2>
            
            <p class="text-lg text-gray-600 mb-8 max-w-md mx-auto lg:mx-0">
              Disponible en todas las plataformas móviles
            </p>

            {/* Botones con iconos - Opción C (cuadrícula 2x2) */}
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0">
              {/* iOS Persona */}
              <a
                href="https://apps.apple.com/cl/app/te-llevo-app-personas/id6743946661"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Descargar Persona en App Store"
                class="bg-black text-white px-5 py-3 rounded-lg flex items-center gap-3 transition-all hover:scale-105 hover:shadow-lg"
              >
                <AppStoreBadge class="h-8 w-auto" />
                <span class="text-sm font-medium">iOS Persona</span>
              </a>

              {/* Android Persona */}
              <a
                href="https://play.google.com/store/apps/details?id=cl.tellevo.app.tellevo_pasajero"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Descargar Persona en Google Play"
                class="bg-[#0F9D58] text-white px-5 py-3 rounded-lg flex items-center gap-3 transition-all hover:scale-105 hover:shadow-lg"
              >
                <GooglePlayBadge class="h-8 w-auto" />
                <span class="text-sm font-medium">Android Persona</span>
              </a>

              {/* iOS Auto */}
              <a
                href="https://apps.apple.com/cl/app/te-llevo-app-auto/id6743774731"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Descargar Auto en App Store"
                class="bg-black text-white px-5 py-3 rounded-lg flex items-center gap-3 transition-all hover:scale-105 hover:shadow-lg"
              >
                <AppStoreBadge class="h-8 w-auto" />
                <span class="text-sm font-medium">iOS Auto</span>
              </a>

              {/* Android Auto */}
              <a
                href="https://play.google.com/store/apps/details?id=cl.tellevo.app.tellevo_conductor"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Descargar Auto en Google Play"
                class="bg-[#0F9D58] text-white px-5 py-3 rounded-lg flex items-center gap-3 transition-all hover:scale-105 hover:shadow-lg"
              >
                <GooglePlayBadge class="h-8 w-auto" />
                <span class="text-sm font-medium">Android Auto</span>
              </a>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
});