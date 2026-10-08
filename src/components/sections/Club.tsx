import { Photo } from "@/components/ui/Photo";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { historia, pendiente } from "@/content";
import { stagger } from "@/components/ui/stagger";

// Historia / comunidad — contada con las fotos reales del club: del patio de tierra al gimnasio.
// En desktop las etapas suben como una escalera.
const escalon = ["md:mt-56", "md:mt-28", "md:mt-0"];

export function Club() {
  return (
    <section id="club" aria-labelledby="club-title" className="px-gutter py-section">
      <SectionLabel n="03" className="text-acero">
        Familia boxeo
      </SectionLabel>

      <div className="mt-10 grid gap-10 md:grid-cols-12 md:gap-6">
        <h2 id="club-title" data-reveal className="t-display t-h2 md:col-span-7">
          {historia.titulo}
        </h2>
        <figure data-reveal style={stagger(1)} className="md:col-span-4 md:col-start-9 md:self-end">
          <blockquote className="text-lg leading-relaxed text-lona/90">“{historia.cita}”</blockquote>
          <figcaption className="t-label mt-4 text-acero">{historia.firma}</figcaption>
        </figure>
      </div>

      <ol className="mt-16 grid gap-14 md:mt-24 md:grid-cols-3 md:gap-6">
        {historia.etapas.map((e, i) => (
          <li key={e.fecha} className={escalon[i]}>
            <Photo
              foto={e.foto}
              i={i}
              sizes="(min-width: 768px) 33vw, 100vw"
              className="-mx-gutter aspect-[4/3] md:mx-0 md:aspect-[4/5]"
            />
            <p className="t-label mt-5 text-acero">{e.fecha}</p>
            <h3 data-reveal style={stagger(i)} className="t-display mt-2 text-[clamp(2.25rem,5vw,3.5rem)]">{e.titulo}</h3>
            <p className="mt-2 max-w-[32ch] text-acero">{e.texto}</p>
          </li>
        ))}
      </ol>

      {/* Ficha técnica, como la "tale of the tape" antes de una pelea. */}
      <dl className="mt-20 grid border-t border-lona/15 sm:grid-cols-2 md:mt-28 md:grid-cols-4">
        {historia.ficha.map((f) => (
          <div key={f.k} className="border-b border-lona/15 py-5 sm:odd:pr-6 md:border-b-0 md:pr-6">
            <dt className="t-label text-acero">{f.k}</dt>
            <dd className={`mt-2 text-lg ${pendiente(f.v) ? "text-acero" : ""}`}>{f.v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
