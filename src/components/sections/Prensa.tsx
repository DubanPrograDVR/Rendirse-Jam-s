import { Arrow } from "@/components/ui/Arrow";
import { CtaLink } from "@/components/ui/CtaLink";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { stagger } from "@/components/ui/stagger";
import { type NotaPrensa, prensa, reservar } from "@/content";

const destacadas = prensa.filter((n) => !n.extra);
const otras = prensa.filter((n) => n.extra);

// Una aparición en prensa. Toda la fila es clickeable, pero el nombre accesible del link
// es solo el titular (patrón "stretched link").
function Fila({ n, i }: { n: NotaPrensa; i: number }) {
  return (
    <li
      data-reveal
      style={stagger(i % 3)}
      className="group relative grid gap-2 border-b border-carbon/15 py-6 md:grid-cols-12 md:gap-6 md:py-8"
    >
      <p className="t-label text-grafito tabular-nums md:col-span-2 md:pt-2">{n.fecha}</p>
      <div className="md:col-span-8">
        <p className="t-label">
          {n.medio} <span className="text-grafito">· {n.tipo}</span>
        </p>
        <h3 className="t-display mt-2 text-[clamp(1.6rem,3.2vw,2.6rem)] leading-[0.95]">
          <a
            href={n.url}
            target="_blank"
            rel="noopener"
            className="decoration-2 underline-offset-4 group-hover:underline after:absolute after:inset-0"
          >
            {n.titular}
          </a>
        </h3>
        <p className="mt-3 max-w-[60ch] text-grafito">{n.resumen}</p>
      </div>
      <span aria-hidden className="t-label inline-flex items-center gap-1.5 md:col-span-2 md:justify-self-end md:pt-2">
        Ver <Arrow out className="transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </li>
  );
}

// ¿Qué dicen de ellos? — sobre lona: papel de diario. Lo principal a la vista; el resto en un
// <details> nativo (sin JS) para no alargar la página en mobile.
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

      <ol className="mt-12 border-t-2 border-carbon md:mt-16">
        {destacadas.map((n, i) => (
          <Fila key={n.url} n={n} i={i} />
        ))}
      </ol>

      {otras.length > 0 && (
        <details className="group/mas mt-2">
          <summary className="t-label flex min-h-12 cursor-pointer list-none items-center gap-3 py-3 [&::-webkit-details-marker]:hidden">
            <span aria-hidden className="text-lg leading-none transition-transform duration-200 ease-out group-open/mas:rotate-45">+</span>
            Más apariciones ({otras.length})
          </summary>
          <ol className="border-t border-carbon/15">
            {otras.map((n, i) => (
              <Fila key={n.url} n={n} i={i} />
            ))}
          </ol>
        </details>
      )}

      <div className="mt-12 flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">
        <p className="max-w-[44ch] text-grafito">¿Eres periodista o medio? Escríbenos para entrevistas, fotos o datos del club.</p>
        <CtaLink href={reservar}>Contacto de prensa</CtaLink>
      </div>
    </section>
  );
}
