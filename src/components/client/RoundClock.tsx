"use client";

import { useEffect, useRef } from "react";

const ROUND = 180; // 3 minutos
const AVISO = 150; // últimos 30 segundos: se enciende la luz roja

// El reloj de round del gimnasio: la página dura un round y avanza con el scroll.
// Cuenta hacia arriba (progreso, no urgencia). Escribe directo en el DOM: cero re-renders al hacer scroll.
export function RoundClock() {
  const box = useRef<HTMLSpanElement>(null);
  const time = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - innerHeight;
      const s = Math.round(Math.min(1, Math.max(0, scrollY / (max || 1))) * ROUND);
      if (time.current) time.current.textContent = `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
      box.current?.setAttribute("data-aviso", String(s >= AVISO));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <span ref={box} aria-hidden data-aviso="false" className="group/clock t-label flex items-center gap-2 tabular-nums">
      <span className="size-2 bg-acero transition-colors duration-300 group-data-[aviso=true]/clock:bg-rojo" />
      <span ref={time} className="w-[4ch]">
        0:00
      </span>
    </span>
  );
}
