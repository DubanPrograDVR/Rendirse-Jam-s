import { Photo } from "@/components/ui/Photo";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ciudades, club, recorrido, recorridoCita, velada } from "@/content";
import { stagger } from "@/components/ui/stagger";
import { Arrow } from "@/components/ui/Arrow";

// ¿Dónde compiten? — una cartelera de velada real. El club pelea en la esquina roja.
export function Veladas() {
  return (
    <section id="veladas" aria-labelledby="veladas-title" className="border-t border-lona/15 px-gutter py-section">
      <SectionLabel n="08" className="text-acero">
        Veladas
      </SectionLabel>
      <h2 id="veladas-title" data-reveal className="t-display t-h2 mt-10">
        Al ring.
      </h2>

      {/* Afiche de la última velada en casa */}
      <article className="mt-12 grid gap-8 md:mt-20 md:grid-cols-12 md:gap-6">
        <div className="md:col-span-7 md:self-center">
          <p className="t-label text-acero">
            {velada.nombre} · {velada.fecha}
          </p>
          <h3 data-reveal className="t-display mt-5 text-[clamp(2.75rem,9vw,7.5rem)]">
            <span className="block text-rojo">{velada.rojo}</span>
            <span className="t-label my-3 block text-acero">vs.</span>
            <span className="block">{velada.azul}</span>
          </h3>
          <p className="mt-6 text-lg">{velada.lugar}</p>
          <p className="mt-1 text-acero">{velada.detalle}</p>
        </div>
        <Photo
          foto={velada.foto}
          sizes="(min-width: 768px) 40vw, 100vw"
          className="-mx-gutter aspect-[3/2] md:col-span-5 md:mx-0 md:aspect-[4/5]"
        />
      </article>

      {/* Recorrido: del patio de tierra (2022) al título sudamericano (2026). El año en curso va en rojo. */}
      <div className="mt-20 grid gap-12 md:mt-28 md:grid-cols-12 md:gap-6">
        <div className="md:col-span-4">
          <h3 className="t-label text-acero">Recorrido</h3>
          <figure data-reveal className="mt-6">
            <blockquote className="text-xl leading-snug font-semibold [font-stretch:87%]">“{recorridoCita.texto}”</blockquote>
            <figcaption className="t-label mt-4 text-acero">{recorridoCita.fuente}</figcaption>
          </figure>
          <p className="mt-8 max-w-[30ch] text-acero">
            Próxima velada: por anunciar.{" "}
            <a href={club.instagram} target="_blank" rel="noopener" className="text-lona underline underline-offset-4">
              Síguela en Instagram <Arrow out className="text-[0.85em]" />
            </a>
          </p>
        </div>
        <ol className="md:col-span-8">
          {recorrido.map((y, i) => (
            <li key={y.anio} className="grid gap-4 border-t border-lona/15 py-6 md:grid-cols-8 md:gap-6 md:py-8">
              <p
                data-reveal
                className={`t-display text-[clamp(3rem,8vw,5.5rem)] tabular-nums md:col-span-2 ${i === recorrido.length - 1 ? "text-rojo" : "text-acero"}`}
              >
                {y.anio}
              </p>
              <ul className="md:col-span-6 md:pt-2">
                {y.hitos.map((h, j) => (
                  <li key={h.evento} data-reveal style={stagger(j)} className="flex gap-4 py-2">
                    <span className="t-label w-10 shrink-0 pt-2 text-acero">{h.mes}</span>
                    <div>
                      <p className="t-display text-[clamp(1.5rem,3vw,2.25rem)]">{h.evento}</p>
                      {h.resultado && <p className="mt-1 text-acero">{h.resultado}</p>}
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-20 md:mt-28">
        <h3 className="t-label text-acero">Hemos subido al ring en</h3>
        <ul className="t-display mt-4 flex flex-wrap gap-x-[0.3em] text-[clamp(2.25rem,8vw,6rem)]">
          {ciudades.map((c, i) => (
            <li key={c} data-reveal style={stagger(i)} className="flex gap-x-[0.3em]">
              {c}
              {i < ciudades.length - 1 && (
                <span aria-hidden className="text-acero/50">
                  /
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
