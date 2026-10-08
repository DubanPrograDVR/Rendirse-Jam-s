import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import { RevealObserver } from "@/components/client/RevealObserver";
import { SiteHeader } from "@/components/client/SiteHeader";
import { Footer } from "@/components/sections/Footer";
import { club, nav, reservar, siteUrl } from "@/content";
import "./globals.css";

// Una sola familia variable: ancho 62–125 y peso 100–900 en un archivo.
const archivo = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--font-archivo" });

const titulo = "Rendirse Jamás — Club de boxeo en Molina, Maule";
const descripcion =
  "Club de boxeo en Molina, Región del Maule. Entrenamos lunes, miércoles y viernes en la Cámara de Comercio de Molina y competimos en veladas a nivel nacional. Reserva tu primera clase por WhatsApp.";

// La imagen para redes (opengraph-image.tsx) y los íconos (icon.png, apple-icon.png) los agrega Next por convención.
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: titulo, template: "%s — Rendirse Jamás" },
  description: descripcion,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_CL",
    siteName: "Rendirse Jamás",
    url: "/",
    title: titulo,
    description: descripcion,
  },
  twitter: { card: "summary_large_image", title: titulo, description: descripcion },
};

export const viewport: Viewport = {
  themeColor: "#0e0e0c",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-CL" className={archivo.variable}>
      <body>
        <a
          href="#contenido"
          className="t-label fixed top-2 left-2 z-[70] -translate-y-20 bg-lona px-4 py-3 text-carbon focus:translate-y-0"
        >
          Saltar al contenido
        </a>
        <SiteHeader nav={nav} reservar={reservar} instagram={club.instagram} facebook={club.facebook} />
        <main id="contenido">{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
