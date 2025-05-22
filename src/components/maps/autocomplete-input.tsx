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
  const inputRef = useSignal<HTMLInputElement>();
  const mapLoaded = useSignal(false);
  const error = useSignal<string | null>(null);

  const handlePlaceSelected = $(async (place: google.maps.places.PlaceResult) => {
    if (onPlaceSelected$ && place.formatted_address) {
      await onPlaceSelected$(place);
    }
  });

  useVisibleTask$(async ({ cleanup }) => {
    if (!inputRef.value || mapLoaded.value) return;

    const loader = getGoogleMapsLoader();

    try {
      await loader.load();
      mapLoaded.value = true;

      const autocomplete = new google.maps.places.Autocomplete(inputRef.value, {
        componentRestrictions: { country: 'cl' },
        fields: ['formatted_address', 'geometry', 'name'],
      });

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        if (place && place.geometry) {
          handlePlaceSelected(place);
        }
      });

      cleanup(() => {
        google.maps.event.clearInstanceListeners(autocomplete);
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
      <input
        ref={inputRef}
        type="text"
        id={id}
        class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 placeholder-gray-400 placeholder-opacity-100"
        placeholder={placeholder}
      />
      {error.value && (
        <p class="mt-1 text-sm text-red-600">{error.value}</p>
      )}
    </div>
  );
});