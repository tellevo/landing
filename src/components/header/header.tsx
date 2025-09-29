import { component$, useSignal, useVisibleTask$, $ } from "@builder.io/qwik";
import LogoImg from "~/assets/logo.png?jsx";
import { smoothScroll } from "./scroll";
import { useNavigate } from "@builder.io/qwik-city";
import { SwitchPersonasEmpresas } from "~/components/tellevo/widgets/switch-personas-empresas";

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
  const isMenuOpen = useSignal(false);

  // Manejar scroll del body cuando el menú está abierto
  useVisibleTask$(({ track }) => {
    track(() => isMenuOpen.value);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = isMenuOpen.value ? 'hidden' : 'auto';
    }
  });

  return (
    <header class="font-sans bg-white shadow-sm sticky top-0 z-50 h-40">
      <div class="container mx-auto px-4 h-full">
        <div class="flex items-center justify-between">
          {/* Logo */}
          <a href="/personas" class="flex items-center">
            <LogoImg class="h-16 w-auto md:max-w-[240px] lg:max-w-[240px]" />
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

          <SwitchPersonasEmpresas
            isLoading={isLoading}
            activeView={activeView}
            isMenuOpen={isMenuOpen}
          />

          {/* Hamburger Menu Button - Móvil */}
          <button
            class="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
            onClick$={() => (isMenuOpen.value = true)}
            aria-label="Abrir menú"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Botones sociales */}
          <div class="hidden md:flex items-center space-x-4">
            <div class="flex space-x-3">
              <a href="https://www.facebook.com/tellevoapp.cl" target="_blank" rel="noopener" aria-label="Facebook" class="hover:opacity-90">
                <i class="fab fa-facebook text-blue-600 hover:text-blue-800 cursor-pointer text-5xl" />
              </a>
              <a href="https://www.instagram.com/tellevoapp.cl/" target="_blank" rel="noopener" aria-label="Instagram" class="hover:opacity-90">
                <i class="fab fa-instagram text-red-500 hover:text-blue-600 cursor-pointer text-5xl" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen.value && (
        <div class="fixed inset-0 bg-black/50 z-50 md:hidden" onClick$={() => (isMenuOpen.value = false)}>
          <div class="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
            <div class="p-6">
              {/* Close Button */}
              <button
                class="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 transition-colors"
                onClick$={() => (isMenuOpen.value = false)}
                aria-label="Cerrar menú"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Logo */}
              <div class="mb-8 mt-8">
                <a href="/personas" onClick$={() => (isMenuOpen.value = false)}>
                  <LogoImg class="h-12 w-auto mx-auto" />
                </a>
              </div>

              {/* Navegación móvil */}
              <nav class="mb-8">
                <ul class="space-y-4">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <button
                        class="w-full text-left py-3 px-4 text-lg font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                        onClick$={async () => {
                          isMenuOpen.value = false;
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
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Switch Personas/Empresas en móvil */}
              <div class="mb-8">
                <div class="relative bg-white rounded-full p-1.5 mx-auto max-w-xs">
                  <div class="flex relative z-10 gap-1">
                    <button
                      onClick$={async () => {
                        isMenuOpen.value = false;
                        isLoading.value = true;
                        await navigate("/personas");
                        activeView.value = "personas";
                        isLoading.value = false;
                      }}
                      disabled={isLoading.value}
                      class={`mobile-menu-switch-button flex-1 px-4 py-2 rounded-full text-sm font-medium relative z-20 transition-colors ${
                        isLoading.value ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      {isLoading.value && activeView.value === "empresas" ? (
                        <span class="inline-flex items-center">
                          <svg
                            class="animate-spin h-4 w-4 text-blue-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              class="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                        </span>
                      ) : (
                        "Personas"
                      )}
                    </button>

                    <button
                      onClick$={async () => {
                        isMenuOpen.value = false;
                        isLoading.value = true;
                        await navigate("/");
                        activeView.value = "empresas";
                        isLoading.value = false;
                      }}
                      disabled={isLoading.value}
                      class={`mobile-menu-switch-button flex-1 px-4 py-2 rounded-full text-sm font-medium relative z-20 transition-colors ${
                        isLoading.value ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      {isLoading.value && activeView.value === "personas" ? (
                        <span class="inline-flex items-center">
                          <svg
                            class="animate-spin h-4 w-4 text-blue-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              class="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                        </span>
                      ) : (
                        "Empresas"
                      )}
                    </button>
                  </div>


                </div>
              </div>

              {/* Iconos sociales */}
              <div class="flex justify-center space-x-6">
                <a href="https://www.facebook.com/tellevoapp.cl" target="_blank" rel="noopener" aria-label="Facebook" class="hover:opacity-90">
                  <i class="fab fa-facebook text-blue-600 hover:text-blue-800 cursor-pointer text-6xl" />
                </a>
                <a href="https://www.instagram.com/tellevoapp.cl/" target="_blank" rel="noopener" aria-label="Instagram" class="hover:opacity-90">
                  <i class="fab fa-instagram text-red-500 hover:text-blue-600 cursor-pointer text-6xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
});
