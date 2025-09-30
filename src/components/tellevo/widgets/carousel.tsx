import { component$, useSignal, useStyles$ } from '@builder.io/qwik';
import { Carousel } from '@qwik-ui/headless';

export const Carrito =  component$(() => {
  useStyles$(styles);


  const imagenes = [
    'https://tellevoapp.cl/wp-content/uploads/2024/01/corfo.png',
    'https://tellevoapp.cl/wp-content/uploads/2024/01/achiplam.png',
    'https://tellevoapp.cl/wp-content/uploads/2024/01/stgo-innova.png',
    'https://tellevoapp.cl/wp-content/uploads/2024/01/centro-innovacion-uc.png',
    'https://tellevoapp.cl/wp-content/uploads/2024/10/Logo-Chrysalis.png'
    
  ];

  const isPlaying = useSignal<boolean>(false);


  return (
    <>
    <Carousel.Root 
      class="
      carousel-root
      flex flex-col md:flex-row
      " 
      gap={20}
      autoPlayIntervalMs={1500}
      bind:autoplay={isPlaying}
      slidesPerView={2}
      mousewheel={true}
      >
      
      <Carousel.Previous><i class="fa fa-angle-left"></i> </Carousel.Previous>
      <Carousel.Scroller class="carousel-scroller">
        {imagenes.map((imagen) => (
          <Carousel.Slide key={imagenes.indexOf(imagen)} class="carousel-slide">
            <img
            src={imagen}
            width={200}
            height={100}
            style={{

              objectFit: 'cover',

            }}
          />
          </Carousel.Slide>
        ))}
      </Carousel.Scroller>
      <Carousel.Next
      > <i class="fa fa-angle-right"></i> </Carousel.Next>
    </Carousel.Root>
    </>
  );
});
// internal
import styles from './carousel.css?inline';
