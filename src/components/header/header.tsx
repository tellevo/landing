import { component$, useSignal, useVisibleTask$, $ } from "@builder.io/qwik";
import LogoImg from "~/assets/logo.png?jsx";
import { smoothScroll } from "./scroll";
import { useNavigate } from "@builder.io/qwik-city";
import { SwitchPersonasEmpresas } from "~/components/tellevo/widgets/switch-personas-empresas";
import { MobileMenuOverlay } from "./mobile-menu-overlay";

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
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ track }) => {
    track(() => isMenuOpen.value);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = isMenuOpen.value ? 'hidden' : 'auto';
    }
  });

  // Handle navigation for mobile menu
  const handleMobileNavigation = $(async (itemId: string) => {
    if (itemId === "pasajero" || itemId === "conductor") {
      await navigate("/personas");
      activeView.value = "personas";
      smoothScroll(itemId);
    }
    if (itemId === "registro") {
      navigate("/registro");
    }
    if (itemId === "nosotros") {
      navigate("/nosotros");
    }
    if (itemId === "simular") {
      navigate("/simular");
    }
  });

  return (
    <header class="font-sans bg-white shadow-sm sticky top-0 z-50 h-40">
      <div class="container mx-auto px-4 h-full">
        <div class="flex flex-col items-center">
          {/* Switch + Hamburger on same row */}
          <div class="flex items-center justify-center space-x-4">
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
          </div>

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

          {/* Logo */}
          <a href="/personas" class="flex items-center">
            <LogoImg class="h-16 w-auto md:max-w-[240px] lg:max-w-[240px]" />
          </a>

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

      {/* Mobile Menu Overlay Component */}
      <MobileMenuOverlay
        navItems={navItems}
        onNavigate={handleMobileNavigation}
        isLoading={isLoading}
        activeView={activeView}
        isMenuOpen={isMenuOpen}
      />
    </header>
  );
});
