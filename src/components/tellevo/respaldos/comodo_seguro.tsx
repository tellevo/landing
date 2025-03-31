import { component$ } from '@builder.io/qwik';
import { YouTubeVideo } from '~/components/youtube/tellevo';

export default component$(() => {
    return (
        <section class="bg-gradient-to-b from-blue-600 to-blue-800 text-white">
<div class="container mx-auto px-4 py-20">
          <div class="flex flex-col md:flex-row items-center justify-between">
            <div class="md:w-1/2 mb-10 md:mb-0">
              <h1 class="text-5xl font-bold mb-6">Viaja seguro y cómodo</h1>
              <p class="text-xl mb-8">Conectamos pasajeros con conductores confiables para viajes interurbanos en Chile</p>
              <div class="flex gap-4">
                <a href="#" class="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50">
                  Descargar App
                </a>
                <a href="#" class="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600">
                  Ser Conductor
                </a>
              </div>
            </div>
            <div class="md:w-1/2">
              <YouTubeVideo videoId="i9sYJT33eyA" />
            </div>
          </div>
        </div>
        </section>
         );
        });
        