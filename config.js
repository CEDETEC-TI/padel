// ============================================================
// CONFIGURACIÓN — NachoAcademia (demo)
// Todo el contenido de este sitio es de ejemplo. Para reutilizar
// esta plantilla con un cliente real, basta con editar los valores
// de este archivo — el resto del sitio (index.html) no necesita
// tocarse.
// ============================================================

const CONFIG = {
  // ---- Datos de la academia ----
  nombre: "NachoAcademia",
  ciudad: "Formosa Capital",
  tagline: "Aprendé a jugar al aire libre",

  // ---- Contacto (de ejemplo) ----
  whatsapp: "5493704111222",
  whatsappDisplay: "+54 370 411-1222",
  instagram: "nachoacademia",

  // ---- Ubicación (de ejemplo) ----
  direccion: "Av. Gutnisky 3450, Formosa Capital",
  // Coordenadas aproximadas dentro de Formosa Capital, para el mapa.
  lat: -26.1945,
  lng: -58.1552,

  // ---- Horarios ----
  horarios: [
    { dia: "Lunes a viernes", horario: "8:00 a 22:00" },
    { dia: "Sábados", horario: "9:00 a 20:00" },
    { dia: "Domingos", horario: "9:00 a 13:00" },
  ],

  // ---- El profe ----
  profe: {
    nombre: "Facundo Leiva",
    bio: "Jugó torneos del circuito regional del litoral durante ocho años antes de volcarse a la enseñanza. Formado en metodología de pádel, se especializa en llevar a jugadores de cero a su primer torneo amistoso.",
    foto: "https://images.unsplash.com/photo-1581093685663-15359ae60832?fm=jpg&q=80&w=900&auto=format&fit=crop",
  },

  // ---- Tipos de clases ----
  clases: [
    {
      nombre: "Individuales",
      desc: "Una hora a solas con el profe, a tu ritmo. Ideal para corregir técnica o prepararte para un torneo puntual.",
    },
    {
      nombre: "Grupales",
      desc: "Grupos de hasta 4 personas, mismo nivel. La forma más social de progresar — y la más elegida.",
    },
    {
      nombre: "Para chicos",
      desc: "Desde los 6 años, con pelotas y canchas adaptadas. Clases cortas, mucho juego, cero presión.",
    },
    {
      nombre: "Competencia",
      desc: "Para quienes ya juegan y quieren dar el salto a torneos: táctica, volea alta y trabajo físico específico.",
    },
  ],

  // ---- Novedades (contenido de ejemplo) ----
  novedades: [
    {
      titulo: "Torneo de bienvenida de primavera",
      texto: "Dobles mixtos, todos los niveles. Inscripción abierta para alumnos y no alumnos.",
      fecha: "15 de noviembre",
      foto: "https://images.unsplash.com/photo-1673266893159-f522a5e9e036?fm=jpg&q=80&w=900&auto=format&fit=crop",
    },
    {
      titulo: "Clínica con jugador invitado",
      texto: "Una tarde de técnica avanzada: volea, bandeja y víbora, de la mano de un jugador del circuito.",
      fecha: "22 de noviembre",
      foto: "https://images.unsplash.com/photo-1766675083720-4e0ebfd05019?fm=jpg&q=80&w=900&auto=format&fit=crop",
    },
    {
      titulo: "2x1 en clases grupales de verano",
      texto: "Traé a un amigo y las primeras dos clases grupales de diciembre salen por el precio de una.",
      fecha: "Válido desde el 1° de diciembre",
      foto: "https://images.unsplash.com/photo-1759819599208-0b79a7f3f347?fm=jpg&q=80&w=900&auto=format&fit=crop",
    },
  ],

  // ---- Opiniones (contenido de ejemplo) ----
  opiniones: [
    { nombre: "Marina T.", texto: "Empecé sin haber tocado una pala en mi vida y en dos meses ya jugaba partidos sociales. El profe tiene mucha paciencia." },
    { nombre: "Rodrigo A.", texto: "Las clases grupales son un golazo: se arma buen grupo y terminás quedando con los compañeros para jugar aparte." },
    { nombre: "Celeste B.", texto: "Llevé a mi hijo a las clases de chicos y quedó encantado. Vuelve cansado pero feliz todas las semanas." },
  ],
};
