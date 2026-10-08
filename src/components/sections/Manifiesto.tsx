import { SectionLabel } from "@/components/ui/SectionLabel";
import { stagger } from "@/components/ui/stagger";
import { manifiesto } from "@/content";

// ¿En qué creen? — solo tipografía sobre lona. Las frases son del propio club.
export function Manifiesto() {
  return (
    <section id="manifiesto" aria-labelledby="manifiesto-title" className="bg-lona px-gutter py-section text-carbon">
      <SectionLabel n="02" className="text-grafito">
        Manifiesto
      </SectionLabel>

      <h2 id="manifiesto-title" className="t-display mt-10 text-[clamp(3.25rem,15vw,10.5rem)]">
        <span data-reveal className="block">
          {manifiesto.golpe[0]}
        </span>
        <span data-reveal style={stagger(2)} className="block pl-[9vw] md:pl-[22vw]">
          {manifiesto.golpe[1]}
        </span>
      </h2>

      {/* La cuenta de protección: el árbitro cuenta y tú te levantas antes del diez.
          Al aparecer, los números entran en orden y el 8 llega último, en rojo. */}
      <p className="t-display mt-12 flex flex-wrap items-baseline gap-x-[0.35em] text-[clamp(2.25rem,7vw,5rem)] md:mt-16">
        <span className="sr-only">Uno, dos, tres, cuatro, cinco, seis, siete, ocho: de pie.</span>
        {[1, 2, 3, 4, 5, 6, 7].map((n) => (
          <span key={n} aria-hidden data-reveal style={stagger(n)} className="text-carbon/25">
            {n}
          </span>
        ))}
        <span aria-hidden data-reveal style={stagger(10)} className="text-rojo">
          8
        </span>
        <span aria-hidden data-reveal style={stagger(12)} className="t-label self-center pl-2 text-carbon">
          — De pie.
        </span>
      </p>

      <div className="mt-16 grid gap-10 border-t border-carbon/15 pt-10 md:mt-24 md:grid-cols-12 md:gap-6">
        {manifiesto.frases.map((f, i) => (
          <figure key={f.texto} data-reveal style={stagger(i)} className="md:col-span-5 md:even:col-start-7">
            <blockquote className="text-[clamp(1.375rem,2.6vw,2rem)] leading-tight font-semibold [font-stretch:87%]">
              “{f.texto}”
            </blockquote>
            <figcaption className="t-label mt-4 text-grafito">{f.fuente}</figcaption>
          </figure>
        ))}
      </div>

      <p className="t-label mt-16 text-grafito md:mt-24 md:text-right">Lema del club</p>
      <ul className="t-display mt-3 flex flex-wrap gap-x-6 gap-y-1 text-[clamp(1.75rem,5vw,3.5rem)] md:justify-end">
        {manifiesto.valores.map((v, i) => (
          <li key={v} data-reveal style={stagger(i)} className="flex items-baseline gap-6">
            {v}
            {i < manifiesto.valores.length - 1 && (
              <span aria-hidden className="text-carbon/30">
                /
              </span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
