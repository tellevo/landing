import { component$ } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';
import InformeCo2Img from '~/assets/gente.jpg?jsx';

export default component$(() => {
    const navigate = useNavigate();
    return (
        <section class="relative py-20 bg-gradient-to-br from-blue-50 to-cyan-50 overflow-hidden">
            {/* Efecto de conexión superior */}
            <div class="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-20"></div>
            
            <div class="container mx-auto px-6">
                <div class="flex flex-col md:flex-row items-stretch gap-10 md:gap-16">
                    {/* Columna de texto - alineada con el estilo de los otros componentes */}
                    <div class="md:w-1/2 flex flex-col justify-center space-y-8">
                        <h2 class="text-5xl font-extrabold text-gray-900 leading-tight">
                            <span class="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                                Inscribe a tu Empresa en TeLlevo App
                            </span>
                        </h2>
                        
                        <p class="text-lg text-gray-600">
                            Inscríbete en 
                            <span class="font-bold text-blue-600"> TeLlevo App </span> 
                            para que seas parte de la comunidad y te contactaremos de inmediato
                        </p>
                        
                        <button onClick$={() => navigate('/registro') } class="mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg w-fit">
                            Inscríbete ahora →
                        </button>
                    </div>

                    {/* Columna de imagen - con los mismos efectos que los otros componentes */}
                    <div class="md:w-1/2 relative">
                        <div class="absolute -inset-4 bg-gradient-to-br from-cyan-100/40 to-blue-100/40 rounded-2xl opacity-50 rotate-1"></div>
                        <div class="relative rounded-xl overflow-hidden border border-gray-200/80 shadow-xl transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                            <InformeCo2Img class="w-full h-auto object-cover" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Efecto de conexión inferior */}
            <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-20"></div>
        </section>
    );
});