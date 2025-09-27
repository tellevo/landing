import { component$ } from "@builder.io/qwik";
import { smoothScroll } from "~/components/header/scroll";
import { YouTubeVideo } from "~/components/youtube/tellevo";

// Define las props que el componente aceptará
interface ContenidoProps {
  texto: string; // Texto del botón
}

export default component$((props: ContenidoProps) => {
  return (
    <section class="relative overflow-hidden py-20">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center gap-12">
          <div class="md:w-1/2 space-y-8 relative z-10">
            <h1 class="text-5xl font-bold text-[#1054F1] font-sans">
              {props.texto}
            </h1>
            <div class="space-y-4">
              <button onClick$={() => smoothScroll("descarga")} class="bg-cyan-500 hover:bg-cyan-400 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-glow">
                Descarga la App
              </button>
            </div>
          </div>
          <div class="md:w-1/2 relative">
            <div class="absolute inset-0 bg-blue-500/10 rounded-2xl backdrop-blur-xl"></div>
            <YouTubeVideo
              videoId="i9sYJT33eyA"
              class="rounded-2xl transform perspective-1000 rotate-x-5"
            />
          </div>
        </div>
      </div>
    </section>
  );
});
