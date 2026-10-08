# Rendirse Jamás — sitio oficial

Club de boxeo en Molina, Región del Maule, Chile. Next.js 16 (App Router) + Tailwind v4, sitio estático.

```bash
npm install
npm run dev        # desarrollo en http://localhost:3000
npm run build      # build de producción (estático)
npm start          # sirve el build
```

## Editar contenido

Todo el texto, datos y fotos del sitio están en **`src/content.ts`**.

- Lo que está entre `[CORCHETES]` es información pendiente del club (hora de entrenamiento, año de fundación, si se prestan guantes). Para listarlo: `grep -n '"\[' src/content.ts`.
- Los placeholders nunca se publican en los datos para Google (JSON-LD): se omiten solos.
- Fotos: `src/assets/fotos/`. Para cambiar una, reemplaza el archivo o la importación en `content.ts`. Todas reciben el mismo tratamiento B/N automáticamente.
- Una foto sin `src` se muestra como "Foto pendiente" con la descripción de la toma (`toma`), útil como lista para el fotógrafo.

## Publicar

Definir la URL real antes del build (la usan metadata, Open Graph, sitemap, robots y JSON-LD):

```bash
NEXT_PUBLIC_SITE_URL=https://dominio-del-club.cl npm run build
```

## Notas

- Las fotos vienen del Instagram del club (@clubdeboxeo_rendirsejamas); las de la velada de Molina son de @team.ghostchile. Confirmar con el club el permiso de publicación, en especial de menores.
- `src/assets/fonts/*.ttf` solo se usan para generar la imagen para redes (`src/app/opengraph-image.tsx`) en el build; el sitio usa Archivo variable vía `next/font`.
