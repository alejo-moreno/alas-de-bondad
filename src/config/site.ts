export const themes = ["editorial", "warm", "professional", "minimal", "alas"] as const;
export type ThemeName = (typeof themes)[number];

export const themeColors: Record<ThemeName, string> = {
  editorial: "#f4efe6",
  warm: "#f4efe6",
  professional: "#f7f8fa",
  minimal: "#fcfcfc",
  alas: "#f7fafe",
};

export const schemaTypes = [
  "ProfessionalService",
  "LocalBusiness",
  "Organization",
] as const;
export type SchemaType = (typeof schemaTypes)[number];

export const site = {
  name: "Fundación Alas de Bondad",
  tagline: "Bienestar y esperanza para quienes más lo necesitan",
  description:
    "Fundación Alas de Bondad trabaja por el bienestar y la inclusión social y laboral de personas con discapacidad, madres cuidadoras, niños y familias en Madrid, Funza, Mosquera, Facatativá y Cundinamarca.",
  url: "https://example.com",
  locale: "es",
  theme: "alas" as ThemeName,
  schemaType: "Organization" as SchemaType,
  contact: {
    email: "[Correo]",
    phone: "[Teléfono]",
    whatsapp: "",
    whatsappMessage: "Hola — quiero contactar a Fundación Alas de Bondad.",
  },
  location: {
    address: "[Dirección]",
    city: "Madrid",
    region: "Cundinamarca",
    country: "Colombia",
    mapsUrl: "",
  },
  hours: [] as { days: string; time: string }[],
  social: {
    instagram: "https://www.instagram.com/fundacionalasdebondad",
    facebook: "https://www.facebook.com/share/1Gm5g2pP9p/",
    linkedin: "",
  },
  forms: {
    tallyFormId: "",
  },
  ogImage:
    "https://upload.wikimedia.org/wikipedia/commons/2/23/Parroquia_San_Francisco_de_Paula_de_Madrid_Cundinamarca..jpg",
};

export type Site = typeof site;
