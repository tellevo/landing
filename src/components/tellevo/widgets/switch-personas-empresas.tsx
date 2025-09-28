import { component$, Signal } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";

interface SwitchPersonasEmpresasProps {
  isLoading: Signal<boolean>;
  activeView: Signal<"personas" | "empresas">;
  isMenuOpen?: Signal<boolean>;
}

export const SwitchPersonasEmpresas = component$<SwitchPersonasEmpresasProps>((props) => {
  const navigate = useNavigate();

  return (
    <div class="hidden md:flex mx-4">
      <div class="relative bg-gray-100 rounded-full p-1.5">
        <div class="flex relative z-10 gap-1">
          <button
            onClick$={async () => {
              if (props.isMenuOpen) {
                props.isMenuOpen.value = false;
              }
              props.isLoading.value = true;
              await navigate("/personas");
              props.activeView.value = "personas";
              props.isLoading.value = false;
            }}
            disabled={props.isLoading.value}
            class={`mobile-menu-switch-button flex-1 px-4 py-2 rounded-full text-sm font-medium relative z-20 transition-colors ${
              props.isLoading.value ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {props.isLoading.value && props.activeView.value === "empresas" ? (
              <span class="inline-flex items-center">
                <svg
                  class="animate-spin h-4 w-4 text-blue-600 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  />
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
              props.isLoading.value = true;
              await navigate("/");
              props.activeView.value = "empresas";
              props.isLoading.value = false;
            }}
            disabled={props.isLoading.value}
            class={`px-6 py-1 rounded-full text-sm font-medium relative z-20 transition-colors ${
              props.activeView.value === "empresas"
                ? "text-blue-600 bg-transparent"
                : "text-gray-500 bg-transparent"
            } ${props.isLoading.value ? "opacity-70 cursor-not-allowed" : ""}`}
          >
            {props.isLoading.value && props.activeView.value === "personas" ? (
              <span class="inline-flex items-center">
                <svg
                  class="animate-spin h-4 w-4 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  />
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

        {/* Indicador deslizante - Versión corregida */}
        <div
          class={`absolute top-1/2 -translate-y-1/2 h-8 bg-white shadow rounded-full transition-all duration-300 ${
            props.activeView.value === "personas"
              ? "left-3 w-24"  // 96px
              : "left-[7.5rem] w-24"  // 112px
          }`}
        />
      </div>
    </div>
  );
});
