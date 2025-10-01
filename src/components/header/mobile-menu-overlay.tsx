import { component$ } from "@builder.io/qwik";
import { Signal } from "@builder.io/qwik";
import LogoImg from "~/assets/logo.png?jsx";
import { SwitchPersonasEmpresas } from "~/components/tellevo/widgets/switch-personas-empresas";

interface MobileMenuOverlayProps {
  navItems: Array<{ id: string; label: string }>;
  onNavigate: (target: string, itemId?: string) => void;
  isLoading: Signal<boolean>;
  activeView: Signal<"personas" | "empresas">;
  isMenuOpen: Signal<boolean>;
}

export const MobileMenuOverlay = component$<MobileMenuOverlayProps>((props) => {
  return (
    <>
      {props.isMenuOpen.value && (
        <div class="fixed inset-0 bg-black/50 z-50 md:hidden" onClick$={() => (props.isMenuOpen.value = false)}>
          <div class="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
            <div class="p-6">
              {/* Close Button */}
              <button
                class="absolute top-4 right-4 p-1 text-gray-500 hover:text-gray-700 transition-colors"
                onClick$={() => (props.isMenuOpen.value = false)}
                aria-label="Cerrar menú"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Switch Personas/Empresas en móvil - Mobile First */}
              <div class="mb-8 mt-8 flex justify-center">
                <SwitchPersonasEmpresas
                  isLoading={props.isLoading}
                  activeView={props.activeView}
                  isMenuOpen={props.isMenuOpen}
                  variant="mobile"
                />
              </div>

              {/* Logo */}
              <div class="mb-8 flex justify-center">
                <a href="/personas" onClick$={() => (props.isMenuOpen.value = false)}>
                  <LogoImg class="h-12 w-auto" />
                </a>
              </div>

              {/* Navegación móvil */}
              <nav class="mb-8">
                <ul class="space-y-4">
                  {props.navItems.map((item) => (
                    <li key={item.id}>
                      <button
                        class="w-full text-left py-3 px-4 text-lg font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                        onClick$={() => {
                          props.isMenuOpen.value = false;
                          props.onNavigate(item.id, item.id);
                        }}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>

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
    </>
  );
});
