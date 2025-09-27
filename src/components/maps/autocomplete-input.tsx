/* eslint-disable qwik/valid-lexical-scope */
import { component$, useSignal, useVisibleTask$, $ } from '@builder.io/qwik';
import { getGoogleMapsLoader } from '~/utils/google-map-loader';

interface AutocompleteInputProps {
  id: string;
  label: string;
  placeholder: string;
  onPlaceSelected$?: (place: google.maps.places.PlaceResult) => void;
}

export default component$<AutocompleteInputProps>(({ id, label, placeholder, onPlaceSelected$ }) => {
  const containerRef = useSignal<HTMLDivElement>();
  const mapLoaded = useSignal(false);
  const error = useSignal<string | null>(null);

  const handlePlaceSelected = $(async (place: google.maps.places.PlaceResult) => {
    if (onPlaceSelected$ && place) {
      await onPlaceSelected$(place);
    }
  });

  useVisibleTask$(async ({ cleanup }) => {
    if (!containerRef.value || mapLoaded.value) return;

    const loader = getGoogleMapsLoader();

    try {
      // Ensure the Places library is loaded
      await loader.load();
      await google.maps.importLibrary('places');
      mapLoaded.value = true;

      const autocompleteOptions = {
        componentRestrictions: {
          id: id,
          placeholder: placeholder,
          country: "CL"
        }
      };

      // Create the new Place Autocomplete Element (web component)
      const pac = new google.maps.places.PlaceAutocompleteElement(autocompleteOptions);

      // Append into our container
      containerRef.value.appendChild(pac);

      // Listen for place changes
      const onChange = () => {
        // According to docs, the selected place is available on the `value` property
        const place = (pac as unknown as { value?: google.maps.places.PlaceResult }).value;
        if (place) {
          handlePlaceSelected(place);
        }
      };
      pac.addEventListener('gmpxplacechange', onChange);

      // Cleanup listeners and element on unmount
      cleanup(() => {
        pac.removeEventListener('gmpxplacechange', onChange);
        pac.remove?.();
      });
    } catch (err) {
      console.error('Error al cargar Google Places:', err);
      error.value = 'Error al cargar el autocompletado';
    }
  });

  return (
    <div>
      <label for={id} class="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      {/* Container for the PlaceAutocompleteElement */}
      <div ref={containerRef} class="w-full" />
      {error.value && (
        <p class="mt-1 text-sm text-red-600">{error.value}</p>
      )}
    </div>
  );
});