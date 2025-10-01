/* eslint-disable qwik/valid-lexical-scope */
import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { getGoogleMapsLoader } from '~/utils/google-map-loader';

interface MapProps {
  start?: string;
  end?: string;
  onRouteCalculated$?: (response: google.maps.DirectionsResult) => void;
}

export default component$<MapProps>(({ start, end, onRouteCalculated$ }) => {
  const mapRef = useSignal<HTMLDivElement>();
  const directionsPanelRef = useSignal<HTMLDivElement>();
  const mapLoaded = useSignal(false);
  const mapError = useSignal<string | null>(null);

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(async ({ cleanup }) => {
    if (mapLoaded.value) return;

    const loader = getGoogleMapsLoader();

    try {
      await loader.load();
      mapLoaded.value = true;

      const { Map } = await google.maps.importLibrary('maps') as google.maps.MapsLibrary;
      const { DirectionsService, DirectionsRenderer } = await google.maps.importLibrary('routes') as google.maps.RoutesLibrary;

      const map = new Map(mapRef.value as HTMLDivElement, {
        center: { lat: -33.45694, lng: -70.64827 },
        zoom: 12,
        streetViewControl: false, // Disable Street View Pegman
        mapTypeControl: false, // Disable map type control for cleaner UI
        fullscreenControl: false, // Disable fullscreen control
        styles: [
          {
            featureType: 'all',
            elementType: 'all',
            stylers: [{ saturation: -20 }, { lightness: 20 }],
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{ hue: '#00b7eb' }, { saturation: 10 }],
          },
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'simplified' }],
          },
        ],
      });

      const directionsService = new DirectionsService();
      const directionsRenderer = new DirectionsRenderer({
        map,
        panel: directionsPanelRef.value as HTMLDivElement,
        suppressMarkers: false, // Show route markers
        polylineOptions: {
          strokeColor: '#0891b2', // Match brand color (cyan)
          strokeWeight: 5,
        },
      });

      const calculateAndDisplayRoute = async (start: string, end: string) => {
        try {
          const response = await directionsService.route({
            origin: start,
            destination: end,
            travelMode: google.maps.TravelMode.DRIVING,
          });

          directionsRenderer.setDirections(response);
          if (onRouteCalculated$) {
            await onRouteCalculated$(response);
          }
          return response;
        } catch (error) {
          console.error('Error al calcular la ruta:', error);
          mapError.value = 'No se pudo calcular la ruta. Verifica las direcciones ingresadas.';
          throw error;
        }
      };

      if (start && end) {
        await calculateAndDisplayRoute(start, end);
      }

      cleanup(() => {
        directionsRenderer.setMap(null);
      });
    } catch (error) {
      console.error('Error al cargar Google Maps:', error);
      mapError.value = 'Error al cargar el mapa. Por favor verifica tu conexión.';
    }
  });

  // directionPanelRef is optional, only set if provided
  // <div ref={directionsPanelRef} class="w-full p-4 bg-white rounded-xl shadow-md"></div>
  // to show directions panel only if needed. Dejarla bajo mapRef para que siempre esté disponible.
  return (
    <div class="w-full">
      {mapError.value ? (
        <div class="p-4 bg-red-50 text-red-700 rounded-xl border border-red-200">
          {mapError.value}
        </div>
      ) : (
        <>
          <div ref={mapRef} class="w-full h-[400px] sm:h-[500px] rounded-xl mb-4 shadow-md"></div>
        </>
      )}
      <style>
        {`
          /* Hide unwanted dev dialog button */
          button[title="Open Image Dev Dialog"],
          button[style*="background-color: yellow"],
          button[style*="background: yellow"] {
            display: none !important;
          }
        `}
      </style>
    </div>
  );
});
