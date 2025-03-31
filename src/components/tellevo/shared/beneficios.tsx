import { component$, Slot, JSX } from '@builder.io/qwik';

interface ComponentesProps {
    titulo: string;
    contenido?: () => JSX.Element;
}

export default component$((props: ComponentesProps) => {
       // Resolve the QRL to a component
    return (
        <section class="">
            <div class="container mx-auto">
                <div class="flex flex-col md:flex-row items-center justify-center">
                    <div class="md:w-1/2">
                        <h3 class="text-4xl font-bold text-center md:text-left">
                            {props.titulo}
                        </h3>
                        <div>
                            {props.contenido && <props.contenido />}
                        </div>
                    </div>
                    <div class="md:w-1/2 p-4">
                        <Slot />
                    </div>
                </div>
            </div>
        </section>
    );
});

