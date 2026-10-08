import { Photo } from "@/components/ui/Photo";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { creditos, galeria } from "@/content";

// ¿Cómo se siente estar ahí? — una hoja de contactos. Mobile: tira deslizable (scroll-snap nativo, sin JS).
// Desktop: los aspectos están calculados para que cada fila de la grilla cierre a la misma altura.
const celdas = [
  "md:col-span-4 md:aspect-[3/2]",
  "md:col-span-2 md:aspect-[3/4]",
  "md:col-span-2 md:aspect-[3/4]",
  "md:col-span-2 md:aspect-[3/4]",
  "md:col-span-2 md:aspect-[3/4]",
  "md:col-span-3 md:aspect-square",
  "md:col-span-3 md:aspect-square",
];

export function Galeria() {
  return (
    <section id="galeria" aria-labelledby="galeria-title" className="pb-section">
      <div className="px-gutter">
        <SectionLabel n="08" className="text-acero">
          Galería
        </SectionLabel>
        <h2 id="galeria-title" data-reveal className="t-display t-h2 mt-10">
          Esto pasa aquí.
        </h2>
      </div>

      <ul
        tabIndex={0}
        aria-label="Fotos del club. En pantallas pequeñas, desliza para ver más."
        className="mt-12 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-gutter px-gutter pb-2 md:mt-16 md:grid md:grid-cols-6 md:gap-3 md:overflow-visible"
      >
        {galeria.map((foto, i) => (
          <li key={i} className={`w-[78vw] max-w-sm shrink-0 snap-start md:w-auto md:max-w-none ${celdas[i] ?? "md:col-span-2"}`}>
            <figure className="zoom flex h-full flex-col">
              <Photo foto={foto} i={i % 3} sizes="(min-width: 768px) 50vw, 80vw" className="aspect-[4/5] md:aspect-auto md:flex-1" />
              <figcaption className="t-label mt-2 text-acero tabular-nums">{String(i + 1).padStart(2, "0")}A</figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <p className="mt-6 px-gutter text-sm text-acero">{creditos}</p>
    </section>
  );
}
