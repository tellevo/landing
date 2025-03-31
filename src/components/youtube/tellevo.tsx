import { component$ } from "@builder.io/qwik";

interface YouTubeVideoProps {
  videoId: string;
  className?: string;
}

export const YouTubeVideo = component$((props: YouTubeVideoProps) => {
  const { videoId, className = "" } = props;

  return (
    <div class={`relative w-full h-0 pb-[56.25%] ${className}`}>
      <iframe
        class="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullscreen
      ></iframe>
    </div>
  );
});