import { component$, useSignal } from "@builder.io/qwik";
import MapLoader from "~/components/maps/map-loader";
import AutocompleteInput from "~/components/maps/autocomplete-input";

export default component$(() => {
  const email = useSignal("");
  const start = useSignal("");
  const end = useSignal("");
  const showMap = useSignal(false);
  const contactar = useSignal(false);
  
  // Reemplaza con tu API key de Google Maps
  const apiKey = "AIzaSyCrpHDFma0qoJrARLM_r_XVXvfU0cCKxEk";

  return (
    <section class="relative pb-20 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      {/* Efecto de conexión superior */}
      <div class="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-20"></div>

      <div class="container mx-auto px-6 max-w-4xl">
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200/80 p-8 md:p-12">
          {/* Encabezado */}
          <div class="text-center mb-10">
            <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              <span class="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Simula tu Ahorro como conductor
              </span>
            </h2>
            <p class="text-lg text-gray-600">
              Comparte un viaje cuando quieras
            </p>
          </div>

          {/* Formulario de simulación */}
          <form 
            class="space-y-6" 
            preventdefault:submit 
            onSubmit$={() => showMap.value = true}
          >
            {/* Email */}
            <div>
              <label
                for="email"
                class="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                bind:value={email}
                class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 text-cyan-600"
                placeholder="Ingresa email"
              />
            </div>

            {/* Origen y Destino con autocompletado */}
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AutocompleteInput
                id="origen"
                label="Inicio"
                placeholder="Ingresa tu origen"
                apiKey={apiKey}
                onPlaceSelected$={(place) => start.value = place.formatted_address || ""}
              />
              <AutocompleteInput
                id="destino"
                label="Final"
                placeholder="Ingresa tu destino"
                apiKey={apiKey}
                onPlaceSelected$={(place) => end.value = place.formatted_address || ""}
              />
            </div>

            {/* Mostrar mapa cuando se hace submit */}
            {showMap.value && (
              <div class="pt-4">
                <MapLoader apiKey={apiKey} start={start.value} end={end.value} />
              </div>
            )}

            {/* Mensaje con Checkbox */}
            <div class="pt-4 flex items-center justify-center space-x-2">
              <input
                type="checkbox"
                id="contactar-checkbox"
                bind:checked={contactar}
                class="h-5 w-5 text-cyan-600 rounded focus:ring-cyan-500 border-gray-300"
              />
              <label
                for="contactar-checkbox"
                class="text-gray-500 italic cursor-pointer"
              >
                Favor contactar cuando esté disponible la App.
              </label>
            </div>

            {/* Botones */}
            <div class="flex flex-col sm:flex-row justify-center gap-4 pt-6">
              <button
                type="submit"
                class="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg w-full sm:w-auto"
              >
                Simular Ahorro
              </button>
              
            </div>
          </form>
        </div>
      </div>

      {/* Efecto de conexión inferior */}
      <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-20"></div>
    </section>
  );
});