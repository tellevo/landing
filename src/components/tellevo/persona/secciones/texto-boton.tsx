import { component$ } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';

export const TextoBoton = component$(() => {
    const navigate = useNavigate();
    return (
        <section class="mt-8">
            <div>
                ¿ Cansado de hacer 2 o
                más combinaciones para
                irte al trabajo o estudio ?
                Descarga nuestra app y
                viaja más rápido y más seguro.
            </div>

            <div class="mt-8">
            <button class="mt-8 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium text-white hover:shadow-md transition-all duration-300" onClick$={() => navigate("/simular")}>
              Ver demostración
              <span class="ml-2">→</span>
            </button>
            </div>
        </section>
    );
});