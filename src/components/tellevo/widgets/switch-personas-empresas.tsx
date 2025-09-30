// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { component$, Signal, $ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import styles from "./switch-personas-empresas.module.css";

interface SwitchPersonasEmpresasProps {
  isLoading: Signal<boolean>;
  activeView: Signal<"personas" | "empresas">;
  isMenuOpen?: Signal<boolean>;
}

export const SwitchPersonasEmpresas = component$<SwitchPersonasEmpresasProps>((props) => {
  const navigate = useNavigate();

  // Handle keyboard navigation
  const handleKeyDown = $((event: KeyboardEvent, targetView: "personas" | "empresas") => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (props.activeView.value !== targetView) {
        navigateToView(targetView);
      }
    }
  });

  const navigateToView = $(async (targetView: "personas" | "empresas") => {
    if (props.isLoading.value) return;

    if (props.isMenuOpen) {
      props.isMenuOpen.value = false;
    }

    props.isLoading.value = true;
    try {
      await navigate(targetView === "personas" ? "/personas" : "/");
      props.activeView.value = targetView;
    } finally {
      props.isLoading.value = false;
    }
  });

  return (
    <div
      class={styles.switchContainer}
      role="tablist"
      aria-label="Cambiar vista entre Personas y Empresas"
    >
      <div class={styles.switchWrapper}>
        <div class={styles.switchButtons}>
          {/* Personas Button */}
          <button
            onClick$={() => navigateToView("personas")}
            onKeyDown$={(event) => handleKeyDown(event, "personas")}
            disabled={props.isLoading.value}
            aria-selected={props.activeView.value === "personas"}
            role="tab"
            aria-controls="personas-view"
            id="personas-tab"
            class={`${styles.buttonBase} ${
              props.activeView.value === "personas"
                ? styles.buttonActive
                : styles.buttonInactive
            }`}
          >
            {props.isLoading.value && props.activeView.value === "empresas" ? (
              <span class={styles.spinnerContainer} aria-hidden="true">
                <svg
                  class={styles.spinner}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
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
                <span class="sr-only">Cargando...</span>
              </span>
            ) : (
              "Personas"
            )}
          </button>

          {/* Empresas Button */}
          <button
            onClick$={() => navigateToView("empresas")}
            onKeyDown$={(event) => handleKeyDown(event, "empresas")}
            disabled={props.isLoading.value}
            aria-selected={props.activeView.value === "empresas"}
            role="tab"
            aria-controls="empresas-view"
            id="empresas-tab"
            class={`${styles.buttonBase} ${
              props.activeView.value === "empresas"
                ? styles.buttonActive
                : styles.buttonInactive
            }`}
          >
            {props.isLoading.value && props.activeView.value === "personas" ? (
              <span class={styles.spinnerContainer} aria-hidden="true">
                <svg
                  class={styles.spinner}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
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
                <span class="sr-only">Cargando...</span>
              </span>
            ) : (
              "Empresas"
            )}
          </button>
        </div>

        {/* Sliding indicator with professional styling */}
        <div
          class={`${styles.slidingIndicator} ${
            props.activeView.value === "personas" ? styles.active : ""
          }`}
          style={{
            left: props.activeView.value === "personas" ? "4px" : "calc(50% + 4px)",
            width: "calc(50% - 6px)"
          }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
});
