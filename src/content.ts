// Todo el contenido del sitio vive aquí.
// Lo que está entre [CORCHETES] es información pendiente del club: reemplázalo por el dato real.
// Regla: nunca inventar datos. Lo marcado "IG" viene del Instagram del club (@clubdeboxeo_rendirsejamas).

import type { StaticImageData } from "next/image";

import veladaBrazos from "@/assets/fotos/velada-brazos-arriba.jpg";
import veladaEsquina from "@/assets/fotos/velada-esquina.jpg";
import veladaGolpe from "@/assets/fotos/velada-golpe-cuerdas.jpg";
import veladaIntercambio from "@/assets/fotos/velada-intercambio.jpg";
import veladaArbitro from "@/assets/fotos/velada-arbitro.jpg";
import gimnasioSparring1 from "@/assets/fotos/gimnasio-sparring-1.jpg";
import gimnasioSparring2 from "@/assets/fotos/gimnasio-sparring-2.jpg";
import nacionalGanador from "@/assets/fotos/nacional-ganador.jpg";
import nacionalGanadora from "@/assets/fotos/nacional-ganadora.jpg";
import nacionalEquipo from "@/assets/fotos/nacional-equipo.jpg";
import equipoGimnasio from "@/assets/fotos/equipo-gimnasio.jpg";
import sudamericano from "@/assets/fotos/sudamericano-cinturon.jpg";
import patio2024Pera from "@/assets/fotos/patio-2024-pera.jpg";
import patio2024Sacos from "@/assets/fotos/patio-2024-sacos.jpg";
import patio2023Ring from "@/assets/fotos/patio-2023-ring.jpg";
import patio2023Flexiones from "@/assets/fotos/patio-2023-flexiones.jpg";
import patio2023Sparring from "@/assets/fotos/patio-2023-sparring.jpg";
import patio2023Guardia from "@/assets/fotos/patio-2023-guardia.jpg";

export type Foto = {
  src?: StaticImageData; // vacío = placeholder que describe la toma necesaria
  alt: string;
  toma?: string; // indicación para el fotógrafo (solo placeholders)
  pos?: string; // object-position cuando el recorte importa
};

export const pendiente = (valor: string) => valor.startsWith("[");

// Dominio real: definir NEXT_PUBLIC_SITE_URL al publicar (lo usan metadata, sitemap, robots y JSON-LD).
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const club = {
  nombre: "Rendirse Jamás",
  ciudad: "Molina",
  region: "Maule",
  pais: "Chile",
  // Confirmados por el club (oct. 2026):
  direccion: "Cámara de Comercio de Molina, costado PDI",
  mapa: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Cámara de Comercio de Molina, Molina, Maule, Chile")}`,
  whatsapp: "56910215807", // formato internacional, solo dígitos
  telefono: "+56 9 1021 5807",
  dias: "Lunes, miércoles y viernes",
  lema: "Disciplina, respeto y corazón",
  instagram: "https://www.instagram.com/clubdeboxeo_rendirsejamas/",
  instagramDM: "https://ig.me/m/clubdeboxeo_rendirsejamas",
  facebook: "https://www.facebook.com/share/1FycCDSNY7/",
  fundado: "[AÑO]",
};

const mensajeReserva = "Hola, quiero probar una clase en Rendirse Jamás.";

// Sin número de WhatsApp, la reserva cae al mensaje directo de Instagram (también es canal real del club).
export const reservar = pendiente(club.whatsapp)
  ? club.instagramDM
  : `https://wa.me/${club.whatsapp}?text=${encodeURIComponent(mensajeReserva)}`;
export const canalReserva = pendiente(club.whatsapp) ? "Instagram" : "WhatsApp";

export const nav = [
  { href: "/#club", label: "El Club" },
  { href: "/#entrenamiento", label: "Entrenamiento" },
  { href: "/#horarios", label: "Horarios" },
  { href: "/#entrenadores", label: "Entrenadores" },
  { href: "/#veladas", label: "Veladas" },
  { href: "/#galeria", label: "Galería" },
  { href: "/#contacto", label: "Contacto" },
];

// ── 01 Hero ──────────────────────────────────────────
export const hero = {
  bajada:
    "Club de boxeo en Molina. Empoderamos a nuestros luchadores para alcanzar sus metas y competimos en veladas a nivel nacional.", // IG: bio
  foto: {
    src: veladaBrazos,
    alt: "Boxeador del club con los brazos en alto bajo los focos del ring, en la velada de Molina",
    pos: "50% 30%",
  } satisfies Foto,
};

// ── 02 Manifiesto ────────────────────────────────────
export const manifiesto = {
  golpe: ["Caer está permitido.", "Quedarse en la lona, no."],
  frases: [
    { texto: "El ego se queda afuera. Los guantes hablan adentro.", fuente: "Afiche del Sparring Masivo" }, // IG
    { texto: "El talento abre puertas. El trabajo constante construye campeones.", fuente: "Después del Torneo Rey de Copas" }, // IG
  ],
  valores: ["Disciplina", "Respeto", "Corazón"], // lema del club, confirmado
};

// ── 03 Familia boxeo ─────────────────────────────────
export const historia = {
  titulo: "Todo comenzó en un patio.", // IG: reel @profehugobox con el club
  cita: "No había un gran gimnasio. No había implementos. No había recursos. Solo había niños con sueños, jóvenes buscando un lugar donde pertenecer y personas que creían que el deporte podía cambiar vidas.",
  firma: "Profe Hugo · @profehugobox",
  etapas: [
    {
      fecha: "Abr. 2023",
      titulo: "Patio de tierra",
      texto: "Cuerdas amarradas a postes de madera. El primer ring.",
      foto: { src: patio2023Ring, alt: "Entrenamiento al aire libre en un patio de tierra, con un ring hecho de cuerdas y postes" },
    },
    {
      fecha: "Abr. 2024",
      titulo: "Patio techado",
      texto: "Sacos colgados del techo y la familia creciendo.",
      foto: { src: patio2024Sacos, alt: "Jóvenes golpeando sacos en un patio techado con banderines" },
    },
    {
      fecha: "May. 2026",
      titulo: "Gimnasio",
      texto: "Ring, sacos y una familia que ya no cabe en la foto.",
      foto: { src: equipoGimnasio, alt: "Foto grupal de todo el equipo del club dentro del gimnasio, con los puños en guardia" },
    },
  ],
  ficha: [
    { k: "Ciudad", v: "Molina, Región del Maule" },
    { k: "Disciplina", v: "Boxeo · debut en kickboxing 2026" }, // IG
    { k: "Compite en", v: "Veladas y torneos a nivel nacional" }, // IG: bio
    { k: "Fundado", v: club.fundado },
  ],
};

// ── 04 Entrenamiento ─────────────────────────────────
// Validar con el club: descripciones basadas en lo que muestran sus fotos.
export const entrenamiento = [
  {
    titulo: "Técnica",
    texto: "Guardia, desplazamientos, golpes y defensa. La base de todo lo demás.",
    foto: { src: patio2024Pera, alt: "Dos boxeadores trabajando con la pera de doble elástico" },
  },
  {
    titulo: "Saco y físico",
    texto: "Rounds de saco, cuerda y trabajo de suelo. Aquí se construye el aire.",
    foto: { src: patio2023Flexiones, alt: "Boxeadores haciendo flexiones sobre la tierra del patio" },
  },
  {
    titulo: "Sparring",
    texto: "Cabezal, guantes y control. Se aprende a pelear peleando, con respeto por el compañero.",
    foto: { src: gimnasioSparring1, alt: "Dos boxeadores con cabezal posando en el ring del gimnasio antes del sparring" },
  },
  {
    titulo: "Competencia",
    texto: "Para quien quiere subir al ring: preparación para veladas y torneos.",
    foto: { src: veladaIntercambio, alt: "Intercambio de golpes en el ring durante una velada", pos: "60% 40%" },
  },
] satisfies { titulo: string; texto: string; foto: Foto }[];

// ── 05 Horarios ──────────────────────────────────────
// Días confirmados por el club; falta la hora.
export const horarios = [
  { dia: "Lunes", hora: "[HH:MM – HH:MM]", clase: "Boxeo" },
  { dia: "Miércoles", hora: "[HH:MM – HH:MM]", clase: "Boxeo" },
  { dia: "Viernes", hora: "[HH:MM – HH:MM]", clase: "Boxeo" },
];

// ── 06 Entrenadores ──────────────────────────────────
export const esquina: Foto = {
  src: veladaEsquina,
  alt: "En la esquina del ring, el entrenador acomoda el cabezal de un boxeador del club entre rounds",
  pos: "55% 40%",
};

// Confirmados por el club. Juliana: resultado del Torneo Nacional Rey de Copas (IG).
export const entrenadores = [
  {
    nombre: "Profe Hugo",
    detalle: "Entrenador",
    instagram: "profehugobox",
    foto: { alt: "Retrato de Profe Hugo", toma: "Retrato vertical en el gimnasio, luz lateral, mirada a cámara." },
  },
  {
    nombre: "Juliana Cruz",
    detalle: "Entrenadora · Vicecampeona nacional 63 kg",
    instagram: "juliana_fighter_coach",
    foto: { alt: "Retrato de Juliana Cruz", toma: "Retrato vertical vendando las manos de una alumna." },
  },
] satisfies { nombre: string; detalle: string; instagram: string; foto: Foto }[];

// ── 07 Veladas ───────────────────────────────────────
export const velada = {
  // IG: afiches y nota de El Portal Maulino
  nombre: "Legado sobre el ring",
  rojo: "Rendirse Jamás",
  azul: "Patricio Lontué Bravo",
  fecha: "19 jun. 2026",
  lugar: "Gimnasio Municipal de Molina",
  detalle: "Velada amateur intercomunal · 6 combates · entrada liberada",
  foto: { src: veladaArbitro, alt: "El árbitro reúne a los dos boxeadores al centro del ring antes del combate" } satisfies Foto,
};

export const logros = [
  { fecha: "Oct. 2026", evento: "Sudamericano Open Interestilos · Curicó", resultado: "Debut en kickboxing: campeón peso medio pesado" },
  { fecha: "Ago. 2026", evento: "Torneo Nacional Rey de Copas", resultado: "8 peleadores · 3 oros, 3 platas, 2 bronces" },
  { fecha: "2026", evento: "Velada en Buin", resultado: "4 de 5 combates ganados" },
]; // IG

export const ciudades = ["Molina", "Talca", "Curicó", "Buin", "Colbún"]; // IG: veladas y jornadas

// ── 08 Galería ───────────────────────────────────────
export const galeria: Foto[] = [
  { src: veladaGolpe, alt: "Recto de derecha a través de las cuerdas durante la velada" },
  { src: nacionalGanadora, alt: "La árbitra levanta la mano de una boxeadora del club tras ganar su combate" },
  { src: patio2023Sparring, alt: "Sparring con manoplas en el ring de cuerdas del patio de tierra" },
  { src: sudamericano, alt: "Medalla, cinturón de campeón y bandera de Chile con el escudo del club", pos: "50% 40%" },
  { src: nacionalGanador, alt: "Un boxeador del club celebra con el brazo en alto en el Torneo Rey de Copas" },
  { src: gimnasioSparring2, alt: "Dos boxeadores con cabezal en el ring del gimnasio" },
  { src: nacionalEquipo, alt: "El equipo con sus medallas y trofeos después del torneo nacional" },
];

// ── 09 Tu primera clase ──────────────────────────────
export const primeraClase = {
  rounds: [
    { titulo: "Escríbenos", texto: "Cuéntanos si ya entrenaste o si es tu primera vez. Te decimos qué día venir." },
    { titulo: "Llega con tiempo", texto: "Diez minutos antes. Ropa cómoda, zapatillas y agua." },
    { titulo: "Entrena", texto: "Calentamiento, técnica y saco. Nadie te pide saber nada el primer día." },
  ],
  traer: ["Ropa deportiva", "Zapatillas", "Botella de agua", "[¿GUANTES Y VENDAS O LOS PRESTA EL CLUB?]"],
  foto: { src: patio2023Guardia, alt: "Un boxeador del club en guardia durante un entrenamiento al aire libre" } satisfies Foto,
};

// ── 10 Cierre ────────────────────────────────────────
export const cierre = {
  frase: "Todo gran proyecto comienza igual: con un sueño, un patio y la decisión de no rendirse jamás.", // IG
};

export const creditos = "Fotos de velada: @team.ghostchile. Resto: Instagram del club.";
