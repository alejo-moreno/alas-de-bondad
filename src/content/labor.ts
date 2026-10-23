export const labor = {
  seo: {
    title: "Informe 2025",
    description:
      "Entregas e inversión de la Fundación Alas de Bondad en 2025: regalos, kits, almuerzos inclusivos, mercados familiares y el resumen de la inversión.",
  },
  hero: {
    eyebrow: "Informe 2025",
    title: "Lo que se entregó y en qué se invirtió.",
    lede: "Estas son las entregas y la inversión registradas en 2025.",
    image: "labor/labor.jpeg",
    imageAlt:
      "Tres integrantes de la Fundación Alas de Bondad, con camisetas azules, organizan kits escolares, colores y regalos en una sala.",
    imageWidth: 1200,
    imageHeight: 1600,
    secondaryImage: "labor/labor-2.jpg",
    secondaryImageAlt:
      "Una integrante de la fundación, con camiseta azul, acompaña a una niña en silla de ruedas, vestida de blanco, junto a una carretera.",
    secondaryImageWidth: 1200,
    secondaryImageHeight: 1600,
  },
  deliveries: {
    title: "Impacto social y unidades entregadas",
    items: [
      {
        amount: "385",
        text: "Regalos de Navidad a niños y niñas en Bogotá y Madrid.",
      },
      {
        amount: "306",
        text: "Kits de aseo para personas habitantes de calle y fundaciones de resocialización.",
      },
      {
        amount: "150",
        text: "Almuerzos inclusivos en eventos comunitarios para personas con discapacidad.",
      },
      {
        amount: "100",
        text: "Kits escolares para garantizar el acceso y la permanencia educativa.",
      },
      {
        amount: "70",
        text: "Kits de cuidado personal entregados a madres cuidadoras en reconocimiento a su labor.",
      },
      {
        amount: "15",
        text: "Mercados familiares dirigidos a hogares vulnerables.",
      },
    ],
  },
  markets: {
    title: "Distribución del programa de mercados",
    text: "Detalle de los 15 mercados familiares, según el tipo de hogar.",
    columns: ["Tipo de población", "Mercados", "Beneficiarios únicos", "Inversión (COP)"],
    rows: [
      ["Madres cuidadoras", "6", "4", "$2.745.249"],
      ["Madres solteras / cabeza de familia", "4", "2", "$2.280.703"],
      ["Madres de familia", "3", "3", "$1.114.031"],
      ["Padres de familia", "2", "1", "$997.580"],
    ],
    total: ["Total", "15", "10", "$7.137.563"],
  },
  inclusion: {
    eyebrow: "Inclusión laboral",
    title: "El trabajo también tiene que poder empezar aquí.",
    text: "Hay organizaciones valiosas, muchas de ellas en Bogotá o cerca de la capital. Para familias de Madrid, Funza, Mosquera y Facatativá, esa distancia sigue siendo una barrera. Nuestra labor es fortalecer la atención y las oportunidades de inclusión desde Cundinamarca, y crecer hacia municipios cercanos.",
    note: "La alianza con Best Buddies nos ha permitido acercarnos a procesos de inclusión laboral. El siguiente paso es que más jóvenes de esta región puedan acceder y permanecer.",
  },
  investment: {
    title: "Resumen ejecutivo de inversión 2025",
    text: "La fila del programa de mercados corresponde a los $7.137.563 de la tabla anterior.",
    columns: ["Rubro", "Inversión (COP)", "% del total"],
    rows: [
      ["Donaciones varias y actividades sociales", "$15.349.319", "51.7%"],
      ["Programa de entrega de mercados", "$7.137.563", "24.0%"],
      ["Apoyo operativo y logístico (personal)", "$3.463.000", "11.7%"],
      ["Gastos de funcionamiento administrativo", "$1.858.080", "6.2%"],
      ["Gastos logísticos (transporte y alimentación)", "$1.903.600", "6.4%"],
    ],
    total: ["Total invertido", "$29.711.562", "100%"],
    href: "/sumate",
    hrefLabel: "Cómo sumarte",
  },
} as const;
