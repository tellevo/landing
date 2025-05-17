import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Hero from "~/components/tellevo/shared/hero";
import Features from "~/components/tellevo/shared/features";
import Beneficios from "~/components/tellevo/shared/beneficios";
import Inscripcion from "~/components/tellevo/empresa/inscripcion";
import Ranking from "~/components/tellevo/empresa/ranking";
import { YouTubeVideo } from "~/components/youtube/tellevo";
import InformeCo2Img from "~/assets/informe-C02-TeLlevo.png?jsx";
import { ListadoBeneficios } from "~/components/tellevo/empresa/secciones/listado-beneficios";
import BeneficiosImg from "~/assets/beneficios.png?jsx";
import Formulario_inscripcion from "~/components/tellevo/empresa/formulario_inscripcion";
import Empresas from "~/components/tellevo/shared/empresas";
import { FCarro } from "~/components/tellevo/widgets/fcarousel";
import Descarga_app from "~/components/tellevo/empresa/descarga_app";

export default component$(() => {
  return (
    <>
      {/* Hero */}
      <Hero
        texto="Somos la aplicación que
              impulsa la sostenibilidad
              empresarial, facilitando el
              transporte seguro y
              asequible para tus
              colaboradores"
      >
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
        <div class="relative inline-block custom-image-border">
          <InformeCo2Img class="w-full h-auto rounded-lg relative z-10" />
        </div>
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
      <Formulario_inscripcion />
      <Empresas >
        <FCarro />
      </Empresas>
      <section id="descarga">
      <Descarga_app></Descarga_app>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Tellevo - Viajes interurbanos seguros en Chile",
  meta: [
    {
      name: "description",
      content:
        "Conectamos pasajeros con conductores confiables para viajes interurbanos en Chile. Descarga la app y viaja seguro.",
    },
  ],
};
