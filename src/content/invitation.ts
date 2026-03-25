export type Locale = "es" | "en";

export type EventFact = {
  label: string;
  value: string;
  icon: "calendar" | "clock" | "map-pin";
};

export type ScheduleItem = {
  time: string;
  label: string;
};

export type IntroContent = {
  prompt: string;
  note: string;
  image: {
    src: string;
    alt: string;
  };
};

export type HeroContent = {
  eyebrow: string;
  title: {
    partnerOne: string;
    partnerTwo: string;
  };
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  image: {
    src: string;
    alt: string;
  };
};

export type StoryContent = {
  title: string;
  quote: string;
};

export type MomentsContent = {
  title: string;
  caption: string;
  image: {
    src: string;
    alt: string;
  };
};

export type GiftContent = {
  title: string;
  description: string;
  statusLabel: string;
  note: string;
};

export type RsvpContent = {
  title: string;
  deadlineLabel: string;
  description: string;
  formTitle: string;
  fields: Array<{
    name: "name" | "email";
    label: string;
    type: "text" | "email";
    placeholder: string;
  }>;
  statusNote: string;
  ctaLabel: string;
};

export type InvitationContent = {
  locale: Locale;
  metadata: {
    title: string;
    description: string;
  };
  languageToggle: {
    label: string;
    spanish: string;
    english: string;
  };
  ui: {
    eventDetailsLabel: string;
    musicPlayLabel: string;
    musicPauseLabel: string;
  };
  coupleMonogram: string;
  countdown: {
    label: string;
    targetDateIso: string;
    units: {
      days: string;
      hours: string;
      minutes: string;
      seconds: string;
    };
  };
  intro: IntroContent;
  hero: HeroContent;
  story: StoryContent;
  eventFacts: EventFact[];
  schedule: {
    eyebrow: string;
    title: string;
    items: ScheduleItem[];
  };
  moments: MomentsContent;
  gifts: GiftContent;
  rsvp: RsvpContent;
};

export const defaultLocale: Locale = "es";

const sharedMedia = {
  introImage: {
    src: "/sello_oroo.png",
  },
  heroImage: {
    src: "/hero_boda.jpg",
  },
  momentsImage: {
    src: "/boda.jpg",
  },
};

const invitationContentByLocale: Record<Locale, InvitationContent> = {
  es: {
    locale: "es",
    metadata: {
      title: "Isabella & Sebastian",
      description: "Invitacion de boda de Isabella y Sebastian",
    },
    languageToggle: {
      label: "Idioma",
      spanish: "ES",
      english: "EN",
    },
    ui: {
      eventDetailsLabel: "Fecha, hora y lugar del evento",
      musicPlayLabel: "Reproducir musica",
      musicPauseLabel: "Pausar musica",
    },
    coupleMonogram: "I & S",
    countdown: {
      label: "Faltan solo",
      targetDateIso: "2026-09-05T17:00:00",
      units: {
        days: "Dias",
        hours: "Horas",
        minutes: "Minutos",
        seconds: "Segundos",
      },
    },
    intro: {
      prompt: "Abrir invitacion",
      note: "Toca para abrir la invitacion",
      image: {
        ...sharedMedia.introImage,
        alt: "Sello dorado de la invitacion de boda",
      },
    },
    hero: {
      eyebrow: "Invitacion de Boda",
      title: {
        partnerOne: "Isabella",
        partnerTwo: "Sebastian",
      },
      description:
        "Celebraremos su amor con una noche intima y elegante. Nos encantaria que nos acompanes para ser parte de este capitulo inolvidable.",
      primaryCta: {
        label: "Confirmar asistencia",
        href: "#rsvp",
      },
      image: {
        ...sharedMedia.heroImage,
        alt: "Retrato de la pareja",
      },
    },
    story: {
      title: "Nuestra Historia",
      quote:
        '"Desde el primer hola, supimos que este camino seria extraordinario. Con cada paso, la historia crecio en amor, risas y suenos compartidos..."',
    },
    eventFacts: [
      {
        label: "Fecha",
        value: "5 de Septiembre, 2026",
        icon: "calendar",
      },
      {
        label: "Hora",
        value: "17:00 Horas",
        icon: "clock",
      },
      {
        label: "Lugar",
        value: "Salon Central, Ciudad",
        icon: "map-pin",
      },
    ],
    schedule: {
      eyebrow: "Agenda",
      title: "Agenda de la noche",
      items: [
        { time: "17:00", label: "Ceremonia" },
        { time: "18:00", label: "Coctel de bienvenida" },
        { time: "19:30", label: "Cena y brindis" },
        { time: "22:00", label: "Baile y celebracion" },
      ],
    },
    moments: {
      title: "Nuestros Momentos",
      caption: "Isabella & Sebastian",
      image: {
        ...sharedMedia.momentsImage,
        alt: "Fotografia de Isabella y Sebastian",
      },
    },
    gifts: {
      title: "Mesa de Regalos",
      description:
        "Si deseas aportar a su nuevo hogar, aqui encontraras opciones cuando la mesa de regalos este disponible.",
      statusLabel: "Proximamente",
      note: "La informacion de regalos se compartira mas cerca de la fecha.",
    },
    rsvp: {
      title: "RSVP",
      deadlineLabel: "Favor de confirmar antes del 15 de Agosto",
      description:
        "Esta vista muestra el estilo del formulario. La confirmacion en linea aun no esta habilitada.",
      formTitle: "Vista previa de confirmacion",
      fields: [
        {
          name: "name",
          label: "Nombre completo",
          type: "text",
          placeholder: "NOMBRE COMPLETO",
        },
        {
          name: "email",
          label: "Correo electronico",
          type: "email",
          placeholder: "CORREO ELECTRONICO",
        },
      ],
      statusNote:
        "Pronto se activara una forma real de confirmar asistencia. Por ahora, este formulario no envia datos.",
      ctaLabel: "Confirmacion disponible pronto",
    },
  },
  en: {
    locale: "en",
    metadata: {
      title: "Isabella & Sebastian",
      description: "Wedding invitation for Isabella and Sebastian",
    },
    languageToggle: {
      label: "Language",
      spanish: "ES",
      english: "EN",
    },
    ui: {
      eventDetailsLabel: "Date, time, and venue",
      musicPlayLabel: "Play music",
      musicPauseLabel: "Pause music",
    },
    coupleMonogram: "I & S",
    countdown: {
      label: "Only",
      targetDateIso: "2026-09-05T17:00:00",
      units: {
        days: "Days",
        hours: "Hours",
        minutes: "Minutes",
        seconds: "Seconds",
      },
    },
    intro: {
      prompt: "Open invitation",
      note: "Tap to open the invitation",
      image: {
        ...sharedMedia.introImage,
        alt: "Gold wax seal on the wedding invitation",
      },
    },
    hero: {
      eyebrow: "Wedding Invitation",
      title: {
        partnerOne: "Isabella",
        partnerTwo: "Sebastian",
      },
      description:
        "We will celebrate their love with an intimate and elegant evening. We would love for you to join us and be part of this unforgettable chapter.",
      primaryCta: {
        label: "Confirm Attendance",
        href: "#rsvp",
      },
      image: {
        ...sharedMedia.heroImage,
        alt: "Portrait of the couple",
      },
    },
    story: {
      title: "Our Story",
      quote:
        '"From the very first hello, we knew this journey would be extraordinary. With every step, our story grew in love, laughter, and shared dreams..."',
    },
    eventFacts: [
      {
        label: "Date",
        value: "September 5, 2026",
        icon: "calendar",
      },
      {
        label: "Time",
        value: "5:00 PM",
        icon: "clock",
      },
      {
        label: "Venue",
        value: "Central Hall, City",
        icon: "map-pin",
      },
    ],
    schedule: {
      eyebrow: "Schedule",
      title: "Evening Schedule",
      items: [
        { time: "17:00", label: "Ceremony" },
        { time: "18:00", label: "Welcome cocktail" },
        { time: "19:30", label: "Dinner and toast" },
        { time: "22:00", label: "Dancing and celebration" },
      ],
    },
    moments: {
      title: "Our Moments",
      caption: "Isabella & Sebastian",
      image: {
        ...sharedMedia.momentsImage,
        alt: "Photograph of Isabella and Sebastian",
      },
    },
    gifts: {
      title: "Gift Registry",
      description:
        "If you would like to contribute to their new home, gift options will be shared once the registry is available.",
      statusLabel: "Coming soon",
      note: "Gift details will be shared closer to the date.",
    },
    rsvp: {
      title: "RSVP",
      deadlineLabel: "Please confirm by August 15",
      description:
        "This view shows the styling of the form. Online confirmation is not available yet.",
      formTitle: "Confirmation preview",
      fields: [
        {
          name: "name",
          label: "Full name",
          type: "text",
          placeholder: "FULL NAME",
        },
        {
          name: "email",
          label: "Email address",
          type: "email",
          placeholder: "EMAIL ADDRESS",
        },
      ],
      statusNote:
        "A real RSVP option will be enabled soon. For now, this form does not send any data.",
      ctaLabel: "Confirmation coming soon",
    },
  },
};

export function resolveLocale(value: string | string[] | undefined): Locale {
  if (Array.isArray(value)) {
    return resolveLocale(value[0]);
  }

  return value === "en" ? "en" : defaultLocale;
}

export function getInvitationContent(locale: Locale): InvitationContent {
  return invitationContentByLocale[locale];
}

export const invitationContent = invitationContentByLocale[defaultLocale];
