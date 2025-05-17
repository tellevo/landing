import { component$ } from '@builder.io/qwik';

export default component$(() => {
    return (
        <section class="relative bg-gradient-to-br from-blue-50 to-cyan-50 overflow-hidden">
            {/* Efecto de conexión superior */}
            <div class="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-20"></div>
            
            <div class="container mx-auto px-6 max-w-8xl">
                <div class="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200/80 p-8 md:p-12">
                    {/* Encabezado */}
                    <div class="text-center mb-10">
                        <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                            <span class="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                                ¡Regístrate y recibe beneficios exclusivos!
                            </span>
                        </h2>
                        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                            Serás el primero/a en utilizar nuestra app, además recibirás viajes gratuitos para que nos cuentes tu experiencia.
                        </p>
                    </div>

                    {/* Formulario */}
                    <form class="space-y-6">
                        {/* Nombre y Apellido - 2 columnas en desktop */}
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label for="nombre" class="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                                <input 
                                    type="text" 
                                    id="nombre" 
                                    class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300"
                                    placeholder="Tu nombre"
                                />
                            </div>
                            <div>
                                <label for="apellido" class="block text-sm font-medium text-gray-700 mb-1">Apellido</label>
                                <input 
                                    type="text" 
                                    id="apellido" 
                                    class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300"
                                    placeholder="Tu apellido"
                                />
                            </div>
                        </div>

                        {/* Email - full width */}
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300"
                                placeholder="tu@email.com"
                            />
                        </div>

                        {/* Opciones de interés - radio buttons */}
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-3">Selecciona la opción que te interesa:</label>
                            <div class="space-y-3">
                                <label class="flex items-center space-x-3 cursor-pointer">
                                    <input 
                                        type="radio" 
                                        name="interes" 
                                        class="h-5 w-5 text-cyan-600 focus:ring-cyan-500 border-gray-300"
                                        checked
                                    />
                                    <span class="text-gray-700">Quiero compartir mi vehículo</span>
                                </label>
                                <label class="flex items-center space-x-3 cursor-pointer">
                                    <input 
                                        type="radio" 
                                        name="interes" 
                                        class="h-5 w-5 text-cyan-600 focus:ring-cyan-500 border-gray-300"
                                    />
                                    <span class="text-gray-700">Quiero encontrar viajes para compartir</span>
                                </label>
                            </div>
                        </div>

                        {/* Textarea opcional */}
                        <div>
                            <label for="motivo" class="block text-sm font-medium text-gray-700 mb-1">
                                ¿Por qué te interesa utilizar la app? <span class="text-gray-500">(Opcional)</span>
                            </label>
                            <textarea 
                                id="motivo" 
                                rows={4} 
                                class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300"
                                placeholder="Cuéntanos qué esperas de la aplicación..."
                            ></textarea>
                        </div>

                        {/* Botón de enviar */}
                        <div class="pt-4">
                            <button 
                                type="submit" 
                                class="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                            >
                                Enviar registro
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