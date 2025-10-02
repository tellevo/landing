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
              <h4 class="text-lg font-semibold text-[#1054F1] mb-4">
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
                  <>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div class="bg-white p-4 rounded-lg shadow-sm border text-center">
                        <div class="flex items-center justify-center mb-2">
                          <svg
                            class="w-6 h-6 text-blue-500 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <h5 class="font-semibold text-gray-800">
                            1 Pasajero
                          </h5>
                        </div>
                        <p class="text-2xl font-bold text-green-600">
                          $ {formatNumber(Math.round(ahorro_mes_1))}
                        </p>
                        <p class="text-sm text-gray-500">al mes</p>
                      </div>
                      <div class="bg-white p-4 rounded-lg shadow-sm border text-center">
                        <div class="flex items-center justify-center mb-2">
                          <svg
                            class="w-6 h-6 text-blue-500 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"></path>
                          </svg>
                          <h5 class="font-semibold text-gray-800">
                            2 Pasajeros
                          </h5>
                        </div>
                        <p class="text-2xl font-bold text-green-600">
                          $ {formatNumber(Math.round(ahorro_mes_2))}
                        </p>
                        <p class="text-sm text-gray-500">al mes</p>
                      </div>
                      <div class="bg-white p-4 rounded-lg shadow-sm border text-center">
                        <div class="flex items-center justify-center mb-2">
                          <svg
                            class="w-6 h-6 text-blue-500 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                          </svg>
                          <h5 class="font-semibold text-gray-800">
                            3 Pasajeros
                          </h5>
                        </div>
                        <p class="text-2xl font-bold text-green-600">
                          $ {formatNumber(Math.round(ahorro_mes_3))}
                        </p>
                        <p class="text-sm text-gray-500">al mes</p>
                      </div>
                    </div>
                    <p class="text-sm text-gray-500 text-center">
                      [1] Valores mensualizados considerando 20 viajes al mes
                      ida y vuelta. Ahorro por viaje 1 pasajero ${" "}
                      {formatNumber(Math.round(tripValue))}
                    </p>
                  </>
                );
              })()}
            </div>
          </div>
        )}
      </>
    );
  },
);
