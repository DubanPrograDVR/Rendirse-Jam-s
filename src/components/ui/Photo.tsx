import Image from "next/image";
import type { Foto } from "@/content";

// Tratamiento único para todas las fotos del club: B/N y contraste alto, así fotos de celular
// y de fotógrafo conviven. Sin foto todavía → placeholder que describe la toma necesaria.
export function Photo({
  foto,
  sizes,
  frame,
  eager = false,
  className = "",
  i,
}: {
  foto: Foto;
  sizes: string;
  frame?: string;
  eager?: boolean;
  className?: string;
  i?: number; // posición en un grupo, para escalonar el reveal
}) {
  return (
    <div
      data-reveal={eager ? undefined : "clip"}
      style={i ? ({ "--i": i } as React.CSSProperties) : undefined}
      className={`relative overflow-hidden bg-hierro ${className}`}
    >
      {foto.src ? (
        <Image
          src={foto.src}
          alt={foto.alt}
          fill
          sizes={sizes}
          placeholder="blur"
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : undefined}
          style={foto.pos ? { objectPosition: foto.pos } : undefined}
          className="object-cover contrast-[1.15] grayscale"
        />
      ) : (
        <div className="absolute inset-3 flex flex-col gap-2 border border-lona/10 p-4 text-acero">
          <span className="t-label">{frame ? `${frame} · ` : ""}Foto pendiente</span>
          <p className="max-w-[34ch] text-sm leading-snug">{foto.toma}</p>
        </div>
      )}
    </div>
  );
}
