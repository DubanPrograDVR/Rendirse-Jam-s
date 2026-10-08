import { Arrow } from "@/components/ui/Arrow";
import { Photo } from "@/components/ui/Photo";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { entrenadores, esquina } from "@/content";

// ¿Quiénes te acompañan? — la esquina del ring abre la sección; luego, quienes entrenan en el club.
export function Entrenadores() {
  return (
    <section id="entrenadores" aria-labelledby="entrenadores-title" className="py-section">
      <div className="px-gutter">
        <SectionLabel n="06" className="text-acero">
          Entrenadores
        </SectionLabel>
        <h2 id="entrenadores-title" data-reveal className="t-display t-h2 mt-10">
          En tu esquina.
        </h2>
      </div>

      <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-12 md:gap-6 md:px-gutter">
        <Photo foto={esquina} sizes="(min-width: 768px) 66vw, 100vw" className="aspect-[4/3] md:col-span-8 md:aspect-[16/10]" />
        <p className="px-gutter text-lg leading-relaxed text-lona/90 md:col-span-4 md:self-end md:px-0">
          Entre round y round hay sesenta segundos. Ahí se ordena la cabeza, se corrige la guardia y se vuelve a salir.
          Ahí está tu entrenador.
        </p>
      </div>

      <ul className="mt-16 grid grid-cols-2 gap-x-3 gap-y-10 px-gutter md:mt-24 md:grid-cols-4 md:gap-6">
        {entrenadores.map((e, i) => (
          <li key={e.instagram} className="md:first:col-start-3">
            <Photo foto={e.foto} frame={`E${i + 1}`} i={i} sizes="(min-width: 768px) 25vw, 50vw" className="aspect-[4/5]" />
            <h3 className="t-display mt-5 text-[clamp(1.75rem,3vw,2.5rem)]">{e.nombre}</h3>
            <p className="t-label mt-2 text-acero">{e.detalle}</p>
            <a
              href={`https://www.instagram.com/${e.instagram}/`}
              target="_blank"
              rel="noopener"
              className="mt-3 inline-flex items-center gap-1.5 py-1 text-sm text-lona/90 underline underline-offset-4"
            >
              @{e.instagram} <Arrow out className="text-[0.85em]" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
