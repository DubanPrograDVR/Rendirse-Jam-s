"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { RoundClock } from "@/components/client/RoundClock";
import { Arrow } from "@/components/ui/Arrow";
import { CtaLink } from "@/components/ui/CtaLink";
import { Escudo } from "@/components/ui/Escudo";

type Props = {
  nav: { href: string; label: string }[];
  reservar: string;
  instagram: string;
  facebook: string;
};

// Cliente por dos razones reales: saber si el hero sigue debajo (nav transparente → sólida)
// y abrir/cerrar el menú. El <dialog> nativo da foco atrapado, Esc y fondo inerte.
export function SiteHeader({ nav, reservar, instagram, facebook }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("inicio");
    if (!hero) return; // páginas sin hero (404): la marca se muestra por CSS (globals.css, [data-marca])
    const io = new IntersectionObserver(([e]) => setSolid(!e.isIntersecting), {
      rootMargin: "-80px 0px 0px 0px",
    });
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  const close = () => dialog.current?.close();

  return (
    <header
      data-solid={solid}
      className="group/header fixed inset-x-0 top-0 z-50 border-b border-transparent transition-colors duration-300 ease-out data-[solid=true]:border-lona/10 data-[solid=true]:bg-carbon"
    >
      <div className="flex h-16 items-center justify-between px-gutter md:h-20">
        {/* Sobre el hero, el nombre y el escudo ya están en grande: la marca del nav aparece al salir. */}
        <Link
          href="/#inicio"
          data-marca
          className="invisible flex items-center gap-3 opacity-0 transition-[opacity,visibility] duration-300 ease-out group-data-[solid=true]/header:visible group-data-[solid=true]/header:opacity-100"
        >
          <Escudo sizes="44px" decorative eager className="w-9 md:w-11" />
          <span className="t-display text-xl md:text-2xl">Rendirse jamás.</span>
        </Link>
        <nav aria-label="Principal" className="flex items-center gap-4 md:gap-8">
          <span className="invisible hidden opacity-0 transition-[opacity,visibility] duration-300 ease-out min-[360px]:block group-data-[solid=true]/header:visible group-data-[solid=true]/header:opacity-100">
            <RoundClock />
          </span>
          <Link href="/#horarios" className="t-label hidden py-3 md:block">
            Horarios
          </Link>
          <a
            href={reservar}
            {...(reservar.startsWith("http") && { target: "_blank", rel: "noopener" })}
            className="t-label hidden bg-rojo px-4 py-3 text-white focus-visible:outline-rojo md:block"
          >
            Primera clase
          </a>
          <button
            type="button"
            aria-haspopup="dialog"
            onClick={() => dialog.current?.showModal()}
            className="t-label -mr-3 px-3 py-3"
          >
            Menú
          </button>
        </nav>
      </div>

      <dialog
        ref={dialog}
        aria-label="Menú"
        className="menu m-0 h-dvh max-h-none w-full max-w-none bg-carbon p-0 text-lona backdrop:bg-transparent"
      >
        <div className="flex min-h-full flex-col">
          <div className="flex h-16 items-center justify-between px-gutter md:h-20">
            <span className="t-label text-acero">Molina · Maule · Chile</span>
            <button type="button" onClick={close} autoFocus className="t-label -mr-3 px-3 py-3">
              Cerrar
            </button>
          </div>

          <nav aria-label="Secciones" className="flex-1 px-gutter py-6">
            <ol>
              {nav.map((item, i) => (
                <li
                  key={item.href}
                  style={{ "--i": i } as React.CSSProperties}
                  className="border-b border-lona/10 first:border-t"
                >
                  <Link
                    href={item.href}
                    onClick={close}
                    className="group flex items-baseline gap-4 py-2 md:gap-8 md:py-3"
                  >
                    <span className="t-label w-6 text-acero">{String(i + 1).padStart(2, "0")}</span>
                    <span className="t-display text-[clamp(2.25rem,min(10vw,7.2svh),6rem)] transition-transform duration-200 ease-out group-hover:translate-x-2">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </nav>

          <div className="flex flex-wrap items-center justify-between gap-6 px-gutter pb-8">
            <div className="t-label flex gap-6">
              <a href={instagram} target="_blank" rel="noopener" className="flex items-center gap-2 py-2">
                Instagram <Arrow out />
              </a>
              <a href={facebook} target="_blank" rel="noopener" className="flex items-center gap-2 py-2">
                Facebook <Arrow out />
              </a>
            </div>
            <CtaLink href={reservar} onClick={close}>
              Reserva tu primera clase
            </CtaLink>
          </div>
        </div>
      </dialog>
    </header>
  );
}
