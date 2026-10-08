"use client";

import { useEffect, useRef } from "react";

// El CTA final se deja "atraer" por el cursor. Solo con mouse y sin reduced-motion.
// La transición de CSS suaviza el seguimiento y el regreso (aproxima un resorte sin librería).
export function Magnetic({ children }: { children: React.ReactNode }) {
  const area = useRef<HTMLSpanElement>(null);
  const inner = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = area.current;
    if (!el || !matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)").matches) return;
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) * 0.25;
      const y = (e.clientY - (r.top + r.height / 2)) * 0.35;
      if (inner.current) inner.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    const leave = () => {
      if (inner.current) inner.current.style.transform = "";
    };
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);
    return () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", leave);
    };
  }, []);

  // El área atrae desde 2rem alrededor del botón sin cambiar el layout.
  return (
    <span ref={area} className="-m-8 inline-block p-8">
      <span ref={inner} className="inline-block transition-transform duration-300 ease-out">
        {children}
      </span>
    </span>
  );
}
