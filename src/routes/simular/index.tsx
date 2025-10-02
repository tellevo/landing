import { component$, useSignal, $ } from "@builder.io/qwik";
import MapLoader from "~/components/maps/map-loader";
import AutocompleteInput from "~/components/maps/autocomplete-input";
import { SimulacionResultados } from "~/components/tellevo/simulacion-resultados";

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
              Calcula cuánto puedes ahorrar compartiendo tu viaje con nuestra
              herramienta
            </p>
          </div>

          <form
            class="space-y-6"
            preventdefault:submit
            onSubmit$={handleSubmit}
          >
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
                value={start}
              />
              <AutocompleteInput
                id="destino"
                label="Destino"
                placeholder="Ingresa tu destino final"
                minChars={3}
                value={end}
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

                <SimulacionResultados
                  routeInfo={routeInfo.value}
                  isLoading={isLoading.value}
                />
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
