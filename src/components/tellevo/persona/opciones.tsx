import { component$ } from '@builder.io/qwik';
import SocialImg from '~/assets/personas/mundo.png?jsx';
import EconomicoImg from '~/assets/personas/crecimiento.png?jsx';
import AmbientalImg from '~/assets/personas/ambiental.png?jsx';

export default component$(() => {
  return (
    <section class="relative py-16 bg-gray-50">
      {/* Efecto decorativo superior */}
      <div class="absolute top-0 left-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30 transform -translate-x-1/2"></div>
      
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold text-gray-800 mb-4">
          <span class="bg-clip-text text-[#1054F1]">
            ¿Por qué Tellevo App es tu mejor opción?
          </span>
        </h2>
        <p class="text-gray-600 mb-12">La primera app para compartir que conecta personas en tiempo real</p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Tarjeta 1 */}
          <div class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
            <div class="bg-cyan-50 w-16 h-16 mx-auto rounded-lg flex items-center justify-center mb-4">
              <SocialImg class="w-10 h-10 object-contain" />
            </div>
            <h3 class="text-xl font-semibold text-[#1054F1] mb-2">Impacto Social</h3>
            <p class="text-gray-600">
              Mejorar tu calidad de vida al destinar menos tiempo a movilizarte.
            </p>
          </div>

          {/* Tarjeta 2 */}
          <div class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
            <div class="bg-blue-50 w-16 h-16 mx-auto rounded-lg flex items-center justify-center mb-4">
              <EconomicoImg class="w-10 h-10 object-contain" />
            </div>
            <h3 class="text-xl font-semibold text-[#1054F1] mb-2">Impacto Económico</h3>
            <p class="text-gray-600">
              Entregamos asequibilidad económica a una nueva alternativa de transporte.
            </p>
          </div>

          {/* Tarjeta 3 */}
          <div class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
            <div class="bg-green-50 w-16 h-16 mx-auto rounded-lg flex items-center justify-center mb-4">
              <AmbientalImg class="w-10 h-10 object-contain" />
            </div>
            <h3 class="text-xl font-semibold text-[#1054F1] mb-2">Impacto Ambiental</h3>
            <p class="text-gray-600">
              Aportamos al cuidado del medioambiente reduciendo autos en circulación.
            </p>
          </div>
        </div>
      </div>

      {/* Efecto decorativo inferior */}
      <div class="absolute bottom-0 left-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30 transform -translate-x-1/2"></div>
    </section>
  );
});