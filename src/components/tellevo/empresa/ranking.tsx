import { component$ } from '@builder.io/qwik';
import Chart from '~/assets/chart.png?jsx';

export default component$(() => {
    return (
        <section class="bg-gray-100 font-sans">
            <div class="container mx-auto py-10 px-4">
                <div class="flex flex-col md:flex-row">
                    
                    <div class="md:w-1/2 mb-6 md:mb-0 mr-6">
                        <div class="bg-white p-6 rounded-lg shadow-lg">
                            
                            <div class="flex items-center justify-center">
                                <Chart/>
                            </div>
                        </div>
                    </div>
                    <div class="md:w-1/2">
                        <h3 class="text-3xl md:text-4xl font-bold leading-tight mb-6">
                            Se parte del ranking de empresas sostenibles y ve tu aporte en la reducción de la huella de carbono mediante el carpooling.
                        </h3>
                        <div class="space-y-4">
                            <h2 class="text-xl text-gray-800 mb-7">Beneficios del Ranking para Empresas:</h2>
                            <ul class="space-y-6">
                                <li class="flex items-start">
                                    <i class="fas fa-chart-line pr-2"/>
                                    <span>Mejora tu visibilidad y reputación de la empresa.</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-smile pr-2"/>
                                    <span>Productividad en la Empresa, colaboradores menos estresados.</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-building pr-2"/>
                                    <span>Mayor la visibilidad de tu empresa en el mercado como empresa con responsabilidad social.</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-handshake pr-2"/>
                                    <span>Atrae clientes y talentos interesados en sostenibilidad.</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-hand-holding-heart pr-2"/>
                                    <span>Mostrar tu preocupación por los colaboradores y su calidad de vida.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});