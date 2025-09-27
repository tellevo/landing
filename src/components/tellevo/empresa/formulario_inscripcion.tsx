import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section class=" min-h-screen flex items-center"> {/* Fondo azul y centrado vertical */}
    <div class="container mx-auto p-4"> {/* Contenedor con ancho máximo y padding */}
      <div class="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto"> {/* Tarjeta blanca */}
        {/* Título */}
        <h1 class="text-3xl md:text-4xl font-bold text-center text-[#1054F1] mb-8">
          Inscribe a tu empresa en TeLlevo App
        </h1>

        {/* 👇 Primera Fila: Nombre + Apellido */}
        <div class="flex flex-col md:flex-row gap-4 mb-6">
          <div class="flex-1">
            <label class="block text-sm font-medium text-gray-700 mb-1">NOMBRE</label>
            <input type="text" class="w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div class="flex-1">
            <label class="block text-sm font-medium text-gray-700 mb-1">APELLIDO</label>
            <input type="text" class="w-full p-2 border border-gray-300 rounded-md" />
          </div>
        </div>

        {/* 👇 Resto del formulario */}
        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-700 mb-1">NOMBRE EMPRESA</label>
          <input type="text" class="w-full p-2 border border-gray-300 rounded-md" />
        </div>

        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-700 mb-1">CORREO</label>
          <input type="email" class="w-full p-2 border border-gray-300 rounded-md" />
        </div>

        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-700 mb-1">NÚMERO DE CONTACTO</label>
          <input type="tel" class="w-full p-2 border border-gray-300 rounded-md" />
        </div>

        <button class="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700">
          Enviar
        </button>
      </div>
    </div>
  </section>
  );
});
