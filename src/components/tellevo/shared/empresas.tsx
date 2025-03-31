import { component$, Slot } from '@builder.io/qwik';


interface ComponentesProps {
    titulo: string;
}

export default component$((props: ComponentesProps) => {

    return (
        <section class="">
            <div class="container mx-auto">
                    <div class="">
                        <h3 class="text-4xl font-bold text-center md:text-center">
                            {props.titulo}
                        </h3>
                    </div>
                    <div class="p-4">
                        <Slot />
                    </div>
            </div>
        </section>
    );
});

