import { component$ } from '@builder.io/qwik';

import SocialImg from '~/assets/personas/mundo.png?jsx';
import EconomicoImg from '~/assets/personas/crecimiento.png?jsx';
import AmbientalImg from '~/assets/personas/ambiental.png?jsx';

export default component$(() => {
    return (
        <section class="bg-blue-50 py-12 px-6 text-center">
            <h2 class="text-3xl font-bold text-blue-600">¿Por qué Tellevo App es tu mejor opción?</h2>
            <p class="mt-2 text-gray-700">La primera app para compartir que conecta personas en tiempo real</p>
            <div class="mt-8 flex flex-col md:flex-row gap-6 justify-center">

                {/* Componente: Impacto Social */}
                <div class="bg-white p-6 rounded-2xl shadow-lg max-w-sm">
                    <SocialImg class="mx-auto mb-4 w-20 h-20" />
                    <h3 class="text-xl font-bold text-blue-600">Impacto social</h3>
                    <p class="mt-2 text-gray-600">Mejorar tu calidad de vida al destinar menos tiempo a movilizarte.</p>
                </div>

                {/* Componente: Impacto Económico */}

                <div class="bg-white p-6 rounded-2xl shadow-lg max-w-sm">
                    <EconomicoImg class="mx-auto mb-4 w-20 h-20" />
                    <h3 class="text-xl font-bold text-blue-600">Impacto económico</h3>
                    <p class="mt-2 text-gray-600">Entregamos asequibilidad económica a una nueva alternativa de transporte. Además, ahorras mientras te diriges al trabajo en auto.</p>
                </div>

                {/* Componente: Impacto Medioambiental */}
                <div class="bg-white p-6 rounded-2xl shadow-lg max-w-sm">
                    <AmbientalImg class="mx-auto mb-4 w-20 h-20" />
                    <h3 class="text-xl font-bold text-blue-600">Impacto medioambiental</h3>
                    <p class="mt-2 text-gray-600">Con Te Llevo App, habrán menos autos en la calle y aportaremos al cuidado del medioambiente, gracias a esta colaborativa forma de movilizarse.</p>
                </div>

            </div>
        </section>
    );
});