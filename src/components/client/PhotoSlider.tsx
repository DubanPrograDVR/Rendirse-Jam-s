"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Arrow } from "@/components/ui/Arrow";
import type { Foto } from "@/content";

// Varias fotos de una misma persona en un solo marco. El scroll-snap da el swipe en el celular;
// las flechas y el contador cubren mouse y teclado. Mismo tratamiento B/N que Photo.
export function PhotoSlider({
  fotos,
  sizes,
  className = "",
  i,
  quality,
}: {
  fotos: Foto[];
  sizes: string;
  className?: string;
  i?: number;
  quality?: number;
}) {
  const track = useRef<HTMLUListElement>(null);
  const [actual, setActual] = useState(0);

  const ir = (n: number) => {
    const el = track.current;
    if (!el) return;
    const reducido = matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollTo({ left: n * el.clientWidth, behavior: reducido ? "auto" : "smooth" });
  };

  const boton = "grid size-11 place-items-center bg-carbon/80 text-lona transition-opacity disabled:opacity-30";

  return (
    <div
      data-reveal="clip"
      style={i ? ({ "--i": i } as React.CSSProperties) : undefined}
      role="group"
      aria-roledescription="carrusel"
      aria-label={`Fotos, ${fotos.length} en total`}
      className={`relative overflow-hidden bg-hierro ${className}`}
    >
      <ul
        ref={track}
        onScroll={(e) => setActual(Math.round(e.currentTarget.scrollLeft / e.currentTarget.clientWidth))}
        className="flex h-full snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {fotos.map((foto, n) => (
          <li key={n} aria-label={`${n + 1} de ${fotos.length}`} className="relative h-full w-full shrink-0 snap-center">
            {foto.src && (
              <Image
                src={foto.src}
                alt={foto.alt}
                fill
                sizes={sizes}
                quality={quality}
                placeholder="blur"
                style={foto.pos ? { objectPosition: foto.pos } : undefined}
                className="object-cover contrast-[1.15] grayscale"
              />
            )}
          </li>
        ))}
      </ul>

      <div className="absolute right-0 bottom-0 flex items-center gap-px">
        <span aria-hidden className="t-label bg-carbon/80 px-3 py-[0.9rem] text-lona">
          {actual + 1} / {fotos.length}
        </span>
        <button type="button" aria-label="Foto anterior" disabled={actual === 0} onClick={() => ir(actual - 1)} className={boton}>
          <Arrow className="rotate-180" />
        </button>
        <button
          type="button"
          aria-label="Foto siguiente"
          disabled={actual === fotos.length - 1}
          onClick={() => ir(actual + 1)}
          className={boton}
        >
          <Arrow />
        </button>
      </div>
    </div>
  );
}
