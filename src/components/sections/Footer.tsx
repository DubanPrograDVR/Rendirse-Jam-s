import Link from "next/link";
import { Escudo } from "@/components/ui/Escudo";
import { club, nav } from "@/content";

export function Footer() {
  return (
    <footer className="px-gutter pt-16 pb-10 text-acero">
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <Link href="/#inicio" className="flex items-center gap-3 text-lona">
          <Escudo sizes="48px" decorative className="w-12" />
          <span className="t-display text-3xl">Rendirse jamás.</span>
        </Link>
        <nav aria-label="Pie de página">
          <ul className="t-label flex flex-wrap gap-x-8 gap-y-1 md:max-w-lg md:justify-end">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-block py-2 hover:text-lona">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="mt-12 border-t border-lona/10 pt-6 text-sm">
        © 2026 Club de Boxeo {club.nombre} · {club.ciudad}, {club.pais}
      </p>
    </footer>
  );
}
