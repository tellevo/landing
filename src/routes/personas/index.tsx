import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Hero from '~/components/tellevo/shared/hero';
import Features from '~/components/tellevo/shared/features';
import TeLlevoRecorridoImg from '~/assets/personas/tellevo-recorrido.png?jsx';
import { YouTubeVideo } from '~/components/youtube/tellevo';
import Beneficios from '~/components/tellevo/shared/beneficios';
import { TextoBoton } from '~/components/tellevo/persona/secciones/texto-boton'
import AutomovilImg from '~/assets/personas/automovil.jpg?jsx';
import Opciones from "~/components/tellevo/persona/opciones";
import Empresas from "~/components/tellevo/shared/empresas";
// import  { Carrito }  from '~/components/tellevo/widgets/carousel';
import { FCarro } from '~/components/tellevo/widgets/fcarousel';

export default component$(() => {

    return (
      <>
        {/* Hero Section */}
        <Hero texto="
        Somos la aplicación enfocada en que llegues al
        trabajo o casa seguro a un precio asequible
        ">
            <YouTubeVideo videoId="i9sYJT33eyA" />
            </Hero>
  
        {/* Features Section */}
        <Features 
          titulo="Únete a esta nueva alternativa de viaje colaborativo no comercial"
          texto="Si vas al trabajo, casa u otro lugar, podrás compartir tu automóvil con personas inscritas a TE LLEVO que realicen un trayecto similar. De esta manera compartes los gastos asociados en cada viaje que realices."
        >
         <TeLlevoRecorridoImg/>
        </Features>
       
        {/* Benefits */}

        <Beneficios
        titulo="Viaja con personas que van a trabajar en su auto y listo."
        contenido={TextoBoton}
        >
          <AutomovilImg />
        </Beneficios>

        { /* Opciones */ }
        <Opciones/>

        { /* Carousel de empresas */ }
        <Empresas
        titulo="Apoyados por:"
        >
          <FCarro />
        </Empresas>

      </>
    );
  });
  
  export const head: DocumentHead = {
    title: 'Tellevo - Viajes interurbanos seguros en Chile',
    meta: [
      {
        name: 'description',
        content: 'Conectamos pasajeros con conductores confiables para viajes interurbanos en Chile. Descarga la app y viaja seguro.',
      },
    ],
  };