export const home = {
  seo: {
    title: "Fundación Alas de Bondad",
    description:
      "Bienestar, inclusión y oportunidades para personas con discapacidad, cuidadores, niños y familias en Madrid, Funza, Mosquera, Facatativá y Cundinamarca.",
  },
  hero: {
    eyebrow: "Fundación en Cundinamarca",
    title: "Bienestar y esperanza, cerca de casa.",
    lede: "Acompañamos a personas con discapacidad, madres cuidadoras, niños y familias que atraviesan situaciones económicas o sociales complejas. Trabajamos desde Madrid, Funza, Mosquera y Facatativá — para que el apoyo no dependa de llegar hasta Bogotá.",
    primaryCta: { href: "/sumate#apoyo", label: "Solicitar apoyo" },
    secondaryCta: { href: "/sumate", label: "Quiero ayudar" },
    aside:
      "Cualquier persona puede hacer parte: solicitar apoyo, donar, ser voluntaria o convertirse en aliada.",
    image: "home/equipo-alas-de-bondad.jpg",
    imageAlt:
      "Integrantes de la Fundación Alas de Bondad con camisetas azules de la fundación, junto a globos azules y dorados y el pendón con el logo. Uno de ellos está en silla de ruedas y levanta el pulgar.",
    imageWidth: 1024,
    imageHeight: 372,
    imageLayout: "wide",
    imageCredit: "",
    imageCreditHref: "",
  },
  audiences: {
    eyebrow: "A quiénes acompañamos",
    title: "Las personas primero. Después, las instituciones.",
    text: "Nuestro público principal son las personas con discapacidad —sobre todo jóvenes y adultos—, quienes cuidan, y los niños que viven vulnerabilidad económica o social. También caminamos con sus familias cuando el bienestar se ve afectado.",
    items: [
      "Personas con discapacidad",
      "Madres, padres y cuidadores",
      "Niños en situación de dificultad",
      "Familias que buscan orientación",
    ],
  },
  offerings: {
    eyebrow: "Qué hacemos",
    title: "Apoyo, formación y oportunidades de inclusión.",
    items: [
      {
        title: "Apoyo y orientación",
        text: "Acompañamos a quienes necesitan una primera respuesta: información, escucha y un camino posible.",
      },
      {
        title: "Formación",
        text: "Fortalecemos capacidades de personas con discapacidad, cuidadores y familias.",
      },
      {
        title: "Generación de ingresos",
        text: "Buscamos alternativas concretas para que las familias puedan sostenerse con más dignidad.",
      },
      {
        title: "Inclusión laboral",
        text: "Acercamos oportunidades de trabajo desde Madrid y los municipios vecinos, no solo desde la capital.",
      },
      {
        title: "Acompañamiento",
        text: "Seguimos cerca de las familias, los voluntarios y los aliados mientras el proceso avanza.",
      },
    ],
  },
  paths: {
    title: "Elige cómo vincularte.",
    text: "La página existe para que puedas entender quiénes somos y dar el siguiente paso sin rodeos.",
    items: [
      {
        title: "Solicitar apoyo",
        text: "Si tú o tu familia necesitan orientación o acompañamiento.",
        href: "/sumate#apoyo",
        hrefLabel: "Escribirnos",
      },
      {
        title: "Donar",
        text: "Tu aporte sostiene el trabajo con quienes más lo necesitan.",
        href: "/sumate#donar",
        hrefLabel: "Cómo donar",
      },
      {
        title: "Ser voluntario",
        text: "Tiempo y oficio también construyen oportunidades.",
        href: "/sumate#voluntariado",
        hrefLabel: "Ofrecer tiempo",
      },
      {
        title: "Ser aliado",
        text: "Empresas y organizaciones que quieren inclusión con responsabilidad.",
        href: "/sumate#aliados",
        hrefLabel: "Proponer una alianza",
      },
    ],
  },
  close: {
    title: "Desde el occidente de Cundinamarca, hacia más municipios.",
    text: "Hoy nuestra base está en Madrid, Funza, Mosquera y Facatativá. Queremos ampliar el impacto a otras regiones de Colombia con alianzas y proyectos. Detrás de la fundación hay personas que trabajan con compromiso; cualquiera puede sumarse a ese propósito.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Parque_de_la_Iglesia,_Madrid_Cundinamarca.jpg",
    imageAlt: "Parque de la Iglesia, en Madrid, Cundinamarca.",
    imageWidth: 884,
    imageHeight: 589,
    imageCredit: "Diego Rey, CC BY-SA 4.0",
    imageCreditHref: "https://commons.wikimedia.org/wiki/File:Parque_de_la_Iglesia,_Madrid_Cundinamarca.jpg",
  },
} as const;
