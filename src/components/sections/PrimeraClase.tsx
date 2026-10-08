import { Photo } from "@/components/ui/Photo";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { pendiente, primeraClase } from "@/content";
import { stagger } from "@/components/ui/stagger";

// ¿Qué puedo esperar? — tres rounds, sin letra chica.
export function PrimeraClase() {
  return (
    <section id="primera-clase" aria-labelledby="primera-title" className="bg-lona px-gutter py-section text-carbon">
      <SectionLabel n="09" className="text-grafito">
        Tu primera clase
      </SectionLabel>
      <h2 id="primera-title" data-reveal className="t-display t-h2 mt-10">
        El primer round.
      </h2>

      <ol className="mt-12 grid gap-10 md:mt-20 md:grid-cols-3 md:gap-6">
        {primeraClase.rounds.map((r, i) => (
          <li key={r.titulo} data-reveal style={stagger(i)} className="border-t-2 border-carbon pt-5">
            <p className="t-label text-grafito">Round {i + 1}</p>
            <h3 className="t-display mt-3 text-[clamp(2rem,4vw,3rem)]">{r.titulo}</h3>
            <p className="mt-3 max-w-[32ch] text-grafito">{r.texto}</p>
          </li>
        ))}
      </ol>

      <div className="mt-20 grid gap-10 md:mt-28 md:grid-cols-12 md:gap-6">
        <Photo
          foto={primeraClase.foto}
          sizes="(min-width: 768px) 40vw, 100vw"
          className="-mx-gutter aspect-[4/3] md:col-span-5 md:mx-0 md:aspect-[4/5]"
        />
        <div className="md:col-span-6 md:col-start-7 md:self-end">
          <h3 className="t-label text-grafito">Qué traer</h3>
          <ul className="mt-4">
            {primeraClase.traer.map((t) => (
              <li key={t} className={`border-b border-carbon/15 py-3 text-lg ${pendiente(t) ? "text-grafito" : ""}`}>
                {t}
              </li>
            ))}
          </ul>
          <p data-reveal className="t-display mt-10 text-[clamp(2rem,5vw,3.75rem)]">
            Trae toalla.
            <span className="block text-grafito">Para el sudor, no para tirarla.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
