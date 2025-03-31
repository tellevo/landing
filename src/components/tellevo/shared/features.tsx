import { component$, Slot } from '@builder.io/qwik';

interface ContenidoProps {
    titulo: string;     // Título del botón
    texto: string;      // Texto del botón
}

export default component$((props: ContenidoProps) => {
    return (
        <section class="py-20">
            <div class="container mx-auto px-4">
                <div class="grid md:grid-cols-2 gap-12">
                    <div>
                        <Slot/>
                    </div>
                    <div class="flex flex-col items-left">
                        <p class="text-3xl mb-3">{props.titulo}</p>
                        <p class="text-lg mb-8">
                            {props.texto}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
});
