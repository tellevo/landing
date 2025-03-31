// src/components/BotonNavegacion.tsx
import { component$, useSignal, $ } from '@builder.io/qwik';
import { useLocation, useNavigate } from '@builder.io/qwik-city';

// Define las props que el componente aceptará
interface BotonNavegacionProps {
  texto: string;      // Texto del botón
  destino: string;    // Ruta a la que navegar
}

export const BotonNavegacion = component$((props: BotonNavegacionProps) => {
  const navigate = useNavigate();
  // Signal to manage the button's loading state
  const isLoading = useSignal(false);

  // Get navigation state
  const loc = useLocation();

  // Function to handle button click and navigation
  const handleClick = $(async () => {
    // Set loading state to true when navigation starts
    isLoading.value = true;
    
    // Navigate to the target route (e.g., '/another-page')
    await navigate(props.destino);
    
    // Note: isLoading will automatically reset due to isNavigating below
  });

// Only sync with isNavigating during the navigation process, not after
  // This avoids keeping isLoading true on the new page
  if (loc.isNavigating && !isLoading.value) {
    isLoading.value = true;
  } else {
    isLoading.value = false; 
  }

  return (
    <button
    onClick$={()=>handleClick()}
    disabled={isLoading.value}
    class={isLoading.value ? 'loading-button' : 'normal-button'}
    >
      {isLoading.value ? 'Loading...' : props.texto}
    </button>
  );
});