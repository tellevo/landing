import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { Loader } from "@googlemaps/js-api-loader";

interface MapProps {
  apiKey: string;
  start?: string;
  end?: string;
}

export default component$<MapProps>(({ apiKey, start, end }) => {
  const mapRef = useSignal<HTMLDivElement>();
  const mapLoaded = useSignal(false);

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(async ({ cleanup }) => {
    if (mapLoaded.value) return;

    const loader = new Loader({
      apiKey,
      version: "weekly",
      libraries: ["places", "routes"]
    });

    try {
      await loader.load();
      mapLoaded.value = true;

      const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
      const { DirectionsService, DirectionsRenderer } = await google.maps.importLibrary("routes") as google.maps.RoutesLibrary;

      // Inicializar el mapa
      const map = new Map(mapRef.value as HTMLDivElement, {
        center: { lat: -33.45694, lng: -70.64827 },
        zoom: 12,
      });

      const directionsService = new DirectionsService();
      const directionsRenderer = new DirectionsRenderer({ map });

      const calculateAndDisplayRoute = (start: string, end: string) => {
        directionsService.route(
          {
            origin: start,
            destination: end,
            travelMode: google.maps.TravelMode.DRIVING,
          },
          (response, status) => {
            if (status === 'OK' && response) {
              directionsRenderer.setDirections(response);
            } else {
              console.error('Error al calcular la ruta:', status);
            }
          }
        );
      };

      if (start && end) {
        calculateAndDisplayRoute(start, end);
      }

      cleanup(() => {
        directionsRenderer.setMap(null);
      });

    } catch (error) {
      console.error("Error al cargar Google Maps:", error);
    }
  });

  return <div ref={mapRef} class="w-full h-[400px] rounded-lg"></div>;
});