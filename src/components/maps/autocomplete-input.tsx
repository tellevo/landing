/* eslint-disable qwik/valid-lexical-scope */
import { component$, useSignal, useVisibleTask$, $, useTask$, noSerialize, type NoSerialize } from '@builder.io/qwik';
import { getGoogleMapsLoader } from '~/utils/google-map-loader';

interface AutocompleteInputProps {
  id: string;
  label: string;
  placeholder: string;
  onPlaceSelected$?: (place: google.maps.places.PlaceResult) => void;
  minChars?: number; // minimum characters before initializing autocomplete
}

export default component$<AutocompleteInputProps>(({ id, label, placeholder, onPlaceSelected$, minChars: minCharsProp }) => {
  const inputRef = useSignal<HTMLInputElement>();
  const mapLoaded = useSignal(false);
  const error = useSignal<string | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  const minChars = minCharsProp ?? 3;
  const initialized = useSignal(false);
  const autocomplete = useSignal<NoSerialize<google.maps.places.Autocomplete> | null>(null);

  const handlePlaceSelected = $(async () => {
    const ac = autocomplete.value;
    if (!ac) return;
    const place = ac.getPlace();
    if (onPlaceSelected$) {
      const fallbackAddress = place.formatted_address || place.name || inputRef.value?.value || '';
      const selected = { ...place, formatted_address: place.formatted_address ?? fallbackAddress } as google.maps.places.PlaceResult;
      await onPlaceSelected$(selected);
    }
  });

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(async ({ cleanup }) => {
    const loader = getGoogleMapsLoader();
    try {
      await loader.load();
      await google.maps.importLibrary('places');
      mapLoaded.value = true;
      console.debug('[AutocompleteInput] Places library loaded');
    } catch (err) {
      console.error('Error al cargar Google Places:', err);
      error.value = 'Error al cargar el autocompletado';
      return;
    }

    const tryInit = () => {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      const val = inputRef.value!.value ?? '';
      if (!initialized.value && val.length >= minChars && inputRef.value) {
        if (!(globalThis as any).google?.maps?.places) {
          console.warn('[AutocompleteInput] google.maps.places is not available yet');
          return;
        }
        // Initialize autocomplete only after minChars
        autocomplete.value = noSerialize(new google.maps.places.Autocomplete(inputRef.value, {
          fields: ['formatted_address', 'geometry', 'name', 'address_components'],
          componentRestrictions: { country: 'CL' },
          types: ['geocode'],
        }));
        console.debug('[AutocompleteInput] Autocomplete initialized (minChars met)');
        const ac = autocomplete.value as unknown as { addListener?: (evt: string, cb: () => void) => void };
        ac?.addListener?.('place_changed', () => handlePlaceSelected());
        initialized.value = true;
      }
    };

    const onInput = () => tryInit();
    const onFocus = () => tryInit();
    const onPaste = () => setTimeout(tryInit, 0);

    inputRef.value?.addEventListener('input', onInput);
    inputRef.value?.addEventListener('focus', onFocus);
    inputRef.value?.addEventListener('paste', onPaste);

    cleanup(() => {
      inputRef.value?.removeEventListener('input', onInput);
      inputRef.value?.removeEventListener('focus', onFocus);
      inputRef.value?.removeEventListener('paste', onPaste);
    });
  });

  useTask$(({ track }) => {
    track(() => error.value);
  });

  return (
    <div>
      <label for={id} class="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        id={id}
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        class="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        autoComplete="off"
        inputMode="text"
      />
      <p class="mt-1 text-xs text-gray-500">Escribe al menos {minChars} caracteres para ver sugerencias.</p>
      {error.value && (
        <p class="mt-1 text-sm text-red-600">{error.value}</p>
      )}
    </div>
  );
});
