import { component$, useSignal, useVisibleTask$, $ } from '@builder.io/qwik';

interface AutocompleteInputProps {
  id: string;
  label: string;
  placeholder: string;
  apiKey: string;
  onPlaceSelected$?: (place: google.maps.places.PlaceResult) => void;
}

export default component$<AutocompleteInputProps>(({ id, label, placeholder, apiKey, onPlaceSelected$ }) => {
  const inputRef = useSignal<HTMLInputElement>();
  const mapLoaded = useSignal(false);

  // Manejador serializable con $ para Qwik
  const handlePlaceSelected = $(async (place: google.maps.places.PlaceResult) => {
    // eslint-disable-next-line qwik/valid-lexical-scope
    if (onPlaceSelected$) {
      // eslint-disable-next-line qwik/valid-lexical-scope
      await onPlaceSelected$(place);
    }
  });

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(async ({ cleanup }) => {
    if (!inputRef.value || mapLoaded.value) return;

    const loader = new (await import('@googlemaps/js-api-loader')).Loader({
      apiKey,
      version: "weekly",
      libraries: ["places"]
    });

    try {
      await loader.load();
      mapLoaded.value = true;

      const { Autocomplete } = (await google.maps.importLibrary("places")) as google.maps.PlacesLibrary;

      const autocomplete = new Autocomplete(inputRef.value, {
        types: ['geocode'],
        componentRestrictions: { country: 'cl' }
      });

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        if (place.geometry) {
          handlePlaceSelected(place);
        }
      });

      cleanup(() => {
        google.maps.event.clearInstanceListeners(autocomplete);
      });
    } catch (error) {
      console.error("Error al cargar Google Places:", error);
    }
  });

  return (
    <div>
      <label for={id} class="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        ref={inputRef}
        type="text"
        id={id}
        class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 text-cyan-600"
        placeholder={placeholder}
      />
    </div>
  );
});