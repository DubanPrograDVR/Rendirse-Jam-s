"use client";

import { useEffect } from "react";

// Marca la fila del día de hoy según la hora de Chile. Sin JS, simplemente no aparece la marca.
export function HoyMarker() {
  useEffect(() => {
    const hoy = new Intl.DateTimeFormat("es-CL", { weekday: "long", timeZone: "America/Santiago" }).format(new Date());
    document.querySelector(`[data-dia="${hoy}"]`)?.setAttribute("data-hoy", "");
  }, []);

  return null;
}
