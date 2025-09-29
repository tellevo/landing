import { component$ } from '@builder.io/qwik';
import Logo from '~/assets/tellevo-app-300x90.png?jsx';

export default component$(() => {
  return (
    <footer class="bg-[#1054F1] text-white">
      <div class="container mx-auto px-4 py-16">
        {/* Logo + Marca */}
        <div class="flex flex-col items-center text-center gap-3">
          <div class="flex items-center justify-center mb-2">
            <Logo class="h-20 w-auto" />
          </div>

          {/* Navegación */}
          <nav class="mt-6">
            <ul class="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm md:text-base">
              <li><a href="/nosotros" target="_blank" rel="noopener" class="text-white hover:underline">Nosotros</a></li>
              <li><a href="/personas#pasajero" target="_blank" rel="noopener" class="text-white hover:underline">Pasajero</a></li>
              <li><a href="/personas#conductor" target="_blank" rel="noopener" class="text-white hover:underline">Conductor</a></li>
              <li><a href="/registro" target="_blank" rel="noopener" class="text-white hover:underline">Regístrate</a></li>
              <li><a href="/simular" target="_blank" rel="noopener" class="text-white hover:underline">Simular</a></li>
            </ul>
          </nav>

          {/* Descripción y contacto */}
          <div class="mt-6 text-center text-sm opacity-90 space-y-1">
            <p>Tellevo App es una Aplicación que pertenece a Sociedad de Inversiones DRJ Spa</p>
            <p>Correo <a href="mailto:contacto@tellevoapp.cl" class="text-white hover:underline hover:opacity-90">contacto@tellevoapp.cl</a></p>
          </div>

          {/* Redes sociales */}
          <div class="mt-6 flex items-center gap-6">
            <a href="https://www.facebook.com/tellevoapp.cl" target="_blank" rel="noopener" aria-label="Facebook" class="hover:opacity-90">
              <i class="fab fa-facebook text-2xl"></i>
            </a>
            <a href="https://www.instagram.com/tellevoapp.cl/" target="_blank" rel="noopener" aria-label="Instagram" class="hover:opacity-90">
              <i class="fab fa-instagram text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
});
