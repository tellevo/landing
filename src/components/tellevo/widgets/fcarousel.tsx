/* eslint-disable qwik/jsx-img */
import { component$ } from "@builder.io/qwik";
import { Carousel } from "flowbite-qwik";

export const FCarro = component$(() => {
  const logos = [
    "https://tellevoapp.cl/wp-content/uploads/2024/01/corfo.png",
    "https://tellevoapp.cl/wp-content/uploads/2024/01/achiplam.png",
    "https://tellevoapp.cl/wp-content/uploads/2024/01/stgo-innova.png",
    "https://tellevoapp.cl/wp-content/uploads/2024/01/centro-innovacion-uc.png",
    "https://tellevoapp.cl/wp-content/uploads/2024/10/Logo-Chrysalis.png"
  ];

  return (
    <Carousel 
      slideInterval={2000}
      noControls
      noIndicators
      class="h-full" // Eliminamos altura fija aquí
    >
      {logos.map((logo, index) => (
        <Carousel.Slide key={index} class="flex items-center justify-center h-full px-4">
          <div class="h-full flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300">
            
            <img 
              src={logo} 
              alt={`Logo ${index + 1}`}
              class="max-h-20 md:max-h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 mx-auto" // mx-auto para centrado horizontal
              loading="lazy"
              style={{
                maxWidth: "200px",
                height: "100%", // Cambia de "auto" a "100%" si necesitas ocupar toda la altura
                objectFit: "contain", // Redundante con object-contain pero puede ayudar
                display: "block",
                margin: "auto" // Alternativa a mx-auto
              }}
            />
          </div>
        </Carousel.Slide>
      ))}
    </Carousel>
  )
});