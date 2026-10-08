"use client";

import { useEffect } from "react";

// Un solo observador para todo el sitio: marca [data-reveal] como visto una vez y deja de observarlo.
// El estado inicial y la transición viven en CSS (globals.css), así las secciones siguen siendo Server Components.
export function RevealObserver() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.setAttribute("data-shown", "");
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    document.querySelectorAll("[data-reveal]:not([data-shown])").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
