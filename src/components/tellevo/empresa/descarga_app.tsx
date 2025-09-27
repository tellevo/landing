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

            {/* Botones con iconos */}
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#" class="
                bg-black text-white px-6 py-3 rounded-lg
                flex items-center justify-center gap-2
                transition-all hover:scale-105 hover:shadow-lg
                text-lg font-medium
              ">
                <AppStoreBadge class="h-8 w-auto" />
                App Store
              </a>
              
              <a href="#" class="
                bg-[#0F9D58] text-white px-6 py-3 rounded-lg
                flex items-center justify-center gap-2
                transition-all hover:scale-105 hover:shadow-lg
                text-lg font-medium
              ">
                <GooglePlayBadge class="h-8 w-auto" />
                Google Play
              </a>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
});