import { component$ } from '@builder.io/qwik';
import InformeCo2Img from '~/assets/gente.jpg?jsx';

export default component$(() => {
    return (
        <section class="">
            <div class="bg-blue-100 flex flex-col md:flex-row items-center justify-center">
                <div class="md:w-1/2 text-center md:text-left p-6">
                    <h2 class="text-3xl font-bold text-blue-600">Inscribe a tu Empresa en TeLlevo App</h2>
                    <p class="mt-4 text-blue-600">
                        Inscríbete en 
                        <span class="font-bold"> TeLlevo App </span> 
                        para que seas parte de la comunidad y te contactaremos de inmediato
                    </p>
                    <button class="mt-6 bg-white text-blue-600 font-semibold py-3 px-6 rounded-full shadow-md hover:bg-blue-50">
                        Inscríbete ahora →
                    </button>
                </div>
                <div class="md:w-1/2 p-6">
                    <InformeCo2Img class="
                    w-1/7
                    shadow-lg 
                    h-full 
                    rounded-lg  
                    h-auto
                    " />
                </div>
            </div>
        </section>
    );
});