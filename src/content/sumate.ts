export const sumate = {
  seo: {
    title: "Súmate",
    description:
      "Solicita apoyo, dona, sé voluntario o conviértete en aliado de Fundación Alas de Bondad.",
  },
  hero: {
    eyebrow: "Participa",
    title: "Hay más de una forma de hacer parte.",
    lede: "Si necesitas apoyo, o si puedes donar, ofrecer tiempo o abrir una puerta en tu empresa, este es el lugar para empezar.",
  },
  paths: [
    {
      id: "apoyo-intro",
      title: "Solicitar apoyo",
      text: "Personas con discapacidad, cuidadores y familias pueden escribirnos para orientación, interés en un programa o un primer acompañamiento.",
      href: "#apoyo",
      hrefLabel: "Ir al formulario",
    },
    {
      id: "voluntariado",
      title: "Ser voluntario",
      text: "Si quieres aportar tiempo, oficio o acompañamiento, cuéntanos quién eres y cómo puedes ayudar. Te respondemos con lo que necesitamos ahora.",
      href: "#apoyo",
      hrefLabel: "Registrarme como voluntario",
    },
    {
      id: "aliados",
      title: "Ser aliado",
      text: "Empresas, organizaciones y personas que quieran inclusión laboral, patrocinio o una alianza de trabajo conjunto: escríbenos con el motivo «Quiero ser aliado».",
      href: "#apoyo",
      hrefLabel: "Proponer una alianza",
    },
  ],
  donate: {
    id: "donar",
    title: "Cómo donar",
    text: "Puedes consignar a la cuenta de ahorros de la fundación. El pago en línea todavía no está disponible.",
    details: [
      { label: "Banco", value: "BBVA Colombia" },
      { label: "Tipo de cuenta", value: "Ahorros empresarial" },
      { label: "Número", value: "00130209000200008344" },
    ],
    href: "#apoyo",
    hrefLabel: "Pedir información para donar",
  },
  form: {
    id: "apoyo",
    title: "Escríbenos",
    intro: "Un solo formulario. Elige el motivo: solicitar apoyo, voluntariado, alianza, información de donaciones u otro.",
  },
} as const;
