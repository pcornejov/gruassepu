export const site = {
  name: "Grúas Sepu",
  shortName: "Sepu",
  tagline: "Grúa 24/7 en San Carlos, Chillán y toda la Región de Ñuble",
  description:
    "Grúa cama 24/7 en San Carlos, Chillán y toda la Región de Ñuble. Rescate, traslado de vehículos siniestrados, plumas e izaje, y traslado de maquinaria. Escríbenos por WhatsApp y salimos de inmediato.",

  phone: "+56 9 9312 8876",
  phoneHref: "tel:+56993128876",
  whatsapp: "56993128876",

  region: "Región de Ñuble",
  hq: "San Carlos",
  travelNote:
    "Con base en San Carlos. También viajamos al sur del país y a Santiago según disponibilidad — consúltanos tu ruta.",
  travelChip: "Viajes a Santiago y el sur",
  comunas: [
    "Chillán",
    "Chillán Viejo",
    "Bulnes",
    "San Carlos",
    "Coihueco",
    "Quillón",
    "Pinto",
    "San Ignacio",
    "Ruta 5 Sur",
  ],
  hours: "24 horas, todos los días",

  services: [
    {
      title: "Grúa cama",
      description:
        "Traslado de todo tipo de vehículos: autos, camionetas y camiones sobre plataforma.",
      icon: "truck",
      waText: "Hola Grúas Sepu, necesito una grúa cama para trasladar mi vehículo.",
    },
    {
      title: "Rescate y emergencias",
      description:
        "Asistencia en ruta y rescate vehicular cuando quedas varado. Respondemos 24/7.",
      icon: "life-buoy",
      waText: "Hola Grúas Sepu, quedé varado y necesito rescate/asistencia en ruta ahora.",
    },
    {
      title: "Vehículos siniestrados",
      description:
        "Trasladamos autos accidentados o chocados con el máximo cuidado.",
      icon: "car-front",
      waText: "Hola Grúas Sepu, tuve un accidente y necesito trasladar mi vehículo siniestrado.",
    },
    {
      title: "Plumas · Izaje",
      description:
        "Izaje y movimiento con nuestro camión-grúa ARGO 915 y brazo hidráulico.",
      icon: "crane",
      waText: "Hola Grúas Sepu, necesito servicio de pluma / izaje.",
    },
    {
      title: "Traslado de maquinaria",
      description: "Tractores, generadores y maquinaria agrícola. Carga pesada, sin problemas.",
      icon: "tractor",
      waText: "Hola Grúas Sepu, necesito trasladar maquinaria (tractor/generador/agrícola).",
    },
    {
      title: "Seguro de carga",
      description:
        "Tu vehículo viaja protegido: contamos con seguro de carga en cada traslado.",
      icon: "shield-check",
      waText: "Hola Grúas Sepu, quiero cotizar un traslado con seguro de carga.",
    },
  ],

  whyUs: [
    {
      title: "Respuesta rápida",
      description: "Contestamos al instante y salimos a la ruta sin demora.",
      icon: "zap",
      accent: "red",
    },
    {
      title: "Cobertura en toda Ñuble",
      description: "Chillán, Chillán Viejo, Bulnes, San Carlos y toda la Ruta 5 Sur.",
      icon: "map-pin",
      accent: "yellow",
    },
    {
      title: "Experiencia y responsabilidad",
      description: "Años moviendo vehículos y maquinaria pesada con seguridad.",
      icon: "award",
      accent: "navy",
    },
    {
      title: "Atención directa",
      description: "Hablas con nosotros, no con un call center. Trato cercano y claro.",
      icon: "phone-call",
      accent: "navy",
    },
    {
      title: "Seguro de carga",
      description: "Tu vehículo protegido durante todo el traslado.",
      icon: "shield-check",
      accent: "yellow",
    },
  ],

  claims: [
    "Rápido · Seguro · Confiable",
    "¡Llegamos donde nos necesites!",
    "Tu tranquilidad, nuestro compromiso",
    "Atención 24/7",
  ],

  social: {
    instagram: "https://instagram.com/gruas_sepu",
    instagramHandle: "@gruas_sepu",
  },

  // Token de "Cloudflare Web Analytics" (Cloudflare dashboard → Analytics →
  // Web Analytics → Site tag). Dejar vacío desactiva el script por completo.
  cloudflareAnalyticsToken: "b6761ad814d442de812d61bee1e30e7c",
} as const;

export const defaultWaText =
  "Hola Grúas Sepu, necesito una grúa. Estoy en [ubicación]. Mi vehículo es [tipo].";

/** Arma un link de WhatsApp con mensaje pre-cargado (URL-encoded). */
export function waLink(text: string = defaultWaText): string {
  const message = text || defaultWaText;
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Une BASE_URL (con o sin barra final) con una ruta relativa, sin duplicar/perder barras. */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, "");
  const cleanPath = path.replace(/^\/+/, "");
  return `${base}/${cleanPath}`;
}
