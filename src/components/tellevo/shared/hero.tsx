import { component$, Slot } from '@builder.io/qwik';

// Define las props que el componente aceptará
interface ContenidoProps {
  texto: string;      // Texto del botón
}

export default component$((props: ContenidoProps) => {
  return (
    <section class="text-white">
      <div class="container mx-auto">
        <div class="flex flex-col md:flex-row items-center justify-between">
          <div class="md:w-1/2">
            <div class="text-3xl font-bold text-[#1054F1] p-3">
              {props.texto}
            </div>
          </div>
          <div class="md:w-1/2">
            <Slot />
          </div>
        </div>
      </div>
    </section>
  );
});
