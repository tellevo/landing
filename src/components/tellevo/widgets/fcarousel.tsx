import { component$ } from "@builder.io/qwik";
import { Carousel } from "flowbite-qwik";

export const FCarro = component$(() => {
  return (
    <Carousel 
        slideInterval={1500}
        noControls
    >
      <Carousel.Slide>
        <img src="https://tellevoapp.cl/wp-content/uploads/2024/01/corfo.png" width="790" height="790" alt="..." />
      </Carousel.Slide>
      <Carousel.Slide>
        <img src="https://tellevoapp.cl/wp-content/uploads/2024/01/achiplam.png" width="790" height="790" alt="..." />
      </Carousel.Slide>
      <Carousel.Slide>
        <img src="https://tellevoapp.cl/wp-content/uploads/2024/01/stgo-innova.png" width="790" height="790" alt="..." />
      </Carousel.Slide>
      <Carousel.Slide>
        <img src="https://tellevoapp.cl/wp-content/uploads/2024/01/centro-innovacion-uc.png" width="790" height="790" alt="..." />
      </Carousel.Slide>
      <Carousel.Slide>
        <img src="https://tellevoapp.cl/wp-content/uploads/2024/10/Logo-Chrysalis.png" width="790" height="790" alt="..." />
      </Carousel.Slide>
    </Carousel>
  )
});