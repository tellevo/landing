
import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
<section class="bg-gray-50 py-20">
        <div class="container mx-auto px-4">
          <h2 class="text-4xl font-bold text-center mb-16">¿Cómo funciona?</h2>
          <div class="grid md:grid-cols-4 gap-8">
            <div class="text-center">
              <div class="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span class="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 class="text-xl font-semibold mb-4">Descarga la App</h3>
              <p class="text-gray-600">Disponible para iOS y Android</p>
            </div>
            <div class="text-center">
              <div class="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span class="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 class="text-xl font-semibold mb-4">Elige tu destino</h3>
              <p class="text-gray-600">Selecciona tu origen y destino</p>
            </div>
            <div class="text-center">
              <div class="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span class="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 class="text-xl font-semibold mb-4">Reserva tu viaje</h3>
              <p class="text-gray-600">Elige el conductor y horario</p>
            </div>
            <div class="text-center">
              <div class="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span class="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 class="text-xl font-semibold mb-4">¡Disfruta tu viaje!</h3>
              <p class="text-gray-600">Viaja seguro y cómodo</p>
            </div>
          </div>
        </div>
      </section>
);
});