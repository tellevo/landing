import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';

type CarouselProps = {
  images: string[];
  interval?: number;
};

export const Carousel = component$<CarouselProps>(({ images, interval = 2000 }) => {
  // Estado para rastrear el índice actual
  const currentIndex = useSignal(0);

  // Configurar el movimiento automático si hay más de 3 imágenes
  useVisibleTask$(({ cleanup }) => {
    if (images.length > 3) {
      const timer = setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % images.length;
      }, interval);
      cleanup(() => clearInterval(timer));
    }
  });

  // Calcular las tres imágenes a mostrar, con manejo de envoltura
  const displayImages = [
    images[currentIndex.value % images.length],
    images[(currentIndex.value + 1) % images.length],
    images[(currentIndex.value + 2) % images.length],
  ];

  return (
    <div style={{ width: '100%' }}>
      {/* Contenedor de las imágenes */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {displayImages.map((src, index) => (
          <img
            key={index}
            src={src}
            style={{
              
              objectFit: 'cover',
              
            }}
            alt={`Imagen ${index + 1}`}
          />
        ))}
      </div>
      {/* Puntos de paginación */}
      {images.length > 1 && (
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          {images.map((_, index) => (
            <span
              key={index}
              style={{
                display: 'inline-block',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: index === currentIndex.value ? '#000' : '#ccc',
                margin: '0 5px',
                cursor: 'pointer',
              }}
              onClick$={() => (currentIndex.value = index)}
            />
          ))}
        </div>
      )}
    </div>
  );
});