# Bandeja Pádel — Sitio de academia (demo)

Sitio de una sola página para "Bandeja Pádel", academia de pádel ficticia (Formosa, Argentina). Pieza de demo/portfolio de [CEDETEC Digital](https://cedetec-ti.github.io/cedetec-sistema/), pensada para mostrarle a un cliente real del rubro cómo quedaría su web antes de vender el producto completo.

No representa un negocio real: nombre, profesor, dirección, horarios, novedades y opiniones son de ejemplo (marcados como tal en el sitio). No tiene backend, panel ni base de datos — es un sitio estático con contenido de muestra.

## Contenido

Sitio estático de un solo archivo (`index.html`, sin dependencias de build), con todos los datos editables centralizados en `config.js`:

- Portada con llamado a reservar clase por WhatsApp.
- Tipos de clases (individuales, grupales, para chicos, competencia), cada una con su propio botón de WhatsApp con el mensaje pre-armado.
- Sección sobre el profesor.
- Novedades (torneo, clínica, promoción) — contenido de ejemplo, marcado como tal.
- Opiniones de alumnos — contenido de ejemplo, marcado como tal.
- Ubicación con mapa embebido (OpenStreetMap) y botón "Cómo llegar".
- Horarios.
- Footer con Instagram y WhatsApp.

Para reutilizar esta plantilla con un cliente real alcanza con editar `config.js`; el resto del sitio no necesita tocarse.

Fotos de stock con licencia libre (Unsplash), sin logos de marcas.

## Deploy

Al ser HTML estático, se publica directo en GitHub Pages apuntando a la raíz del repo.
