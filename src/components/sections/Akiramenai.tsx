import { Arrow } from "@/components/ui/Arrow";
import { Photo } from "@/components/ui/Photo";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { stagger } from "@/components/ui/stagger";
import { akiramenai } from "@/content";

// El club dentro del club: jiu-jitsu brasileño, mismos fundadores, mismo gimnasio.
// Mismo sistema visual, pero su propio nombre manda: es otra disciplina con la misma filosofía.
export function Akiramenai() {
  const [seminario, grados] = akiramenai.fotos;

  return (
    <section id="jiu-jitsu" aria-labelledby="akiramenai-title" className="border-t border-lona/15 px-gutter py-section">
      <SectionLabel n="05" className="text-acero">
        Jiu-jitsu
      </SectionLabel>

      <div className="mt-10 grid gap-10 md:grid-cols-12 md:gap-6">
        <div className="md:col-span-7">
          <p className="t-label text-acero">{akiramenai.bajada}</p>
          <h2 id="akiramenai-title" data-reveal className="t-display t-h2 mt-4">
            {akiramenai.nombre}.
          </h2>
          {/* El nombre en japonés, como un sello; los lectores de pantalla ya tienen el significado en el texto. */}
          <p aria-hidden className="mt-2 text-[clamp(1.5rem,3vw,2.25rem)] tracking-[0.3em] text-acero">
            {akiramenai.japones}
          </p>
          <p className="mt-8 max-w-[44ch] text-lg leading-relaxed text-lona/90">{akiramenai.texto}</p>
        </div>

        <figure data-reveal style={stagger(1)} className="md:col-span-4 md:col-start-9 md:self-end">
          <blockquote className="text-[clamp(1.25rem,2.2vw,1.75rem)] leading-snug font-semibold [font-stretch:87%]">
            “{akiramenai.cita}”
          </blockquote>
          <figcaption className="t-label mt-4 text-acero">Akiramenai · Caes de Rua Molina</figcaption>
        </figure>
      </div>

      <div className="mt-14 grid gap-6 md:mt-20 md:grid-cols-12">
        <Photo
          foto={seminario}
          sizes="(min-width: 768px) 58vw, 100vw"
          className="-mx-gutter aspect-[4/3] md:col-span-7 md:mx-0 md:aspect-[4/5]"
        />
        <div className="flex flex-col gap-10 md:col-span-4 md:col-start-9">
          <Photo foto={grados} i={1} sizes="(min-width: 768px) 33vw, 100vw" className="aspect-[3/4] md:mt-24" />
          <ul className="border-t border-lona/15">
            {akiramenai.modalidades.map((m, i) => (
              <li key={m} data-reveal style={stagger(i)} className="t-display border-b border-lona/15 py-3 text-[clamp(1.5rem,2.6vw,2rem)]">
                {m}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-14 flex flex-col gap-6 md:mt-20 md:flex-row md:items-end md:justify-between">
        <p data-reveal className="t-display text-[clamp(2.25rem,7vw,5.5rem)]">
          {akiramenai.lema}
        </p>
        <a
          href={akiramenai.instagram}
          target="_blank"
          rel="noopener"
          className="t-label inline-flex shrink-0 items-center gap-1.5 py-3 underline underline-offset-4"
        >
          {akiramenai.usuario} <Arrow out />
        </a>
      </div>
    </section>
  );
}
