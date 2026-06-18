// All feature content in ES + EN.
// Each feature maps to a YouTube video and a section on the guide page.

export const features = [
  {
    id: 'audio',
    youtubeId: 'ZlNxRuffGRI',
    eyebrow: {
      es: 'Transcripciones y resúmenes de voz',
      en: 'Voice transcripts and summaries',
    },
    title: {
      es: 'Leé, no escuches',
      en: "Read, don't listen",
    },
    description: {
      es: 'Convertí los audios largos de WhatsApp en texto y resúmenes concisos. Ponete al día en segundos, no en minutos.',
      en: 'Turn long WhatsApp voice notes into readable text and concise summaries. Catch up in seconds, not minutes.',
    },
  },
  {
    id: 'keyboard',
    youtubeId: 'y2FxDSKFHmg',
    eyebrow: {
      es: 'Atajos de teclado',
      en: 'Keyboard shortcuts',
    },
    title: {
      es: 'WhatsApp a la velocidad del rayo',
      en: 'WhatsApp at lightning speed',
    },
    description: {
      es: 'Todo en Volt funciona con el teclado. Navegá WhatsApp sin tocar el trackpad con atajos de teclado.',
      en: 'Everything in Volt works with the keyboard. Fly through WhatsApp without touching your trackpad.',
    },
  },
  {
    id: 'scheduling',
    youtubeId: 'dDSltP0t9fM',
    eyebrow: {
      es: 'Mensajes programados',
      en: 'Scheduled messages',
    },
    title: {
      es: 'Enviá en el momento perfecto',
      en: 'Send at the perfect time',
    },
    description: {
      es: 'Escribí tus mensajes de WhatsApp cuando quieras y programalos para que se envíen en el momento perfecto para tus clientes, donde sea que estén.',
      en: 'Write your WhatsApp messages when it suits you and schedule them to be sent at the perfect time for your clients, wherever they are.',
    },
  },
  {
    id: 'tasks',
    youtubeId: 'yure4WO9aLU',
    eyebrow: {
      es: 'Tareas y recordatorios',
      en: 'Tasks & reminders',
    },
    title: {
      es: 'Nada se te escapa',
      en: 'Nothing slips through',
    },
    description: {
      es: 'Convertí mensajes importantes de WhatsApp en tareas y recordatorios para que los seguimientos nunca se pierdan, directamente desde WhatsApp.',
      en: 'Turn important WhatsApp messages into tasks and reminders so follow-ups never slip through the cracks, directly from WhatsApp.',
    },
  },
  {
    id: 'workspaces',
    youtubeId: null,
    eyebrow: {
      es: 'Gestión de chats y grupos',
      en: 'Group and chat management',
    },
    title: {
      es: 'Tus chats, ordenados',
      en: 'Your chats, sorted',
    },
    description: {
      es: 'Organizá chats y grupos en espacios de trabajo para que siempre veas las conversaciones correctas para cada cliente, proyecto o equipo.',
      en: 'Organize chats and groups into focused workspaces so you always see the right conversations for each client, project, or team.',
    },
  },
  {
    id: 'broadcast',
    youtubeId: 'LYu76DE8vTU',
    eyebrow: {
      es: 'Difusión de mensajes',
      en: 'Message broadcasts',
    },
    title: {
      es: 'Llegá a cientos en minutos',
      en: 'Reach hundreds in minutes',
    },
    description: {
      es: 'Enviá mensajes a toda tu lista de contactos. Activá difusiones personalizadas y segmentadas con soporte para contenido enriquecido.',
      en: 'Message your entire contact lists. Trigger personalized segmented WhatsApp broadcasts with rich media support.',
    },
  },
]

export const ui = {
  nav: {
    guide: { es: 'Guía de Volt', en: 'Volt Guide' },
  },
  hero: {
    title: {
      es: 'La app de WhatsApp más poderosa para profesionales y equipos.',
      en: 'The most powerful WhatsApp app for professionals and teams.',
    },
    cta: { es: 'Empezá a explorar', en: 'Start exploring' },
  },
  features: {
    heading: { es: 'Las funcionalidades', en: 'The features' },
    subheading: {
      es: 'La app para el que tiene demasiado WhatsApp.',
      en: 'The app for people with too much WhatsApp.',
    },
  },
  footer: {
    tagline: {
      es: 'La experiencia de WhatsApp más rápida del mundo.',
      en: 'The fastest WhatsApp experience on earth.',
    },
  },
  gettingStarted: {
    eyebrow: { es: 'Cómo empezar', en: 'How to get started' },
    title: { es: 'Tres pasos para empezar.', en: 'Three steps to get started.' },
    steps: [
      {
        id: 'download',
        title: { es: 'Descargá Volt', en: 'Download Volt' },
        desc: { es: 'Disponible para Mac y Windows. Instalación en minutos.', en: 'Available for Mac and Windows. Ready in minutes.' },
        cta: { es: 'Descargar', en: 'Download' },
        href: 'https://www.voltchat.com/download',
      },
      {
        id: 'whatsapp',
        title: { es: 'Tu WhatsApp en Volt', en: 'Your WhatsApp in Volt' },
        desc: { es: 'Abrí Volt y escaneá el código QR con tu teléfono para vincular tu cuenta de WhatsApp.', en: 'Open Volt and scan the QR code with your phone to link your WhatsApp account.' },
        cta: null,
        href: null,
      },
      {
        id: 'cloud',
        title: { es: 'Volt Cloud', en: 'Volt Cloud' },
        desc: { es: 'Escaneá el QR de Volt Cloud para desbloquear el 100% de las funcionalidades, incluyendo IA y mensajes programados.', en: 'Scan the Volt Cloud QR to unlock 100% of features, including AI and scheduled messages.' },
        cta: null,
        href: null,
      },
    ],
  },
  tasks: {
    eyebrow: { es: 'Tareas & Recordatorios', en: 'Tasks & Reminders' },
    title: { es: 'Programá y gestioná tus tareas desde Volt.', en: 'Schedule and manage your tasks from Volt.' },
    subtitle: {
      es: 'Programá las tareas que surgen desde los chats y gestionálas desde Volt.',
      en: 'Schedule tasks that come up in your chats and manage them from Volt.',
    },
    steps: [
      {
        es: 'Pasá el cursor sobre el mensaje: aparece un checkbox en la esquina. Hacé clic y Volt redacta la tarea.',
        en: 'Hover over the message: a checkbox appears in the corner. Click it and Volt drafts the task.',
      },
      {
        es: 'Confirmá la fecha, asignala y guardá.',
        en: 'Confirm the date, assign it, and save.',
      },
      {
        es: 'Dirigite a Tareas, debajo de Inbox, y desde ahí gestionás todas tus tareas.',
        en: 'Go to Tasks, below Inbox, and manage all your tasks from there.',
      },
    ],
    tip: {
      es: 'Podés asignar tareas a cualquier integrante del equipo y ver en un solo lugar qué tiene pendiente cada uno.',
      en: 'You can assign tasks to any team member and see everyone\'s pending items in one place.',
    },
  },
  sendLater: {
    eyebrow: { es: 'Mensajes programados', en: 'Scheduled messages' },
    title: { es: 'Enviá en el momento perfecto.', en: 'Send at the perfect time.' },
    description: {
      es: 'Escribí un mensaje en cualquier chat y usá el botón "Enviar más tarde" para elegir cuándo se envía. Funciona aunque tu computadora esté apagada.',
      en: 'Write a message in any chat and use the "Send later" button to choose when it sends. Works even if your computer is off.',
    },
    tip: {
      es: 'Después de escribir el mensaje, presioná ⌘S en Mac o Ctrl+S en Windows para programarlo directamente sin tocar el mouse.',
      en: 'After writing your message, press ⌘S on Mac or Ctrl+S on Windows to schedule it without touching the mouse.',
    },
  },
}
