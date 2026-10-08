import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { club } from "@/content";

// La imagen que aparece al compartir el link (WhatsApp, Instagram, X…): un afiche, igual que el hero.
// Se genera una sola vez en el build.
export const alt = "Rendirse Jamás — Club de boxeo en Molina, Maule";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const asset = (ruta: string) => readFile(join(process.cwd(), "src/assets", ruta));
const [condensada, expandida, foto, escudo] = await Promise.all([
  asset("fonts/archivo-condensada-900.ttf"),
  asset("fonts/archivo-expandida-600.ttf"),
  asset("og-foto.jpg"), // foto del hero ya en B/N (Satori no aplica filtros CSS)
  asset("escudo.png"),
]);
const dataUri = (buf: Buffer, tipo: string) => `data:${tipo};base64,${buf.toString("base64")}`;

const carbon = "#0e0e0c";
const lona = "#ece7dc";
const label = { fontFamily: "Expandida", fontSize: 20, letterSpacing: "0.12em", textTransform: "uppercase" } as const;

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: carbon, color: lona, position: "relative" }}>
        {/* eslint-disable-next-line @next/next/no-img-element -- Satori solo entiende <img> */}
        <img src={dataUri(foto, "image/jpeg")} width={520} height={630} style={{ position: "absolute", right: 0, top: 0 }} alt="" />

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: size.width,
            height: size.height,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "52px 60px 40px",
          }}
        >
          <div style={{ ...label, color: "#9a978f" }}>{`Club de boxeo · ${club.ciudad}, ${club.region} · ${club.pais}`}</div>
          <div style={{ display: "flex", flexDirection: "column", fontFamily: "Condensada", fontSize: 196, lineHeight: 0.92, textTransform: "uppercase" }}>
            <span>Rendirse</span>
            <span>jamás.</span>
          </div>
        </div>

        {/* Cinta con el lema, cruzando la foto como en el hero. */}
        <div
          style={{
            ...label,
            position: "absolute",
            right: -40,
            bottom: 210,
            width: 620,
            display: "flex",
            whiteSpace: "nowrap",
            padding: "12px 24px",
            background: lona,
            color: carbon,
            transform: "rotate(-3deg)",
          }}
        >
          {club.lema}
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element -- Satori solo entiende <img> */}
        <img
          src={dataUri(escudo, "image/png")}
          width={150}
          height={150}
          style={{ position: "absolute", right: 372, top: 96, transform: "rotate(-8deg)" }}
          alt=""
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Condensada", data: condensada, weight: 900, style: "normal" },
        { name: "Expandida", data: expandida, weight: 600, style: "normal" },
      ],
    },
  );
}
