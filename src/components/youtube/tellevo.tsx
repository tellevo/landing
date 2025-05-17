import { component$ } from "@builder.io/qwik";

interface YouTubeVideoProps {
  videoId: string;
  class?: string;
}

export const YouTubeVideo = component$((props: YouTubeVideoProps) => {
  const { videoId, class: className = "" } = props;

  return (
    <div class={`relative group ${className}`}>
      {/* Marco con efecto neón (ahora solo visual, no intercepta clicks) */}
      <div class="absolute inset-0 border-4 border-transparent group-hover:border-cyan-400 rounded-xl transition-all duration-500 shadow-[0_0_20px_rgba(14,165,233,0.3)] group-hover:shadow-[0_0_30px_rgba(14,165,233,0.6)] z-10 pointer-events-none"></div>

      {/* Contenedor principal del video - sin overlay que bloquee clicks */}
      <div class="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-lg transform perspective-1000 group-hover:rotate-x-2 transition-transform duration-500">
        <iframe
          class="absolute top-0 left-0 w-full h-full border-none"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0&modestbranding=1&controls=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullscreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Efecto de reflexión (puramente visual) */}
      <div class="absolute -bottom-24 left-0 right-0 h-20 bg-gradient-to-t from-blue-900/80 to-transparent opacity-70 blur-lg scale-95 -rotate-1 pointer-events-none"></div>

      {/* Efecto de partículas (ajustado para no interferir) */}
      <div class="absolute top-0 left-0 right-0 bottom-0 pointer-events-none overflow-hidden rounded-lg">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            class="absolute bg-cyan-400 rounded-full pointer-events-none"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3, // Más transparente
              animation: `float ${Math.random() * 5 + 3}s infinite ease-in-out ${Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
});
