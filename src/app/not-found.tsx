import { CtaLink } from "@/components/ui/CtaLink";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata = { title: "Página no encontrada" };

// 404 con la voz del club: caer está permitido, quedarse no.
export default function NotFound() {
  return (
    <section className="flex min-h-svh flex-col justify-center px-gutter pt-24 pb-16">
      <SectionLabel n="404" className="text-acero">
        Página no encontrada
      </SectionLabel>
      <h1 className="t-display mt-10 text-[clamp(3.5rem,15vw,11rem)]">
        <span className="block">Te fuiste</span>
        <span className="block">a la lona.</span>
      </h1>
      <p className="mt-8 max-w-[36ch] text-lg text-acero">Esta página no existe. Levántate antes del diez.</p>
      <CtaLink href="/" className="mt-10 self-start">
        Volver al inicio
      </CtaLink>
    </section>
  );
}
