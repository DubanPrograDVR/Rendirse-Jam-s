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
import akiramenaiSeminario from "@/assets/fotos/akiramenai-seminario.jpg";
import akiramenaiGrados from "@/assets/fotos/akiramenai-grados.jpg";

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
  dias: "Lunes, miércoles, viernes y sábado",
  lema: "Disciplina, respeto y corazón",
  instagram: "https://www.instagram.com/clubdeboxeo_rendirsejamas/",
  instagramDM: "https://ig.me/m/clubdeboxeo_rendirsejamas",
  facebook: "https://www.facebook.com/profile.php?id=100091523393950",
  fundado: "Diciembre de 2022", // FB: "hoy celebramos un año de vida" (30 dic. 2023)
  fundadoISO: "2022-12",
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
  { href: "/#jiu-jitsu", label: "Jiu-jitsu" },
  { href: "/#horarios", label: "Horarios" },
  { href: "/#entrenadores", label: "Entrenadores" },
  { href: "/#veladas", label: "Veladas" },
  { href: "/#prensa", label: "Prensa" },
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
      texto: "Cuerdas amarradas a postes, canchas y plazas de noche: se entrenaba donde se pudiera.", // IG + FB (abr. 2023)
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
    { k: "Fundado", v: club.fundado },
    { k: "Ciudad", v: "Molina, Región del Maule" },
    { k: "Entrenamos", v: club.dias },
    { k: "Técnico", v: "Entrenador federado en boxeo" }, // FB del club: Federación Chilena de Boxeo
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

// ── 05 Akiramenai (jiu-jitsu) ────────────────────────
// Club de jiu-jitsu brasileño dentro del club, de los mismos fundadores. IG: @akiramenai_caes_de_rua_molina
export const akiramenai = {
  nombre: "Akiramenai",
  japones: "諦めない",
  bajada: "Jiu-jitsu brasileño · Afiliados a Caes de Rua",
  texto:
    "Akiramenai significa «no rendirse» en japonés. Es el club de jiu-jitsu brasileño que nació dentro de Rendirse Jamás, de los mismos fundadores: el mismo gimnasio, la misma familia, otra forma de pelear.",
  cita: "No se trata solo de aprender Jiu-Jitsu. Se trata de formar carácter, disciplina y personas capaces de levantarse cada vez que caen.", // IG Akiramenai
  lema: "Treine. Supere. Nunca se rinda.", // IG Akiramenai (portugués)
  modalidades: ["Gi · con kimono", "No-Gi · sin kimono", "Formación real desde cero", "Seminarios y ascenso de grados"],
  instagram: "https://www.instagram.com/akiramenai_caes_de_rua_molina/",
  usuario: "@akiramenai_caes_de_rua_molina",
  fotos: [
    { src: akiramenaiSeminario, alt: "El equipo de Akiramenai con kimonos y cinturones después del seminario y ascenso de grados", pos: "50% 60%" },
    { src: akiramenaiGrados, alt: "Alumnos de jiu-jitsu en fila durante la ceremonia de ascenso de grados" },
  ] satisfies Foto[],
};

// ── 06 Horarios ──────────────────────────────────────
// Días confirmados por el club; falta la hora.
export const horarios = [
  { dia: "Lunes", hora: "18:00 hrs", clase: "Boxeo" },
  { dia: "Miércoles", hora: "18:00 hrs", clase: "Boxeo" },
  { dia: "Viernes", hora: "18:00 hrs", clase: "Boxeo" },
  { dia: "Sábado", hora: "18:00 hrs", clase: "Boxeo" },
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

// Recorrido del club, de lo más antiguo a lo más reciente. Fuentes: Facebook e Instagram del club.
// Solo hitos con participación confirmada en sus publicaciones (sin nombres de deportistas menores).
export const recorridoCita = {
  texto: "Desde que comenzamos siempre tuvimos sueños, y se han ido concretando gracias a nuestros alumn@s.",
  fuente: "El club, febrero de 2025",
};

export const recorrido: { anio: string; hitos: { mes: string; evento: string; resultado?: string }[] }[] = [
  { anio: "2022", hitos: [{ mes: "Dic.", evento: "Nace el club en Molina" }] },
  {
    anio: "2023",
    hitos: [
      { mes: "Abr.", evento: "Primeros entrenamientos", resultado: "Patio de tierra, canchas y plazas" },
      { mes: "Sep.", evento: "Campeonato Nacional · Iquique", resultado: "Primer nacional del club: vicecampeón" },
      { mes: "Nov.", evento: "Torneo en Talcahuano" },
      { mes: "Dic.", evento: "Primer aniversario" },
    ],
  },
  {
    anio: "2024",
    hitos: [
      { mes: "May.", evento: "Velada interregional · Colbún" },
      { mes: "Jun.", evento: "Velada del club en Molina" },
      { mes: "Oct.", evento: "Velada en Colbún" },
      { mes: "Dic.", evento: "Nacional adulto-juvenil femenino", resultado: "2 vicecampeonas y 1 tercer lugar" },
    ],
  },
  {
    anio: "2025",
    hitos: [{ mes: "Jul.", evento: "Guantes de Oro Región del Maule · Talca", resultado: "1 campeón y 2 vicecampeones" }],
  },
  {
    anio: "2026",
    hitos: [
      { mes: "Ene.", evento: "Velada en Molina", resultado: "24 de enero, con cobertura de Radio Montina" }, // Radio Montina, YouTube
      { mes: "Feb.", evento: "Velada en Curicó · Gimnasio Abraham Milad", resultado: "3 triunfos por RSC; dos boxeadores clasifican para competir en Argentina" }, // Primera Fuente
      { mes: "May.", evento: "Noche de Campeones · San Pedro de la Paz", resultado: "Un boxeador del club disputa el título sudamericano amateur WPC Patagonia" }, // VLN Radio
      { mes: "", evento: "Velada en Buin", resultado: "4 de 5 combates ganados" },
      { mes: "Jun.", evento: "Legado sobre el ring · Molina", resultado: "Velada intercomunal, 6 combates" },
      { mes: "Ago.", evento: "Torneo Nacional Rey de Copas", resultado: "8 peleadores · 3 oros, 3 platas y 2 bronces" },
      { mes: "Oct.", evento: "Sudamericano Open Interestilos · Curicó", resultado: "Debut en kickboxing: campeón peso medio pesado" },
    ],
  },
];

export const ciudades = ["Molina", "Iquique", "Talcahuano", "Talca", "Curicó", "Colbún", "Buin"];

// ── 09 Prensa ────────────────────────────────────────
// Solo apariciones verificadas (investigación oct. 2026; notas en research_notes/). Más reciente primero.
// Los resúmenes evitan nombres de deportistas: el club debe confirmar que no son menores antes de nombrarlos.
export type NotaPrensa = {
  fecha: string;
  medio: string;
  tipo: string;
  titular: string;
  resumen: string;
  url: string;
  extra?: boolean; // true = va en "Más apariciones" (desplegable)
};

export const prensa: NotaPrensa[] = [
  {
    fecha: "4 ago. 2026",
    medio: "VLN Radio",
    tipo: "Nota",
    titular: "Club Rendirse Jamás brilla en Santiago en competencia boxeril",
    resumen: "Los títulos y subcampeonatos del club en el Torneo Nacional Rey de Copas.",
    url: "https://www.vlnradio.cl/noticias/deportes/2026/08/04/club-rendirse-jamas-brilla-en-santiago-en-competencia-boxeril/",
  },
  {
    fecha: "1 ago. 2026",
    medio: "Hoy Se Combate",
    tipo: "Video",
    titular: "Juliana Cruz, boxeadora amateur",
    resumen: "Perfil de la entrenadora y boxeadora del club.",
    url: "https://www.instagram.com/hoy_se_combate/reel/DbhN0NHMiJx/",
  },
  {
    fecha: "3 jul. 2026",
    medio: "Extrovertidos.cl",
    tipo: "Video",
    titular: "Lo que fue la velada de boxeo Molina 2026",
    resumen: "Resumen en video de la velada de junio en Molina.",
    url: "https://www.instagram.com/extrovertidos.cl/reel/DaV1b5NptRi/",
    extra: true,
  },
  {
    fecha: "25 jun. 2026",
    medio: "VLN Radio",
    tipo: "Nota",
    titular: "Exitosa velada boxeril se desarrolló en Molina",
    resumen: "La velada intercomunal de junio en Molina, con seis combates oficiales.",
    url: "https://www.vlnradio.cl/noticias/deportes/2026/06/25/exitosa-velada-boxeril-se-desarrollo-en-molina/",
  },
  {
    fecha: "20 jun. 2026",
    medio: "El Portal Maulino",
    tipo: "Publicación",
    titular: "Exitosa velada de boxeo en Molina",
    resumen: "Crónica de la velada contra Patricio Bravo, con declaraciones del entrenador del club.",
    url: "https://www.instagram.com/el_portal_maulino/p/DZ1KR4QAM5I/",
    extra: true,
  },
  {
    fecha: "18 jun. 2026",
    medio: "Aca Panoramas",
    tipo: "Publicación",
    titular: "Legado sobre el ring: Molina vivirá una gran velada de boxeo",
    resumen: "Anuncio de la velada intercomunal en el Gimnasio Municipal de Molina.",
    url: "https://www.instagram.com/aca_panoramas/p/DZu6OaBDhOS/",
    extra: true,
  },
  {
    fecha: "17 jun. 2026",
    medio: "Corporación de Deportes Molina",
    tipo: "Publicación",
    titular: "¡Molina vs. Lontué: legado sobre el ring!",
    resumen: "La corporación anuncia la velada y presenta a los equipos.",
    url: "https://www.instagram.com/corpodeportesmolina/p/DZtOa-ClX3A/",
    extra: true,
  },
  {
    fecha: "16 jun. 2026",
    medio: "El Portal Maulino",
    tipo: "Publicación",
    titular: "Molina vivirá una gran noche de boxeo",
    resumen: "Anuncio de la velada del 19 de junio en el Gimnasio Municipal.",
    url: "https://www.instagram.com/el_portal_maulino/p/DZp3JvNAwoP/",
    extra: true,
  },
  {
    fecha: "16 jun. 2026",
    medio: "Kaneno Sport",
    tipo: "Video",
    titular: "El boxeo de Molina se vistió de gala",
    resumen: "La visita del excampeón mundial Carlos Cruzat al club.",
    url: "https://www.instagram.com/kaneno_sport/reel/DZpgF3oOo2p/",
  },
  {
    fecha: "4 jun. 2026",
    medio: "VLN Radio",
    tipo: "Nota",
    titular: "El excampeón Carlos Cruzat dictará un seminario de primer nivel en Molina",
    resumen: "El seminario que organizó el club y la historia de sus inicios en un patio de tierra.",
    url: "https://www.vlnradio.cl/noticias/deportes/2026/06/04/el-excampeon-carlos-cruzat-dictara-un-seminario-de-primer-nivel-en-molina/",
  },
  {
    fecha: "4 jun. 2026",
    medio: "El Portal Maulino",
    tipo: "Publicación",
    titular: "¡Carlos Cruzat llega a la comuna de Molina!",
    resumen: "El anuncio de la visita del excampeón mundial, invitado por el club.",
    url: "https://www.instagram.com/el_portal_maulino/p/DZLjco3AAVx/",
    extra: true,
  },
  {
    fecha: "30 abr. 2026",
    medio: "Nova TV Canal 7",
    tipo: "Entrevista TV",
    titular: "¡Hoy más que nunca necesitamos de ustedes!",
    resumen: "Entrevista a un boxeador del club antes de su pelea por un título sudamericano (fragmento publicado por el club).",
    url: "https://www.instagram.com/clubdeboxeo_rendirsejamas/reel/DXx4WMcN8dE/",
  },
  {
    fecha: "23 abr. 2026",
    medio: "VLN Radio",
    tipo: "Nota",
    titular: "Boxeador de Molina disputará título sudamericano en gala “Noche de Campeones” en San Pedro de la Paz",
    resumen: "Un boxeador del club va por el título sudamericano amateur WPC Patagonia.",
    url: "https://www.vlnradio.cl/noticias/deportes/2026/04/23/boxeador-de-molina-disputara-titulo-sudamericano-en-gala-noche-de-campeones-en-san-pedro-de-la-paz/",
  },
  {
    fecha: "22 feb. 2026",
    medio: "Primera Fuente",
    tipo: "Nota",
    titular: "Destacada actuación del Club de Boxeo Rendirse Jamás en velada realizada en Curicó",
    resumen: "Tres triunfos por RSC en el Gimnasio Abraham Milad y dos boxeadores clasificados para competir en Argentina.",
    url: "https://primerafuente.cl/deportes/2026/02/22/destacada-actuacion-del-club-de-boxeo-rendirse-jamas-en-velada-realizada-en-curico/",
  },
  {
    fecha: "22 feb. 2026",
    medio: "musicaynoticias.cl",
    tipo: "Nota",
    titular: "Boxeadores molinenses triunfan por RSC en velada realizada en el Gimnasio Abraham Milad",
    resumen: "La misma velada en Curicó, contada desde Molina.",
    url: "https://www.musicaynoticias.cl/deportes/boxeadores-molinenses-triunfan-por-rsc-en-velada-realizada-en-el-gimnasio-abraham-milad/",
    extra: true,
  },
  {
    fecha: "22 feb. 2026",
    medio: "Corporación de Deportes Curicó",
    tipo: "Video",
    titular: "Noche de Boxeo en Curicó",
    resumen: "Video de la velada en el Gimnasio Abraham Milad.",
    url: "https://www.instagram.com/corporaciondedeportescurico/reel/DVEsEH2CHov/",
    extra: true,
  },
  {
    fecha: "18 feb. 2026",
    medio: "YouTube · Conócete a ti mismo",
    tipo: "Video",
    titular: "Club de Boxeo Rendirse Jamás",
    resumen: "Registro de 28 minutos de la velada del 24 de enero en Molina.",
    url: "https://www.youtube.com/watch?v=00OZhNXteqY",
    extra: true,
  },
  {
    fecha: "26 ene. 2026",
    medio: "Radio Montina",
    tipo: "Video",
    titular: "¡Molina vibró con el mejor boxeo!",
    resumen: "La velada del 24 de enero de 2026 en Molina.",
    url: "https://www.instagram.com/radiomontina/reel/DT-Wc85jkMU/",
  },
  {
    fecha: "Abr. 2025", // fecha a confirmar a mano (la página no la muestra con claridad)
    medio: "De Pancho a Pancho",
    tipo: "Nota",
    titular: "Senadora Ximena Rincón acogió demanda de club de boxeo de Molina que requiere de un espacio físico para sus entrenamientos",
    resumen: "El club pide un lugar propio para entrenar: la pelea fuera del ring.",
    url: "https://depanchoapancho.com/senadora-ximena-rincon-acogio-demanda-de-club-de-boxeo-de-molina-que-requiere-de-un-espacio-fisico-para-sus-entrenamientos/",
  },
  {
    fecha: "3 mar. 2025",
    medio: "Radio 7 Tazas de Molina",
    tipo: "Entrevista en video",
    titular: "Entrevista al Club de Boxeo Rendirse Jamás Molina",
    resumen: "La radio de Molina conoce en profundidad al club, en su propio lugar de entrenamiento.",
    url: "https://www.facebook.com/Radio7TazasdeMolinaFM/videos/1161589238290965/",
  },
];

// ── 10 Galería ───────────────────────────────────────
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
