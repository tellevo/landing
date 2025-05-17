import { component$, type QwikIntrinsicElements } from "@builder.io/qwik";

type PlayStoreBadgeProps = QwikIntrinsicElements["svg"] & {
  class?: string;
};

export const PlayStoreBadge = component$<PlayStoreBadgeProps>((props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 155 52"
      class={`${props.class} drop-shadow-sm`}
    >
      <rect width="155" height="52" rx="12" fill="#0F9D58"/>
      <text 
        x="50%" 
        y="60%" 
        fill="#fff" 
        font-family="system-ui, sans-serif"
        font-size="18" 
        font-weight="600" 
        text-anchor="middle" 
        dominant-baseline="middle"
      >
        Google Play
      </text>
    </svg>
  );
});