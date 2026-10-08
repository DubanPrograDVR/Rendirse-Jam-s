import { Akiramenai } from "@/components/sections/Akiramenai";
import { Cierre } from "@/components/sections/Cierre";
import { Club } from "@/components/sections/Club";
import { Entrenadores } from "@/components/sections/Entrenadores";
import { Entrenamiento } from "@/components/sections/Entrenamiento";
import { Galeria } from "@/components/sections/Galeria";
import { Hero } from "@/components/sections/Hero";
import { Horarios } from "@/components/sections/Horarios";
import { Manifiesto } from "@/components/sections/Manifiesto";
import { Prensa } from "@/components/sections/Prensa";
import { PrimeraClase } from "@/components/sections/PrimeraClase";
import { Veladas } from "@/components/sections/Veladas";
import { club, siteUrl } from "@/content";

// SEO local: ficha del club para Google. Solo datos confirmados por el club.
// ponytail: sin openingHoursSpecification hasta tener las horas (los días solos no son válidos para schema.org).
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsClub",
  name: "Club de Boxeo Rendirse Jamás",
  alternateName: "Rendirse Jamás Molina",
  slogan: club.lema,
  url: siteUrl,
  logo: `${siteUrl}/icon.png`,
  image: `${siteUrl}/opengraph-image`,
  telephone: club.telefono,
  address: {
    "@type": "PostalAddress",
    streetAddress: club.direccion,
    addressLocality: club.ciudad,
    addressRegion: club.region,
    addressCountry: "CL",
  },
  sameAs: [club.instagram, club.facebook],
  foundingDate: club.fundadoISO,
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Hero />
      <Manifiesto />
      <Club />
      <Entrenamiento />
      <Akiramenai />
      <Horarios />
      <Entrenadores />
      <Veladas />
      <Prensa />
      <Galeria />
      <PrimeraClase />
      <Cierre />
    </>
  );
}
