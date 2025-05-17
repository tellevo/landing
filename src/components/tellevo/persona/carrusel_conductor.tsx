/* eslint-disable qwik/jsx-img */
import { component$ } from "@builder.io/qwik";
import { Carousel } from "flowbite-qwik";
import  ImgPaso1 from "~/assets/carrusel_conductor/01.png";
import  ImgPaso2 from "~/assets/carrusel_conductor/02.png";
import  ImgPaso3 from "~/assets/carrusel_conductor/03.png";
import  ImgPaso4 from "~/assets/carrusel_conductor/04.png";
import  Screen1 from "~/assets/carrusel_conductor/screen1.png";
import  Screen2 from "~/assets/carrusel_conductor/screen2.png";
import Screen3 from "~/assets/carrusel_conductor/screen3.png";
import Screen4 from "~/assets/carrusel_conductor/screen4.png";
import Screen5 from "~/assets/carrusel_conductor/screen5.png";

export const ConductorSteps = component$(() => {
  return (
    <section class="container mx-auto px-4 ">
      <h2 class="text-4xl font-bold text-center">
          <span class="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
            Si eres Conductor
          </span>
        </h2>

      {/* Contenido principal */}
      <div class="flex flex-col lg:flex-row gap-4 items-center">
        {/* Columna izquierda (1/3) */}
        <div class="lg:w-1/3 space-y-10">
          <StepCard
            number={1}
            image={ImgPaso1}
            text="Registra tu perfil y vehículo para verificar su autenticidad."
          />
          <StepCard
            number={2}
            image={ImgPaso2}
            text="Planifica tus salidas recurrentes o inmediatas."
          />
        
        </div>

        {/* Columna central (2/3) - Carrusel */}
        <div class="lg:w-1/3 w-full">
          <Carousel slideInterval={3000} class="min-h-screen" noControls noIndicators>
            <Carousel.Slide class="flex items-center justify-center h-full">
              <img
                src={Screen1}
                class="h-full w-auto object-contain"
                alt="Screen 1"
              />
            </Carousel.Slide>
            <Carousel.Slide class="flex items-center justify-center h-full">
              <img
                src={Screen2}
                class="h-full w-auto object-contain"
                alt="Screen 2"
              />
            </Carousel.Slide>
            <Carousel.Slide class="flex items-center justify-center h-full">
              <img
                src={Screen3}
                class="h-full w-auto object-contain"
                alt="Screen 3"
              />
            </Carousel.Slide>
            <Carousel.Slide class="flex items-center justify-center h-full">
              <img
                src={Screen4}
                class="h-full w-auto object-contain"
                alt="Screen 4"
              />
            </Carousel.Slide>
            <Carousel.Slide class="flex items-center justify-center h-full">
              <img
                src={Screen5}
                class="h-full w-auto object-contain"
                alt="Screen 5"
              />
            </Carousel.Slide>
          </Carousel>
        </div>

        {/* Columna derecha (3/3) */}
        <div class="lg:w-1/3 space-y-8">
          {/* Paso 2 */}
          <StepCard
            number={3}
            image={ImgPaso3}
            text="Configura tus trayectos y preferencias de viaje."
          />
          <StepCard
            number={4}
            image={ImgPaso4}
            text="Decide el perfil de personas a quienes quieres transportar"
          />
        </div>
      </div>
    </section>
  );
});


const StepCard = component$(({ number, image, text }: any) => {
  return (
    <div class="group flex gap-6 p-6 bg-white rounded-xl border border-gray-200 hover:border-cyan-400 transition-all duration-300 shadow-md hover:shadow-lg">
      <div class="flex-shrink-0 w-14 h-14 bg-cyan-50 rounded-xl flex items-center justify-center group-hover:bg-cyan-100 transition-colors">
        <img
          src={image}
          class="w-8 h-8 object-contain"
          alt={`Paso ${number}`}
          loading="lazy"
        />
      </div>
      <div>
        <span class="text-xl font-bold text-cyan-600">Paso {number}.</span>
        <p class="text-gray-700 mt-2 text-lg leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
});