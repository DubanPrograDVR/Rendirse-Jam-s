import { PrensaLista } from "@/components/client/PrensaLista";
import { CtaLink } from "@/components/ui/CtaLink";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { prensa, reservar } from "@/content";

// ¿Qué dicen de ellos? — sobre lona: papel de diario. Lo más reciente arriba; la lista se pagina
// para que la sección no se alargue a medida que llegan notas.
export function Prensa() {
  return (
    <section id="prensa" aria-labelledby="prensa-title" className="bg-lona px-gutter py-section text-carbon">
      <SectionLabel n="09" className="text-grafito">
        Prensa
      </SectionLabel>

      <div className="mt-10 grid gap-6 md:grid-cols-12 md:items-end">
        <h2 id="prensa-title" data-reveal className="t-display t-h2 md:col-span-7">
          En la prensa.
        </h2>
        <p className="max-w-[36ch] text-grafito md:col-span-4 md:col-start-9">
          Radio, televisión y diarios de la región: de la lucha por un lugar para entrenar a los títulos nacionales.
        </p>
      </div>

      <PrensaLista notas={prensa} />

      <div className="mt-12 flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">
        <p className="max-w-[44ch] text-grafito">¿Eres periodista o medio? Escríbenos para entrevistas, fotos o datos del club.</p>
        <CtaLink href={reservar}>Contacto de prensa</CtaLink>
      </div>
    </section>
  );
}
