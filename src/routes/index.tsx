import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
//import AppStoreImg from '/src/assets/app-store.svg?jsx';
//import PlayStoreImg from '~/assets/play-store.svg?jsx';
import Hero from '~/components/tellevo/shared/hero';
import Features from '~/components/tellevo/shared/features';
import Beneficios from '~/components/tellevo/shared/beneficios';
import Inscripcion from "~/components/tellevo/empresa/inscripcion";
import Ranking from "~/components/tellevo/empresa/ranking";
import { YouTubeVideo } from '~/components/youtube/tellevo';
import InformeCo2Img from '~/assets/informe-C02-TeLlevo.png?jsx';
import { ListadoBeneficios } from "~/components/tellevo/empresa/secciones/listado-beneficios";
import BeneficiosImg from '~/assets/beneficios.png?jsx';

export default component$(() => {

  return (
    <>
      {/* Hero */}
      <Hero texto="Somos la aplicación que
              impulsa la sostenibilidad
              empresarial, facilitando el
              transporte seguro y
              asequible para tus
              colaboradores">
        <YouTubeVideo videoId="i9sYJT33eyA" />
      </Hero>

      {/* Features */}
      <Features
        titulo="Informe C02 para tu empresa"
        texto="Te Llevo ofrece un informe C02 detallado
                            y personalizado para cada cliente,
                            lo que le permite conocer
                            el impacto ambiental de sus actividades.
                            Demuestra tu compromixo con el medio ambiente y la
                            sostenibilidad empresarial."
      >
        <InformeCo2Img />
      </Features>

      {/* Benefits */}
      <Beneficios
        titulo="Beneficios de ser parte de la comunidad te llevo app"
        contenido={ListadoBeneficios}
      >
        <BeneficiosImg />
      </Beneficios>

      {/* Inscription */}
      <Inscripcion />

      {/* Ranking */}
      <Ranking />

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