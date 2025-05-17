// AppStoreBadge.tsx corregido
import { component$ } from "@builder.io/qwik";

export const AppStoreBadge = component$(() => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="155" 
      height="52" 
      viewBox="0 0 155 52"
      class="h-14 w-auto drop-shadow-sm"
    >
      <rect width="155" height="52" rx="12" fill="#000"/>
      <text 
        x="77.5" 
        y="30" 
        fill="#fff"
        style={{
          fontFamily: "system-ui, sans-serif",
          fontSize: "18px",
          fontWeight: "600",
          textAnchor: "middle",
          dominantBaseline: "middle"
        }}
      >
        App Store
      </text>
    </svg>
  );
});