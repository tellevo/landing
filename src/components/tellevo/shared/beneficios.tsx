import { component$, Slot } from '@builder.io/qwik';

interface ComponentesProps {
  titulo: string;
  contenido?: any;
}

export default component$((props: ComponentesProps) => {
  return (
    <section class="relative py-24 bg-white overflow-hidden">
      {/* Efecto de conexión superior */}
      <div class="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-20"></div>
      
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row items-stretch gap-10 md:gap-16">
          {/* Columna de texto mejorada */}
          <div class="md:w-1/2 flex flex-col justify-center space-y-8">
            <h3 class="text-5xl font-extrabold text-gray-900 leading-tight">
              <span class="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                {props.titulo}
              </span>
            </h3>
            
            <div class="prose prose-lg text-gray-600 max-w-none">
              {props.contenido && <props.contenido />}
            </div>
          </div>

          {/* Columna de imagen (sin cambios en estructura) */}
          <div class="md:w-1/2 relative">
            <div class="absolute -inset-4 bg-gradient-to-br from-cyan-100/40 to-blue-100/40 rounded-2xl opacity-50 -rotate-1"></div>
            <div class="relative rounded-xl overflow-hidden border border-gray-200/80 shadow-xl transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
              <Slot />
            </div>
          </div>
        </div>
      </div>

      {/* Efecto de conexión inferior */}
      <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-20"></div>
    </section>
  );
});