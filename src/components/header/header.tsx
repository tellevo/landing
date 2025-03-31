import { component$ } from '@builder.io/qwik';
import LogoImg from '~/assets/logo.png?jsx';

import { BotonNavegacion } from '~/components/tellevo/widgets/boton-navegacion';

export default component$(() => {

  return (
    <div class="bg-white shadow-sm">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-0">
          <a href="/" class="text-2xl font-bold text-blue-600">
            <LogoImg style={{ width: '20vw', height: 'auto' }} />
          </a>

          <nav class="hidden md:flex space-x-8">
            <a href="#" class="text-gray-600 hover:text-blue-600">Nosotros</a>
            <a href="#" class="text-gray-600 hover:text-blue-600">Pasajero</a>
            <a href="#" class="text-gray-600 hover:text-blue-600">Conductor</a>
            <a href="#" class="text-gray-600 hover:text-blue-600">Registro</a>
          </nav>

          <div class="flex items-center space-x-4">
            <BotonNavegacion texto="Personas" destino="/personas" />
            <i class="fab fa-facebook fa-2x" />
            <i class="fab fa-instagram text-red-600 hover:text-blue-600 fa-2x" />
          </div>
        </div>
      </div>
    </div>
  );
});