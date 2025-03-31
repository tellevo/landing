import { component$ } from '@builder.io/qwik';

export const ListadoBeneficios = component$(() => {
    return (
        <ul class="mt-6 space-y-4">
            <li class="flex items-start">
                <i class="fas fa-leaf pr-2"></i>
                <span>
                    Reducción de Costos de Transporte:
                    Al compartir viajes, se reducen los
                    gastos de combustible y mantenimiento de vehículos.</span>
            </li>
            <li class="flex items-start">
                <i class="fas fa-certificate pr-2" />
                <span>Impacto Ambiental Positivo:
                    Disminución de la huella de carbono de la empresa mediante
                    la reducción del número de vehículos en circulación.</span>
            </li>
            <li class="flex items-start">
                <i class="fas fa-hand-holding-heart pr-2" />
                <span>Mejora en la Calidad de Vida: Colaboradores más felices y
                    menos estresados al tener una solución de transporte eficiente.</span>
            </li>
            <li class="flex items-start ">
                <i class="fas fa-scroll pr-2" />
                <span>Informe de Sostenibilidad: Proveemos informes que reconocen la contribución
                    de la empresa a la reducción de emisiones y al transporte sostenible.</span>
            </li>
            <li class="flex items-start">
                <i class="fas fa-comments pr-2" />
                <span>Fortalecimiento de la Comunidad Interna: Promoción de un sentido de comunidad
                    entre los empleados a través del viaje compartido.</span>
            </li>
        </ul>
    );
});