import { component$, useSignal, $ } from "@builder.io/qwik";

import MapLoader from "~/components/maps/map-loader";
import AutocompleteInput from "~/components/maps/autocomplete-input";

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

export default component$(() => {
  const start = useSignal("");
  const end = useSignal("");
  const showMap = useSignal(false);
  const isLoading = useSignal(false);
  const routeInfo = useSignal<{
    startAddress: string;
    endAddress: string;
    distance: string;
    distanceValue: number;
  } | null>(null);
  const error = useSignal("");

  const handleRouteCalculated = $((response: google.maps.DirectionsResult) => {
    if (response.routes[0]?.legs[0]) {
      const leg = response.routes[0].legs[0];
      routeInfo.value = {
        startAddress: leg.start_address,
        endAddress: leg.end_address,
        distance: leg.distance?.text || "0 km",
        distanceValue: leg.distance?.value || 0,
      };
    }
    isLoading.value = false;
  });

  const handleSubmit = $(async () => {
    if (!start.value || !end.value) {
      error.value = "Por favor, completa los campos de origen y destino";
      return;
    }
    error.value = "";
    isLoading.value = true;
    showMap.value = true;
  });

  return (
    <section class="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 py-4 px-4 sm:px-6 lg:px-8">
      <div class="container mx-auto max-w-5xl">
        <div class="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12">
          <div class="text-center mb-8">
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              <span class="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Simula tu Ahorro como Conductor
              </span>
            </h2>
            <p class="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Calcula cuánto puedes ahorrar compartiendo tu viaje con nuestra herramienta
            </p>
          </div>

          <form class="space-y-6" preventdefault:submit onSubmit$={handleSubmit}>
            {error.value && (
              <div class="p-4 bg-red-50 text-red-700 rounded-xl border border-red-200">
                {error.value}
              </div>
            )}

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <AutocompleteInput
                id="origen"
                label="Origen"
                placeholder="Ingresa tu punto de partida"
                minChars={3}
                onPlaceSelected$={(place) => (start.value = place.formatted_address || "")}
              />
              <AutocompleteInput
                id="destino"
                label="Destino"
                placeholder="Ingresa tu destino final"
                minChars={3}
                onPlaceSelected$={(place) => (end.value = place.formatted_address || "")}
              />
            </div>
            {showMap.value && (
              <div class="space-y-6">
                <div class="relative">
                  {isLoading.value && (
                    <div class="absolute inset-0 bg-gray-100 bg-opacity-50 flex items-center justify-center rounded-xl">
                      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-600"></div>
                    </div>
                  )}
                  <MapLoader
                    start={start.value}
                    end={end.value}
                    onRouteCalculated$={handleRouteCalculated}
                  />
                </div>

                {routeInfo.value && !isLoading.value && (
                  <div class="p-6 bg-gray-50 rounded-xl border border-gray-200">
                    <h3 class="text-xl font-semibold text-[#1054F1] mb-4">Resultados de tu Simulación</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                      <div>
                        <p class="text-sm text-gray-500 font-medium">Origen</p>
                        <p class="text-gray-800">{routeInfo.value.startAddress}</p>
                      </div>
                      <div>
                        <p class="text-sm text-gray-500 font-medium">Destino</p>
                        <p class="text-gray-800">{routeInfo.value.endAddress}</p>
                      </div>
                      <div>
                        <p class="text-sm text-gray-500 font-medium">Distancia</p>
                        <p class="text-gray-800">{routeInfo.value.distance}</p>
                      </div>
                    </div>
                    <div class="border-t pt-4">
                      <h4 class="text-lg font-semibold text-[#1054F1] mb-3">Tarifa Estimada</h4>
                      {[1].map((passengers) => {
                        const km = routeInfo.value!.distanceValue / 1000;
                        const tripValue = calculateDriverRate(km);
                        return (
                          <div key={passengers} class="mb-3">
                            <p class="text-2xl text-cyan-600 font-bold">
                              ${formatNumber(Math.round(tripValue))}
                            </p>
                            <p class="text-sm text-gray-500 mt-1">
                              Precio estimado para {km.toFixed(1)} km
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}

            <div class="flex flex-col sm:flex-row justify-center gap-4 pt-6">
              <button
                type="submit"
                disabled={isLoading.value}
                class="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
              >
                {isLoading.value ? "Calculando..." : "Calcular Tarifa"}
              </button>
             
            </div>
          </form>
        </div>
      </div>
    </section>
  );
});