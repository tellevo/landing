// src/components/tellevo/widgets/boton-navegacion.tsx
import { component$, useSignal, $ } from '@builder.io/qwik'; // <-- Añade $ aquí
import { useNavigate } from '@builder.io/qwik-city';

export const BotonNavegacion = component$(() => {
  const navigate = useNavigate();
  const isLoading = useSignal(false);
  const isPersonas = useSignal(true);

  // Función manejadora con $ para optimización Qwik
  const handleClick = $(async () => {
    isLoading.value = true;
    await navigate(isPersonas.value ? '/personas' : '/');
    isPersonas.value = !isPersonas.value;
    isLoading.value = false;
  });

  return (
    <button
      onClick$={handleClick} // <-- Usamos onClick$ con $
      disabled={isLoading.value}
      class={`
        
        ${isPersonas.value 
          ? 'text-white' 
          : 'text-black'} // Cambiado a fondo oscuro para mejor contraste
        ${isLoading.value ? 'opacity-70 cursor-not-allowed' : ''}
      `}
    >
      {isLoading.value ? (
        <span class="inline-flex items-center">
          <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Procesando...
        </span>
      ) : (
        isPersonas.value ? 'Personas' : 'Empresas'
      )}
    </button>
  );
});