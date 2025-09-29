import { component$, useSignal, $ } from '@builder.io/qwik';
import { enviarRegistro, type RegistroFormData } from '~/services/contacto.service';

export default component$(() => {
    const isLoading = useSignal(false);
    const isSuccess = useSignal(false);
    const errorMessage = useSignal('');
    
    const nombreCompleto = useSignal('');
    const email = useSignal('');
    const interes = useSignal('conductor');
    const motivo = useSignal('');

    const handleSubmit = $(async () => {
        if (isLoading.value) return;

        // Validación básica
        if (!nombreCompleto.value.trim() || !email.value.trim()) {
            errorMessage.value = 'Por favor completa los campos requeridos';
            return;
        }

        isLoading.value = true;
        errorMessage.value = '';

        try {
            const formData: RegistroFormData = {
                nombre: nombreCompleto.value,
                email: email.value,
                interes: interes.value,
                motivo: motivo.value
            };
            
            await enviarRegistro(formData);
            isSuccess.value = true;
            
            // Reset form
            nombreCompleto.value = '';
            email.value = '';
            interes.value = 'conductor';
            motivo.value = '';
        } catch (error) {
            errorMessage.value = error instanceof Error ? error.message : 'Error al enviar el registro';
        } finally {
            isLoading.value = false;
        }
    });

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
                    <form 
                        preventdefault:submit 
                        onSubmit$={handleSubmit} 
                        class="space-y-6"
                    >
                        {/* Nombre completo - campo único */}
                        <div>
                            <label for="nombre-completo" class="block text-sm font-medium text-gray-700 mb-1">¿Cuál es tu nombre, para dirigirnos correctamente hacia tí?</label>
                            <input 
                                type="text" 
                                id="nombre-completo" 
                                class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300"
                                placeholder="Tu nombre completo"
                                value={nombreCompleto.value}
                                onInput$={(e) => nombreCompleto.value = (e.target as HTMLInputElement).value}
                            />
                        </div>

                        {/* Email - full width */}
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300"
                                placeholder="tu@email.com"
                                value={email.value}
                                onInput$={(e) => email.value = (e.target as HTMLInputElement).value}
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
                                        checked={interes.value === 'conductor'}
                                        onChange$={() => interes.value = 'conductor'}
                                    />
                                    <span class="text-gray-700">Quiero compartir mi vehículo</span>
                                </label>
                                <label class="flex items-center space-x-3 cursor-pointer">
                                    <input 
                                        type="radio" 
                                        name="interes" 
                                        class="h-5 w-5 text-cyan-600 focus:ring-cyan-500 border-gray-300"
                                        checked={interes.value === 'pasajero'}
                                        onChange$={() => interes.value = 'pasajero'}
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
                                value={motivo.value}
                                onInput$={(e) => motivo.value = (e.target as HTMLTextAreaElement).value}
                            ></textarea>
                        </div>

                        {/* Mensaje de error */}
                        {errorMessage.value && (
                            <div class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl">
                                {errorMessage.value}
                            </div>
                        )}

                        {/* Botón de enviar */}
                        <div class="pt-4">
                            <button 
                                type="submit" 
                                disabled={isLoading.value}
                                class={`w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 ${
                                    isLoading.value 
                                        ? 'opacity-70 cursor-not-allowed' 
                                        : 'hover:from-cyan-400 hover:to-blue-400 hover:shadow-lg'
                                }`}
                            >
                                {isLoading.value ? (
                                    <div class="flex items-center justify-center">
                                        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Enviando...
                                    </div>
                                ) : (
                                    'Enviar registro'
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Efecto de conexión inferior */}
            <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-20"></div>

            {/* Modal de éxito */}
            {isSuccess.value && (
                <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div class="bg-white rounded-2xl shadow-xl max-w-md w-full p-8">
                        <div class="text-center">
                            <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                                <svg class="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <h3 class="mt-4 text-2xl font-bold text-gray-900">Gracias, nos contactaremos contigo.</h3>
                            <p class="mt-3 text-gray-600">
                                Hemos registrado tu solicitud y estamos muy contentos de poder conectar y contarte de nuestros beneficios para tí.
                            </p>
                            <div class="mt-6">
                                <button 
                                    onClick$={() => isSuccess.value = false}
                                    class="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
                                >
                                    Cerrar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
});
