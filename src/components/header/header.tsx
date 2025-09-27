import { component$, useSignal } from "@builder.io/qwik";
import LogoImg from "~/assets/logo.png?jsx";
import { smoothScroll } from "./scroll";
import { useNavigate } from "@builder.io/qwik-city";

export default component$(() => {
  const navItems = [
    { id: "nosotros", label: "Nosotros" },
    { id: "pasajero", label: "Pasajero" },
    { id: "conductor", label: "Conductor" },
    { id: "registro", label: "Regístrate" },
    { id: "simular", label: "Simular" },
  ];

  const navigate = useNavigate();
  const isLoading = useSignal(false);
  const activeView = useSignal<"personas" | "empresas">("personas");

  return (
    <header class="font-sans bg-white shadow-sm sticky top-0 z-50 h-40">
      <div class="container mx-auto px-4 h-full">
        <div class="flex items-center justify-between">
          {/* Logo */}
          <a href="/personas" class="flex items-center">
            <LogoImg class="h-16 w-auto" />
          </a>

          {/* Navegación principal */}
          <nav class="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick$={async () => {
                  if (item.id === "pasajero" || item.id === "conductor") {
                    await navigate("/personas");
                    activeView.value = "personas";
                    smoothScroll(item.id);
                  }
                  if(item.id === "registro"){
                    navigate("/registro");
                  }
                  if(item.id === "nosotros"){
                    navigate("/nosotros");
                  }
                  if(item.id === "simular"){
                    navigate("/simular");
                  }
                }}
                class="text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 text-sm font-medium bg-white"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Switch deslizante Personas/Empresas CORREGIDO */}
          <div class="hidden md:flex mx-4">
            <div class="relative bg-gray-100 rounded-full p-1.5">
              <div class="flex relative z-10 gap-1">
                <button
                  onClick$={async () => {
                    isLoading.value = true;
                    await navigate("/personas");
                    activeView.value = "personas";
                    isLoading.value = false;
                  }}
                  disabled={isLoading.value}
                  class={`px-6 py-1 rounded-full text-sm font-medium relative z-20 transition-colors ${
                    activeView.value === "personas"
                      ? "text-blue-600 bg-transparent"
                      : "text-gray-500 bg-transparent"
                  } ${isLoading.value ? "opacity-70 cursor-not-allowed" : ""}`}
                >
                  {isLoading.value && activeView.value === "empresas" ? (
                    <span class="inline-flex items-center">
                      <svg
                        class="animate-spin h-4 w-4 text-blue-600 "
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        {/* Icono de spinner */}
                      </svg>
                    </span>
                  ) : (
                    "Personas"
                  )}
                </button>
                
                <button
                  onClick$={async () => {
                    isLoading.value = true;
                    await navigate("/");
                    activeView.value = "empresas";
                    isLoading.value = false;
                  }}
                  disabled={isLoading.value}
                  class={`px-6 py-1 rounded-full text-sm font-medium relative z-20 transition-colors ${
                    activeView.value === "empresas"
                      ? "text-blue-600 bg-transparent"
                      : "text-gray-500 bg-transparent"
                  } ${isLoading.value ? "opacity-70 cursor-not-allowed" : ""}`}
                >
                  {isLoading.value && activeView.value === "personas" ? (
                    <span class="inline-flex items-center">
                      <svg
                        class="animate-spin h-4 w-4 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        {/* Icono de spinner */}
                      </svg>
                    </span>
                  ) : (
                    "Empresas"
                  )}
                </button>
              </div>
              
              {/* Indicador deslizante - Versión corregida */}
              <div
                class={`absolute top-1/2 -translate-y-1/2 h-8 bg-white shadow rounded-full transition-all duration-300 ${
                  activeView.value === "personas"
                    ? "left-3 w-24"  // 96px
                    : "left-[7.5rem] w-24"  // 112px
                }`}
              />
            </div>
          </div>

          {/* Botones sociales */}
          <div class="flex items-center space-x-4">
            <div class="flex space-x-3">
              <i class="fab fa-facebook text-blue-600 hover:text-blue-800 cursor-pointer text-lg" />
              <i class="fab fa-instagram text-red-500 hover:text-blue-600 cursor-pointer text-lg" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
});