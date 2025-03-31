// src/components/BotonNavegacion.tsx
import { component$, useSignal, $ } from '@builder.io/qwik';
import { useLocation, useNavigate } from '@builder.io/qwik-city';

// Define las props que el componente aceptará
export const BotonNavegacion = component$(() => {
  const navigate = useNavigate();
  // Signal to manage the button's loading state
  const isLoading = useSignal(false);
  const label = useSignal('Personas'); // Texto inicial del botón
  const destino = useSignal('/personas');

  // Get navigation state
  const loc = useLocation();

  // Function to handle button click and navigation
  const handleClick = $(async () => {
    // Set loading state to true when navigation starts
    isLoading.value = true;
    
    // Navegar al destino actualizado
    await navigate(destino.value);

    // Cambiar el label y el destino
    if (destino.value === '/personas') {
      label.value = 'Empresas';
      destino.value = '/';
    } else {
      label.value = 'Personas';
      destino.value = '/personas';
    }
    
    isLoading.value = false;
  });

// Only sync with isNavigating during the navigation process, not after
  // This avoids keeping isLoading true on the new page
  if (loc.isNavigating && !isLoading.value) {
    isLoading.value = true;
  }

  return (
    <button
    onClick$={()=>handleClick()}
    disabled={isLoading.value}
    class={isLoading.value ? 'loading-button' : 'normal-button'}
    >
      {isLoading.value ? 'Loading...' : label.value}
    </button>
  );
});