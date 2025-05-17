import { component$ } from '@builder.io/qwik';
import { FCarro } from '../widgets/fcarousel';


export default component$(() => {
  return (
    <section class="relative py-20 bg-white overflow-hidden">
      {/* Efecto de conexión tecnológica */}
      <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-20"></div>
      
      <div class="container mx-auto px-4">
        <h3 class="text-4xl font-bold text-center mb-16">
          <span class="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
            Apoyados por
          </span>
        </h3>
        
        {/* Contenedor del carrusel con altura fija */}
        <div class="relative max-w-4xl mx-auto h-40"> {/* Altura fija aquí */}
          <div class="absolute -inset-4 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-2xl opacity-30 blur-sm"></div>
          <div class="relative h-full p-2 bg-white rounded-xl shadow-sm flex items-center">
            <FCarro />
          </div>
        </div>
      </div>

      {/* Efecto inferior */}
      <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-20"></div>
    </section>
  );
});