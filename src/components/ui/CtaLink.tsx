import { Arrow } from "@/components/ui/Arrow";

// El único botón del sitio: bloque sólido, sin pill ni sombra. Rojo = acción; carbón sobre el cierre rojo.
export function CtaLink({
  href,
  children,
  tone = "rojo",
  className = "",
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  tone?: "rojo" | "carbon";
  className?: string;
  onClick?: () => void;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      onClick={onClick}
      {...(external && { target: "_blank", rel: "noopener" })}
      className={`t-label group inline-flex min-h-12 items-center gap-4 px-5 text-white sm:whitespace-nowrap transition-transform duration-150 ease-out active:scale-[0.97] ${tone === "rojo" ? "bg-rojo focus-visible:outline-rojo" : "bg-carbon"} ${className}`}
    >
      {children}
      <Arrow
        out={external}
        className={`transition-transform duration-200 ease-out ${external ? "group-hover:translate-x-0.5 group-hover:-translate-y-0.5" : "group-hover:translate-x-1"}`}
      />
    </a>
  );
}
