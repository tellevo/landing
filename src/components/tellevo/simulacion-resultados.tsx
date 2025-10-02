import { component$ } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";

const formatNumber = (value: number) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

// Fórmulas de cálculo de tarifas
const calculateDriverRate = (km: number) => {
  if (km < 7) return 846;
  if (km < 8) return 966;
  if (km < 9) return 1080;
  if (km < 10) return 1188;
  if (km < 11) return 1290;
  if (km < 12) return 1386;
  if (km < 13) return 1476;
  if (km < 14) return 1560;
  if (km < 15) return 1638;
  if (km < 16) return 1710;
  if (km < 17) return 1776;
  if (km < 18) return 1836;
  if (km < 19) return 1890;
  if (km < 20) return 1938;
  if (km < 21) return 1980;
  if (km < 22) return 2016;
  if (km < 23) return 2046;
  if (km < 24) return 2070;
  if (km < 25) return 2088;
  if (km < 26) return 2100;
  if (km < 27) return 2106;
  if (km < 28) return 2106;
  if (km < 29) return 2100;
  if (km < 30) return 2088;
  if (km < 35) return 2040;
  if (km < 40) return 2340;
  if (km < 45) return 2640;
  if (km < 50) return 2940;
  return km * 150 * 0.4;
};

interface SimulacionResultadosProps {
  routeInfo: {
    startAddress: string;
    endAddress: string;
    distance: string;
    distanceValue: number;
  } | null;
  isLoading: boolean;
}

export const SimulacionResultados = component$<SimulacionResultadosProps>(
  ({ routeInfo, isLoading }) => {
    return (
      <>
        {routeInfo && !isLoading && (
          <div class="p-6 bg-gray-50 rounded-xl border border-gray-200">
            <h3 class="text-xl font-semibold text-[#1054F1] mb-4">
              Resultados de tu Simulación
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div>
                <p class="text-sm text-gray-500 font-medium">Origen</p>
                <p class="text-gray-800">{routeInfo.startAddress}</p>
              </div>
              <div>
                <p class="text-sm text-gray-500 font-medium">Destino</p>
                <p class="text-gray-800">{routeInfo.endAddress}</p>
              </div>
              <div>
                <p class="text-sm text-gray-500 font-medium">Distancia</p>
                <p class="text-gray-800">{routeInfo.distance}</p>
              </div>
            </div>
            <div class="border-t pt-4">
              <h4 class="text-lg font-semibold text-[#1054F1] mb-3">
                Tarifa Estimada
              </h4>
              {/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */}
              {(() => {
                const km = routeInfo!.distanceValue / 1000;
                const tripValue = calculateDriverRate(km);
                return (
                  <div class="mb-3">
                    <p class="text-2xl text-cyan-600 font-bold">
                      ${formatNumber(Math.round(tripValue))}
                    </p>
                    <p class="text-sm text-gray-500 mt-1">
                      Precio estimado para {km.toFixed(1)} km
                    </p>
                  </div>
                );
              })()}
            </div>
            <div class="border-t pt-4">
              <h4 class="text-lg font-semibold text-[#1054F1] mb-3">
                Tu Ahorro es:
              </h4>
              {(() => {
                const dias = 5;
                const viajesIdaVuelta = 2;
                const semanas = 4;
                const km = routeInfo!.distanceValue / 1000;
                const tripValue = calculateDriverRate(km);
                const ahorro_mes_1 =
                  tripValue * dias * viajesIdaVuelta * semanas;
                const ahorro_mes_2 = ahorro_mes_1 * 2;
                const ahorro_mes_3 = ahorro_mes_1 * 3;
                return (
                  <div>
                    <p>
                      Por 1 pasajero: $ {formatNumber(Math.round(ahorro_mes_1))}{" "}
                      al mes [1].
                    </p>
                    <p>
                      Por 2 pasajeros: ${" "}
                      {formatNumber(Math.round(ahorro_mes_2))} al mes [1].
                    </p>
                    <p>
                      Por 3 pasajeros: ${" "}
                      {formatNumber(Math.round(ahorro_mes_3))} al mes [1].
                    </p>
                    <p class="text-sm text-gray-500 mt-1">
                      [1] Valores mensualizados considerando 20 viajes al mes
                      ida y vuelta. Ahorro por viaje 1 pasajero ${" "}
                      {formatNumber(Math.round(tripValue))}
                    </p>
                  </div>
                );
              })()}
            </div>
          </div>
        )}
      </>
    );
  },
);
