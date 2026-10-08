import Image from "next/image";
import escudo from "@/assets/escudo.png";

// ponytail: versión de Instagram (647px). Reemplazar por el archivo original del club (ideal SVG).
export function Escudo({
  className = "",
  sizes,
  eager = false,
  decorative = false,
}: {
  className?: string;
  sizes: string;
  eager?: boolean;
  decorative?: boolean;
}) {
  return (
    <Image
      src={escudo}
      alt={decorative ? "" : "Escudo del Club de Boxeo Rendirse Jamás, Molina"}
      sizes={sizes}
      loading={eager ? "eager" : "lazy"}
      className={`aspect-square h-auto ${className}`}
    />
  );
}
