import { component$ } from '@builder.io/qwik';
import Chart from '~/assets/chart.png?jsx';

export default component$(() => {
    return (
        <section class="relative py-20 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
            {/* Efecto de conexión superior */}
            <div class="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-20"></div>
            
            <div class="container mx-auto px-6">
                <div class="flex flex-col md:flex-row items-stretch gap-10 md:gap-16">
                    {/* Columna de imagen con efectos consistentes */}
                    <div class="md:w-1/2 relative">
                        <div class="absolute -inset-4 bg-gradient-to-br from-cyan-100/40 to-blue-100/40 rounded-2xl opacity-50 -rotate-1"></div>
                        <div class="relative bg-white rounded-xl overflow-hidden border border-gray-200/80 shadow-xl transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 p-8 flex items-center justify-center h-full">
                            <Chart class="w-full h-auto object-contain max-h-[400px]" />
                        </div>
                    </div>

                    {/* Columna de texto mejorada */}
                    <div class="md:w-1/2 flex flex-col justify-center space-y-8">
                        <h3 class="text-4xl md:text-5xl font-extrabold leading-tight text-[#1054F1]">
                            Sé parte del ranking de empresas sostenibles
                        </h3>
                        
                        <p class="text-xl text-gray-600">
                            Ve tu aporte en la reducción de la huella de carbono mediante el carpooling.
                        </p>

                        <div class="space-y-6">
                            <h4 class="text-2xl font-semibold text-[#1054F1]">Beneficios del Ranking para Empresas:</h4>
                            <ul class="space-y-4">
                                {[
                                    {
                                        icon: 'fa-chart-line',
                                        text: 'Mejora tu visibilidad y reputación corporativa'
                                    },
                                    {
                                        icon: 'fa-smile',
                                        text: 'Aumenta la productividad con colaboradores menos estresados'
                                    },
                                    {
                                        icon: 'fa-building',
                                        text: 'Mayor visibilidad como empresa con responsabilidad social'
                                    },
                                    {
                                        icon: 'fa-handshake',
                                        text: 'Atrae clientes y talentos interesados en sostenibilidad'
                                    },
                                    {
                                        icon: 'fa-hand-holding-heart',
                                        text: 'Demuestra preocupación por la calidad de vida de tus colaboradores'
                                    }
                                ].map((item, index) => (
                                    <li key={index} class="flex items-start space-x-3">
                                        <div class="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full text-blue-600 flex-shrink-0 mt-1">
                                            <i class={`fas ${item.icon} text-sm`} />
                                        </div>
                                        <span class="text-gray-600">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Efecto de conexión inferior */}
            <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-20"></div>
        </section>
    );
});