import { component$ } from '@builder.io/qwik';
import { BotonNavegacion } from '~/components/tellevo/widgets/boton-navegacion';

export const TextoBoton = component$(() => {
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
                <BotonNavegacion
                    texto="Descarga la app"
                    destino='/'
                />
            </div>
        </section>
    );
});