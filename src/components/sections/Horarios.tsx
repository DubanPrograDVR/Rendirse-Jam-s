import { HoyMarker } from "@/components/client/HoyMarker";
import { Arrow } from "@/components/ui/Arrow";
import { CtaLink } from "@/components/ui/CtaLink";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { stagger } from "@/components/ui/stagger";
import { canalReserva, club, horarios, pendiente, reservar } from "@/content";

// ¿Cómo puedo entrenar? — información clara: una tabla real (nunca una imagen), como la pizarra del gimnasio.
export function Horarios() {
  const horaPendiente = horarios.some((h) => pendiente(h.hora));

  return (
    <section id="horarios" aria-labelledby="horarios-title" className="bg-lona px-gutter py-section text-carbon">
      <SectionLabel n="06" className="text-grafito">
        Horarios
      </SectionLabel>

      <div className="mt-10 grid gap-12 md:grid-cols-12 md:gap-6">
        <div className="md:col-span-5">
          <h2 id="horarios-title" data-reveal className="t-display t-h2">
            Cuándo entrenar.
          </h2>
          <p className="mt-6 max-w-[36ch] text-grafito">
            Entrenamos {club.dias.toLowerCase()} en la {club.direccion}.{" "}
            {horaPendiente
              ? `Escríbenos por ${canalReserva} y te confirmamos la hora de tu primera clase.`
              : "¿Primera vez? Escríbenos antes y te esperamos."}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <CtaLink href={reservar}>Pregunta por tu horario</CtaLink>
            <a
              href={club.mapa}
              target="_blank"
              rel="noopener"
              className="t-label inline-flex items-center gap-1.5 py-3 underline underline-offset-4"
            >
              Cómo llegar <Arrow out />
            </a>
          </div>
        </div>

        <table
          data-reveal
          style={stagger(1)}
          className="w-full border-collapse text-left md:col-span-6 md:col-start-7 md:self-end"
        >
          <caption className="sr-only">Horario semanal de entrenamientos</caption>
          <thead>
            <tr className="t-label text-grafito">
              <th scope="col" className="pb-3 font-semibold">
                Día
              </th>
              <th scope="col" className="pb-3 font-semibold">
                Hora
              </th>
              <th scope="col" className="pb-3 font-semibold">
                Clase
              </th>
            </tr>
          </thead>
          <tbody className="tabular-nums">
            {horarios.map((h) => (
              <tr key={h.dia} data-dia={h.dia.toLowerCase()} className="group/dia border-t border-carbon/15">
                <th scope="row" className="t-display py-4 pr-4 text-[clamp(1.5rem,4vw,2.25rem)]">
                  {h.dia}
                  <span className="t-label ml-3 hidden bg-rojo px-2 py-1 align-middle text-white group-data-[hoy]/dia:inline-block">
                    Hoy
                  </span>
                </th>
                <td className="py-4 pr-4 text-sm md:text-base">{h.hora}</td>
                <td className="py-4 text-sm md:text-base">{h.clase}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <HoyMarker />
      </div>
    </section>
  );
}
