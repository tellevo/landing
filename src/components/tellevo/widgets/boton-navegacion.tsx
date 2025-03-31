// src/components/BotonNavegacion.tsx
import { component$ } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';

// Define las props que el componente aceptará
interface BotonNavegacionProps {
  texto: string;      // Texto del botón
  destino: string;    // Ruta a la que navegar
}

export const BotonNavegacion = component$((props: BotonNavegacionProps) => {
  const navigate = useNavigate();

  return (
    <button
      onClick$={() => navigate(props.destino)}
    >
      {props.texto}
    </button>
  );
});