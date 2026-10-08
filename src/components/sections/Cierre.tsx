import { CtaLink } from "@/components/ui/CtaLink";
import { Escudo } from "@/components/ui/Escudo";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { canalReserva, cierre, club, reservar } from "@/content";
import { stagger } from "@/components/ui/stagger";
import { Magnetic } from "@/components/client/Magnetic";
import { Arrow } from "@/components/ui/Arrow";

// ¿Cómo entro? — la única superficie roja del sitio: la luz de los últimos 30 segundos.
// Sobre rojo, todo el texto va en blanco puro (≈4.6:1).
export function Cierre() {
  return (
    <section id="contacto" aria-labelledby="contacto-title" className="relative overflow-hidden bg-rojo px-gutter py-section text-white">
      <Escudo
        sizes="(min-width: 768px) 384px, 224px"
        decorative
        className="absolute -right-12 -bottom-10 w-56 rotate-[10deg] md:right-[6vw] md:bottom-16 md:w-80"
      />

      <div className="relative">
        <SectionLabel n="12">Últimos 30 segundos</SectionLabel>
        <h2 id="contacto-title" className="t-display mt-10 text-[clamp(3.5rem,17vw,13rem)]">
          <span data-reveal className="block">
            Nadie
          </span>
          <span data-reveal style={stagger(2)} className="block">
            empieza listo.
          </span>
        </h2>
        <p className="mt-8 max-w-[40ch] text-lg leading-relaxed">{cierre.frase}</p>
        <div className="mt-10">
          <Magnetic>
            <CtaLink href={reservar} tone="carbon">
              Escríbenos por {canalReserva}
            </CtaLink>
          </Magnetic>
        </div>

        <dl className="mt-16 grid gap-6 border-t border-white/30 pt-8 sm:grid-cols-2 md:mt-24 md:max-w-3xl md:grid-cols-4">
          <div>
            <dt className="t-label">Dónde</dt>
            <dd className="mt-2">
              {club.direccion}, {club.ciudad}
              <a
                href={club.mapa}
                target="_blank"
                rel="noopener"
                className="mt-1 flex items-center gap-1.5 underline underline-offset-4"
              >
                Cómo llegar <Arrow out className="text-[0.85em]" />
              </a>
            </dd>
          </div>
          <div>
            <dt className="t-label">Entrenamos</dt>
            <dd className="mt-2">{club.dias}</dd>
          </div>
          <div>
            <dt className="t-label">WhatsApp</dt>
            <dd className="mt-2">
              <a href={reservar} target="_blank" rel="noopener" className="underline underline-offset-4 tabular-nums">
                {club.telefono}
              </a>
            </dd>
          </div>
          <div>
            <dt className="t-label">Redes</dt>
            <dd className="mt-2 flex flex-col">
              <a href={club.instagram} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 underline underline-offset-4">
                Instagram <Arrow out className="text-[0.85em]" />
              </a>
              <a href={club.facebook} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 underline underline-offset-4">
                Facebook <Arrow out className="text-[0.85em]" />
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
