import { component$, Slot } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';

interface ContenidoProps {
  titulo: string;
  texto: string;
}

// Componente IconBulb integrado (solución al error)
const IconBulb = component$(() => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      class="w-8 h-8 text-cyan-400 mr-3" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        stroke-width="2" 
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" 
      />
    </svg>
  );
});

export default component$((props: ContenidoProps) => {
  const navigate = useNavigate();
  return (
    <section class="relative bg-white">
      {/* Efecto de conexiones tecnológicas sutiles */}
      <div class="absolute inset-0 overflow-hidden opacity-10">
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yMCAzOC41YzEwLjIxIDAgMTguNS04LjI5IDE4LjUtMTguNUMzOC41IDkuNzkgMzAuMjEgMS41IDIwIDEuNSA5Ljc5IDEuNSAxLjUgOS43OSAxLjUgMjAgMS41IDMwLjIxIDkuNzkgMzguNSAyMCAzOC41eiIgc3Ryb2tlPSIjMDA3Y2NiIiBzdHJva2Utd2lkdGg9IjEiLz48L2c+PC9zdmc+')]">
        </div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        {/* Título principal */}
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-12 text-[#1054F1]">
          {props.titulo}
        </h2>

        <div class="grid md:grid-cols-2 gap-12 items-center">
          {/* Columna de imagen - Efecto más sutil */}
          <div class="relative group">
            <div class="absolute -inset-1 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            <div class="relative bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 group-hover:shadow-xl">
              <Slot />
            </div>
          </div>

          {/* Columna de texto - Más claro pero con detalles tech */}
          <div class="bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="flex items-center mb-6">
              <IconBulb />
              <h3 class="text-2xl md:text-3xl font-bold text-[#1054F1] ml-3">Innovación Sostenible</h3>
            </div>
            
            <p class="text-gray-600 text-lg leading-relaxed mb-6">
              {props.texto}
            </p>

            {/* Lista con puntos modernos */}
            <ul class="space-y-4">
              {[
                "Reducción de hasta 40% en emisiones",
                "Algoritmos de matching inteligente",
                "Verificación de identidad segura"
              ].map((item, index) => (
                <li key={index} class="flex items-start">
                  <div class="flex-shrink-0 mt-1.5">
                    <div class="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  </div>
                  <span class="ml-3 text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            {/* Botón con efecto hover más sutil */}
            <button class="mt-8 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium text-white hover:shadow-md transition-all duration-300" onClick$={() => navigate("/simular")}>
              Ver demostración
              <span class="ml-2">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});