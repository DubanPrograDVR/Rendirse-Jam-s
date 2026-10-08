import { Photo } from "@/components/ui/Photo";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ciudades, club, logros, velada } from "@/content";
import { stagger } from "@/components/ui/stagger";
import { Arrow } from "@/components/ui/Arrow";

// ¿Dónde compiten? — una cartelera de velada real. El club pelea en la esquina roja.
export function Veladas() {
  return (
    <section id="veladas" aria-labelledby="veladas-title" className="border-t border-lona/15 px-gutter py-section">
      <SectionLabel n="07" className="text-acero">
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

      <div className="mt-20 grid gap-12 md:mt-28 md:grid-cols-12 md:gap-6">
        <div className="md:col-span-4">
          <h3 className="t-label text-acero">Resultados recientes</h3>
          <p className="mt-6 max-w-[30ch] text-acero">
            Próxima velada: por anunciar.{" "}
            <a href={club.instagram} target="_blank" rel="noopener" className="text-lona underline underline-offset-4">
              Síguela en Instagram <Arrow out className="text-[0.85em]" />
            </a>
          </p>
        </div>
        <ol className="md:col-span-8">
          {logros.map((l, i) => (
            <li key={l.evento} data-reveal style={stagger(i)} className="grid gap-1 border-t border-lona/15 py-6 md:grid-cols-8 md:gap-6">
              <p className="t-label pt-1 text-acero tabular-nums md:col-span-2">{l.fecha}</p>
              <div className="md:col-span-6">
                <p className="t-display text-[clamp(1.75rem,3.5vw,2.75rem)]">{l.evento}</p>
                <p className="mt-1 text-acero">{l.resultado}</p>
              </div>
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
