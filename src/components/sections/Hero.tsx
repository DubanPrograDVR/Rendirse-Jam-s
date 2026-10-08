import { CtaLink } from "@/components/ui/CtaLink";
import { Escudo } from "@/components/ui/Escudo";
import { Photo } from "@/components/ui/Photo";
import { Tape } from "@/components/ui/Tape";
import { club, hero, reservar } from "@/content";

const cinta = `Club de boxeo · ${club.ciudad}, ${club.region} · ${club.lema}`;

// ¿Quiénes son? — un afiche de velada: el nombre manda, la foto real del ring sangra,
// el escudo va estampado como sello y la cinta lleva el dato de lugar.
//
// Mobile: --foto = alto de la foto; --t = borde superior del titular (monta 0.5em sobre la foto).
// Desktop: --fs = tamaño del titular; la foto empieza en la "S" de RENDIRSE para que siempre la monte.
export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden [--foto:max(58svh,20rem)] [--t:calc(var(--foto)-12.75vw)] lg:min-h-svh lg:[--fs:min(16.4vw,28svh)] lg:[--x:calc(clamp(1rem,4vw,3rem)+2.48*var(--fs))]"
    >
      <div className="in-photo parallax relative h-(--foto) lg:absolute lg:inset-y-0 lg:right-0 lg:left-(--x) lg:h-auto">
        <Photo foto={hero.foto} eager sizes="(min-width: 1024px) 66vw, 100vw" className="h-full" />
        {/* Funde la foto con el carbón donde la pisa el titular. */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-carbon to-transparent lg:inset-y-0 lg:right-auto lg:h-auto lg:w-1/3 lg:bg-linear-to-r"
        />
      </div>

      {/* Cinta impresa: el texto se repite como en una cinta de marca real. */}
      <Tape className="in-tape absolute -inset-x-4 top-[calc(var(--t)-3.5rem)] z-10 -rotate-3 overflow-hidden lg:top-[calc(100svh-2rem-0.93*var(--fs))] lg:right-[-2rem] lg:left-[calc(var(--x)+3vw)] lg:-rotate-2">
        {Array(4).fill(cinta).join(" · ")}
      </Tape>

      {/* Sello pegado sobre la cinta (mobile) o sobre la foto (desktop). */}
      <Escudo
        sizes="(min-width: 1024px) 144px, 104px"
        eager
        decorative
        className="in-stamp absolute top-[calc(var(--t)-8.25rem)] right-gutter z-20 w-24 rotate-[8deg] md:w-26 lg:top-24 lg:right-auto lg:left-[calc(var(--x)+2rem)] lg:w-[clamp(6rem,17svh,9rem)] lg:-rotate-[8deg]"
      />

      <div className="relative flex flex-col px-gutter pb-12 lg:min-h-svh lg:justify-end lg:pb-8">
        <h1
          id="hero-title"
          className="t-display -mt-[0.5em] text-[25.5vw] leading-[0.93] lg:mt-0 lg:text-(length:--fs)"
        >
          <span className="in-rise block" style={{ "--d": "150ms" } as React.CSSProperties}>
            Rendirse
          </span>
          <span className="in-rise block" style={{ "--d": "240ms" } as React.CSSProperties}>
            jamás.
          </span>
        </h1>

        <div
          style={{ "--d": "650ms" } as React.CSSProperties}
          className="in-rise mt-6 flex max-w-sm flex-col items-start gap-6 lg:absolute lg:top-28 lg:left-gutter lg:mt-0 lg:w-[min(28vw,24rem)]">
          <p className="text-acero lg:text-base">{hero.bajada}</p>
          <CtaLink href={reservar}>Reserva tu primera clase</CtaLink>
        </div>
      </div>
    </section>
  );
}
