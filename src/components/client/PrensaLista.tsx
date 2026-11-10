"use client";

import { useRef, useState } from "react";
import { Arrow } from "@/components/ui/Arrow";
import { stagger } from "@/components/ui/stagger";
import type { NotaPrensa } from "@/content";

// Notas por página. Con más notas aparecen más páginas solas; con 6 o menos no hay paginación.
const POR_PAGINA = 6;

// Una aparición en prensa. Toda la fila es clickeable, pero el nombre accesible del link
// es solo el titular (patrón "stretched link").
function Fila({ n, i, oculta }: { n: NotaPrensa; i: number; oculta: boolean }) {
  return (
    <li
      hidden={oculta}
      data-reveal
      style={stagger(i % 3)}
      className="group relative grid gap-2 border-b border-carbon/15 py-6 md:grid-cols-12 md:gap-6 md:py-8"
    >
      <p className="t-label text-grafito tabular-nums md:col-span-2 md:pt-2">{n.fecha}</p>
      <div className="md:col-span-8">
        <p className="t-label">
          {n.medio} <span className="text-grafito">· {n.tipo}</span>
        </p>
        <h3 className="t-display mt-2 text-[clamp(1.6rem,3.2vw,2.6rem)] leading-[0.95]">
          <a
            href={n.url}
            target="_blank"
            rel="noopener"
            className="decoration-2 underline-offset-4 group-hover:underline after:absolute after:inset-0"
          >
            {n.titular}
          </a>
        </h3>
        <p className="mt-3 max-w-[60ch] text-grafito">{n.resumen}</p>
      </div>
      <span aria-hidden className="t-label inline-flex items-center gap-1.5 md:col-span-2 md:justify-self-end md:pt-2">
        Ver <Arrow out className="transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </li>
  );
}

// Todas las notas van en el HTML (los buscadores las ven); la paginación solo oculta las que no tocan.
export function PrensaLista({ notas }: { notas: NotaPrensa[] }) {
  const [pagina, setPagina] = useState(0);
  const lista = useRef<HTMLOListElement>(null);
  const total = Math.ceil(notas.length / POR_PAGINA);
  const desde = pagina * POR_PAGINA;
  const hasta = Math.min(desde + POR_PAGINA, notas.length);

  const ir = (n: number) => {
    setPagina(n);
    // Al cambiar de página, la lista vuelve a quedar arriba y el foco se mueve a ella
    // (si no, quien navega con teclado o lector de pantalla queda abajo, en los botones).
    const el = lista.current;
    if (!el) return;
    if (el.getBoundingClientRect().top < 0) {
      const reducido = matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollIntoView({ behavior: reducido ? "auto" : "smooth", block: "start" });
    }
    el.focus({ preventScroll: true });
  };

  const paso = "t-label inline-flex min-h-11 items-center gap-2 px-1 disabled:opacity-30";

  return (
    <>
      <ol
        ref={lista}
        tabIndex={-1}
        aria-label={total > 1 ? `Apariciones en prensa, página ${pagina + 1} de ${total}` : "Apariciones en prensa"}
        className="mt-12 scroll-mt-24 border-t-2 border-carbon outline-none md:mt-16"
      >
        {notas.map((n, i) => (
          <Fila key={n.url} n={n} i={i} oculta={i < desde || i >= hasta} />
        ))}
      </ol>

      {total > 1 && (
        <nav aria-label="Páginas de prensa" className="mt-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
          <p aria-live="polite" className="t-label text-grafito tabular-nums">
            {desde + 1}–{hasta} de {notas.length}
          </p>
          <div className="flex items-center gap-1">
            <button type="button" aria-label="Página anterior" disabled={pagina === 0} onClick={() => ir(pagina - 1)} className={paso}>
              <Arrow className="rotate-180" /> <span className="max-sm:hidden">Anteriores</span>
            </button>
            <ol className="mx-2 flex items-center">
              {Array.from({ length: total }, (_, n) => (
                <li key={n}>
                  <button
                    type="button"
                    aria-label={`Página ${n + 1}`}
                    aria-current={n === pagina ? "page" : undefined}
                    onClick={() => ir(n)}
                    className="t-label grid size-11 place-items-center tabular-nums underline-offset-4 hover:underline aria-[current=page]:bg-carbon aria-[current=page]:text-lona aria-[current=page]:no-underline"
                  >
                    {n + 1}
                  </button>
                </li>
              ))}
            </ol>
            <button
              type="button"
              aria-label="Página siguiente"
              disabled={pagina === total - 1}
              onClick={() => ir(pagina + 1)}
              className={paso}
            >
              <span className="max-sm:hidden">Siguientes</span> <Arrow />
            </button>
          </div>
        </nav>
      )}
    </>
  );
}
