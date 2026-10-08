import { Photo } from "@/components/ui/Photo";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { entrenamiento } from "@/content";

// ¿Qué hacen? — un índice editorial: número, nombre, qué se trabaja y la foto real.
export function Entrenamiento() {
  return (
    <section id="entrenamiento" aria-labelledby="entrenamiento-title" className="px-gutter pb-section">
      <SectionLabel n="04" className="text-acero">
        Entrenamiento
      </SectionLabel>
      <h2 id="entrenamiento-title" data-reveal className="t-display t-h2 mt-10">
        Así se entrena.
      </h2>

      <ol className="mt-12 md:mt-20">
        {entrenamiento.map((item, i) => (
          <li
            key={item.titulo}
            className="grid gap-5 border-t border-lona/15 py-8 md:grid-cols-12 md:items-start md:gap-6 md:py-10"
          >
            <div className="flex items-baseline gap-4 md:col-span-6">
              <span className="t-label w-8 shrink-0 text-acero">{String(i + 1).padStart(2, "0")}</span>
              <h3 data-reveal className="t-display text-[clamp(2.25rem,9vw,6rem)]">{item.titulo}</h3>
            </div>
            <p className="max-w-[36ch] text-acero md:col-span-3 md:pt-3">{item.texto}</p>
            <Photo
              foto={item.foto}
              sizes="(min-width: 768px) 25vw, 100vw"
              className="aspect-[3/2] md:col-span-3 md:aspect-[4/5]"
            />
          </li>
        ))}
      </ol>
    </section>
  );
}
