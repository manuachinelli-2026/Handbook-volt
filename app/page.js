'use client'

import { motion } from 'framer-motion'
import { useLanguage, t } from '@/contexts/language'
import { Container } from '@/components/container'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { TipCallout } from '@/components/tip-callout'
import { FadeUp, FadeIn, SlideIn, ScaleIn } from '@/components/animate'
import { ui } from '@/data/features'

const ease = [0.22, 1, 0.36, 1]
const vp = { once: true, margin: '-5%' }

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  const { lang } = useLanguage()
  const h = ui.hero
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center bg-white">
      <div className="w-full px-6 pb-24 pt-32 text-center">
        <FadeIn>
          <svg viewBox="0 0 24 24" className="mx-auto mb-8 h-12 w-12" fill="none">
            <path d="M13 2L3 14h8l-1 8 11-12h-8l1-8z" fill="#1a1a1a" />
          </svg>
        </FadeIn>
        <FadeUp delay={0.1}>
          <h1 className="mx-auto max-w-3xl text-5xl font-normal tracking-tighter text-gray-950 sm:text-6xl lg:text-7xl">
            {t(h.title, lang)}
          </h1>
        </FadeUp>
        <FadeUp delay={0.3}>
          <div className="mt-28 flex flex-col items-center gap-3">
            <span className="font-inter text-sm font-normal text-gray-400">{t(h.cta, lang)}</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            >
              <svg className="size-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </motion.div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

// ─── Getting Started ──────────────────────────────────────────────────────────

const stepIcons = {
  download: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
      <path d="M13 2L3 14h8l-1 8 11-12h-8l1-8z" fill="#1a1a1a" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="#1a1a1a" strokeWidth={1.5}>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <path strokeLinecap="round" d="M14 14h.01M18 14h.01M14 18h.01M18 18h.01M16 16h.01" />
    </svg>
  ),
  cloud: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
      <path d="M17.5 19H9a5 5 0 01-.5-9.97A7 7 0 0119 13a4 4 0 01-1.5 6z" stroke="#1a1a1a" strokeWidth={1.5} strokeLinejoin="round" />
      <path d="M13 13l-2 3h3l-2 3" stroke="#58b836" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
}

function GettingStarted() {
  const { lang } = useLanguage()
  const s = ui.gettingStarted
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <FadeUp className="text-center">
          <p className="font-inter text-xs/5 font-normal uppercase tracking-widest text-gray-400">{t(s.eyebrow, lang)}</p>
          <h2 className="mx-auto mt-3 max-w-xl text-4xl font-normal tracking-tighter text-gray-950 sm:text-5xl">{t(s.title, lang)}</h2>
        </FadeUp>

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          {s.steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 32, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease, delay: i * 0.15 }}
              viewport={vp}
              className="flex flex-col items-center rounded-2xl bg-white p-5 text-center shadow-xs ring-1 ring-black/5"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gray-50 ring-1 ring-black/5">
                {stepIcons[step.id]}
              </div>
              <h3 className="text-sm font-semibold tracking-tight text-gray-950">{t(step.title, lang)}</h3>
              <p className="mt-1.5 font-inter text-sm/6 text-gray-500">{t(step.desc, lang)}</p>
              {step.href && (
                <a
                  href={step.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#1a1a1a] px-4 py-1.5 font-inter text-xs font-semibold text-white transition hover:bg-volt-green"
                >
                  {t(step.cta, lang)}
                  <svg className="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

// ─── Tasks Section ─────────────────────────────────────────────────────────────
// Layout: text LEFT · images RIGHT · bg-gray-50

function TasksMockup() {
  const shots = [
    { src: '/screenshots/task-hover.png',    alt: 'Hover sobre el mensaje' },
    { src: '/screenshots/task-drafting.png', alt: 'Volt redacta la tarea' },
    { src: '/screenshots/task-modal.png',    alt: 'Confirmá y guardá' },
  ]
  return (
    <div className="space-y-4">
      {shots.map((s, i) => (
        <motion.img
          key={s.src}
          src={s.src}
          alt={s.alt}
          className="w-full rounded-2xl shadow-sm ring-1 ring-black/5"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: i * 0.14 }}
          viewport={vp}
        />
      ))}
    </div>
  )
}

function TasksSection() {
  const { lang } = useLanguage()
  const s = ui.tasks
  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          <SlideIn from="left" className="lg:sticky lg:top-28">
            <p className="font-inter text-xs/5 font-normal uppercase tracking-widest text-volt-green">{t(s.eyebrow, lang)}</p>
            <h2 className="mt-3 text-4xl font-normal tracking-tighter text-gray-950 sm:text-5xl">{t(s.title, lang)}</h2>
            <ol className="mt-6 space-y-3">
              {s.steps.map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gray-200 font-inter text-xs font-semibold text-gray-600">{i + 1}</span>
                  <span className="font-inter text-base/7 text-gray-600">{t(step, lang)}</span>
                </li>
              ))}
            </ol>
            <TipCallout className="mt-8">{t(s.tip, lang)}</TipCallout>
          </SlideIn>
          <SlideIn from="right" delay={0.15}>
            <TasksMockup />
          </SlideIn>
        </div>
      </Container>
    </section>
  )
}

// ─── Send Later Section ────────────────────────────────────────────────────────
// Layout: images LEFT · text RIGHT · bg-white

function SendLaterSection() {
  const { lang } = useLanguage()
  const s = ui.sendLater
  const tipText = lang === 'es'
    ? <>Después de escribir el mensaje, presioná{' '}
        <kbd className="inline-flex items-center rounded-md border border-gray-200 bg-white px-2 py-0.5 font-mono text-xs text-gray-700 shadow-xs">⌘S</kbd>
        {' '}en Mac o{' '}
        <kbd className="inline-flex items-center rounded-md border border-gray-200 bg-white px-2 py-0.5 font-mono text-xs text-gray-700 shadow-xs">Ctrl+S</kbd>
        {' '}en Windows para programarlo sin tocar el mouse.</>
    : <>After writing your message, press{' '}
        <kbd className="inline-flex items-center rounded-md border border-gray-200 bg-white px-2 py-0.5 font-mono text-xs text-gray-700 shadow-xs">⌘S</kbd>
        {' '}on Mac or{' '}
        <kbd className="inline-flex items-center rounded-md border border-gray-200 bg-white px-2 py-0.5 font-mono text-xs text-gray-700 shadow-xs">Ctrl+S</kbd>
        {' '}on Windows to schedule it without touching the mouse.</>

  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          {/* Images — left: button strip on top, time picker below */}
          <SlideIn from="left">
            <div className="space-y-4">
              {/* Step 1: the Send Later button in chat */}
              <div>
                <p className="mb-2 font-inter text-xs font-semibold uppercase tracking-widest text-gray-400">
                  {lang === 'es' ? 'Paso 1 — Clic en "Send Later"' : 'Step 1 — Click "Send Later"'}
                </p>
                <div className="overflow-hidden rounded-2xl bg-gray-50 p-3 ring-1 ring-black/5">
                  <motion.img
                    src="/screenshots/send-later-button.png"
                    alt="Botón Send Later"
                    className="w-full rounded-xl object-contain shadow-sm"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease }}
                    viewport={vp}
                  />
                </div>
              </div>
              {/* Step 2: the time picker */}
              <div>
                <p className="mb-2 font-inter text-xs font-semibold uppercase tracking-widest text-gray-400">
                  {lang === 'es' ? 'Paso 2 — Elegí cuándo enviarlo' : 'Step 2 — Choose when to send it'}
                </p>
                <motion.img
                  src="/screenshots/send-later-time.png"
                  alt="Elegir cuándo enviarlo"
                  className="w-full rounded-2xl shadow-sm ring-1 ring-black/5"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease, delay: 0.14 }}
                  viewport={vp}
                />
              </div>
            </div>
          </SlideIn>
          {/* Text — right */}
          <SlideIn from="right" delay={0.15} className="lg:sticky lg:top-28">
            <p className="font-inter text-xs/5 font-normal uppercase tracking-widest text-volt-green">{t(s.eyebrow, lang)}</p>
            <h2 className="mt-3 text-4xl font-normal tracking-tighter text-gray-950 sm:text-5xl">{t(s.title, lang)}</h2>
            <p className="mt-5 font-inter text-base/7 text-gray-500">{t(s.description, lang)}</p>
            <TipCallout>{tipText}</TipCallout>
          </SlideIn>
        </div>
      </Container>
    </section>
  )
}

// ─── Voice Transcription Section ───────────────────────────────────────────────
// Layout: text LEFT · image RIGHT · bg-gray-50

function VoiceTranscriptionSection() {
  const { lang } = useLanguage()
  const s = ui.voiceTranscription
  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          <SlideIn from="left" className="lg:sticky lg:top-28">
            <p className="font-inter text-xs/5 font-normal uppercase tracking-widest text-volt-green">{t(s.eyebrow, lang)}</p>
            <h2 className="mt-3 text-4xl font-normal tracking-tighter text-gray-950 sm:text-5xl">{t(s.title, lang)}</h2>
            <p className="mt-5 font-inter text-base/7 text-gray-500">{t(s.description, lang)}</p>
            <p className="mt-4 font-inter text-base/7 italic text-gray-400">{t(s.useCases, lang)}</p>
            <TipCallout>{t(s.tip, lang)}</TipCallout>
          </SlideIn>
          <SlideIn from="right" delay={0.15}>
            <img src="/screenshots/voice-transcription.png" alt="Transcripción con IA" className="w-full rounded-2xl shadow-lg ring-1 ring-black/5" />
          </SlideIn>
        </div>
      </Container>
    </section>
  )
}

// ─── App Store Section ─────────────────────────────────────────────────────────
// Layout: image LEFT · text RIGHT · bg-white

function AppStoreSection() {
  const { lang } = useLanguage()
  const s = ui.appStore
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Image — left */}
          <SlideIn from="left">
            <img src="/screenshots/app-store.png" alt="Volt App Store" className="w-full max-w-md rounded-2xl shadow-lg ring-1 ring-black/5" />
          </SlideIn>
          {/* Text — right */}
          <SlideIn from="right" delay={0.15}>
            <p className="font-inter text-xs/5 font-normal uppercase tracking-widest text-volt-green">{t(s.eyebrow, lang)}</p>
            <h2 className="mt-3 text-4xl font-normal tracking-tighter text-gray-950 sm:text-5xl">{t(s.title, lang)}</h2>
            <p className="mt-5 font-inter text-base/7 text-gray-500">{t(s.description, lang)}</p>
            <TipCallout>{t(s.tip, lang)}</TipCallout>
          </SlideIn>
        </div>
      </Container>
    </section>
  )
}

// ─── AI Integration Section ────────────────────────────────────────────────────
// Full-width break — centered, light green tint, large screenshot

function AiIntegrationSection() {
  const { lang } = useLanguage()
  const s = ui.aiIntegration
  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <FadeUp>
            <span className="inline-flex items-center gap-2 rounded-full border border-volt-green/40 bg-volt-green/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-volt-green" />
              <span className="font-inter text-xs font-semibold uppercase tracking-widest text-volt-green">{t(s.eyebrow, lang)}</span>
            </span>
            <h2 className="mt-6 text-4xl font-normal tracking-tighter text-gray-950 sm:text-5xl">{t(s.title, lang)}</h2>
            <p className="mt-5 font-inter text-base/7 text-gray-500">{t(s.description, lang)}</p>
          </FadeUp>
        </div>

        <ScaleIn delay={0.2}>
          <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl shadow-xl ring-2 ring-volt-green/15">
            <img src="/screenshots/ai-integration.png" alt="IA conectada a Volt" className="w-full" />
          </div>
        </ScaleIn>

        <FadeUp delay={0.3}>
          <p className="mx-auto mt-6 max-w-2xl text-center font-inter text-sm/6 italic text-gray-400">{t(s.example, lang)}</p>
          <p className="mt-4 text-center font-inter text-sm font-medium text-gray-400">{t(s.cta, lang)}</p>
        </FadeUp>
      </Container>
    </section>
  )
}

// ─── Privacy Mode Section ──────────────────────────────────────────────────────
// Full-width break — centered text, full-width screenshot · bg-white

function PrivacyModeSection() {
  const { lang } = useLanguage()
  const s = ui.privacyMode
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <FadeUp>
            <p className="font-inter text-xs/5 font-normal uppercase tracking-widest text-volt-green">{t(s.eyebrow, lang)}</p>
            <h2 className="mt-3 text-4xl font-normal tracking-tighter text-gray-950 sm:text-5xl">{t(s.title, lang)}</h2>
            <p className="mt-5 font-inter text-base/7 text-gray-500">{t(s.description, lang)}</p>
            <div className="mt-6 inline-flex items-center gap-3">
              <kbd className="inline-flex items-center rounded-md border border-gray-200 bg-white px-2.5 py-1 font-mono text-sm text-gray-700 shadow-xs">⌘D</kbd>
              <span className="font-inter text-sm text-gray-400">/</span>
              <kbd className="inline-flex items-center rounded-md border border-gray-200 bg-white px-2.5 py-1 font-mono text-sm text-gray-700 shadow-xs">Ctrl+D</kbd>
            </div>
          </FadeUp>
        </div>
        <ScaleIn delay={0.15}>
          <div className="mx-auto mt-12 max-w-lg overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5">
            <img src="/screenshots/privacy-mode.png" alt="Privacy mode" className="w-full" />
          </div>
        </ScaleIn>
      </Container>
    </section>
  )
}

// ─── Shortcuts Section ─────────────────────────────────────────────────────────
// Layout: image LEFT · text RIGHT · bg-gray-50

function ShortcutsSection() {
  const { lang } = useLanguage()
  const s = ui.shortcuts
  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <SlideIn from="left">
            <div className="flex justify-center lg:justify-start">
              <img src="/screenshots/shortcuts-menu.png" alt="Keyboard Shortcuts" className="w-64 rounded-2xl shadow-lg ring-1 ring-black/5" />
            </div>
          </SlideIn>
          <SlideIn from="right" delay={0.15}>
            <p className="font-inter text-xs/5 font-normal uppercase tracking-widest text-volt-green">{t(s.eyebrow, lang)}</p>
            <h2 className="mt-3 text-4xl font-normal tracking-tighter text-gray-950 sm:text-5xl">{t(s.title, lang)}</h2>
            <p className="mt-5 font-inter text-base/7 text-gray-500">{t(s.description, lang)}</p>
            <TipCallout>{t(s.tip, lang)}</TipCallout>
          </SlideIn>
        </div>
      </Container>
    </section>
  )
}

// ─── Lists Section ─────────────────────────────────────────────────────────────
// Layout: text LEFT · images RIGHT · bg-white

function ListsSection() {
  const { lang } = useLanguage()
  const s = ui.lists
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          <SlideIn from="left" className="lg:sticky lg:top-28">
            <p className="font-inter text-xs/5 font-normal uppercase tracking-widest text-volt-green">{t(s.eyebrow, lang)}</p>
            <h2 className="mt-3 text-4xl font-normal tracking-tighter text-gray-950 sm:text-5xl">{t(s.title, lang)}</h2>
            <p className="mt-5 font-inter text-base/7 text-gray-500">{t(s.description, lang)}</p>
            <TipCallout>
              <span className="block">{t(s.tip1, lang)}</span>
              <span className="mt-2 block">{t(s.tip2, lang)}</span>
            </TipCallout>
          </SlideIn>
          <SlideIn from="right" delay={0.15}>
            <div className="flex items-start gap-4">
              <motion.img
                src="/screenshots/lists-workspaces.png"
                alt="Workspace lists"
                className="w-1/2 rounded-2xl shadow-sm ring-1 ring-black/5"
                initial={{ opacity: 0, x: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, ease }}
                viewport={vp}
              />
              <motion.img
                src="/screenshots/lists-private.png"
                alt="Private lists"
                className="w-1/2 rounded-2xl shadow-sm ring-1 ring-black/5"
                initial={{ opacity: 0, x: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, ease, delay: 0.12 }}
                viewport={vp}
              />
            </div>
          </SlideIn>
        </div>
      </Container>
    </section>
  )
}

// ─── Broadcast Section ─────────────────────────────────────────────────────────
// Layout: text LEFT · images RIGHT · bg-gray-50

function BroadcastSection() {
  const { lang } = useLanguage()
  const s = ui.broadcast
  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          <SlideIn from="left" className="lg:sticky lg:top-28">
            <p className="font-inter text-xs/5 font-normal uppercase tracking-widest text-volt-green">{t(s.eyebrow, lang)}</p>
            <h2 className="mt-3 text-4xl font-normal tracking-tighter text-gray-950 sm:text-5xl">{t(s.title, lang)}</h2>
            <p className="mt-5 font-inter text-base/7 text-gray-500">{t(s.description, lang)}</p>
            <TipCallout>{t(s.tip, lang)}</TipCallout>
          </SlideIn>

          {/* Right: 3 numbered steps */}
          <SlideIn from="right" delay={0.15}>
            <div className="space-y-5">
              {/* Step 1 — open Broadcast */}
              <div>
                <p className="mb-2 font-inter text-xs font-semibold uppercase tracking-widest text-gray-400">
                  {lang === 'es' ? 'Paso 1 — Abrí Broadcast' : 'Step 1 — Open Broadcast'}
                </p>
                <motion.img
                  src="/screenshots/broadcast-menu.png"
                  alt="Acceder a Broadcast"
                  className="w-full rounded-2xl shadow-sm ring-1 ring-black/5"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease }}
                  viewport={vp}
                />
              </div>
              {/* Step 2 — choose type */}
              <div>
                <p className="mb-2 font-inter text-xs font-semibold uppercase tracking-widest text-gray-400">
                  {lang === 'es' ? 'Paso 2 — Elegí a quién enviar' : 'Step 2 — Choose who to send to'}
                </p>
                <motion.img
                  src="/screenshots/broadcast-type.png"
                  alt="Elegir tipo de broadcast"
                  className="w-full rounded-2xl shadow-sm ring-1 ring-black/5"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease, delay: 0.12 }}
                  viewport={vp}
                />
              </div>
              {/* Step 3 — compose, capped height so it doesn't overflow */}
              <div>
                <p className="mb-2 font-inter text-xs font-semibold uppercase tracking-widest text-gray-400">
                  {lang === 'es' ? 'Paso 3 — Redactá y enviá' : 'Step 3 — Write and send'}
                </p>
                <div className="max-h-80 overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5">
                  <motion.img
                    src="/screenshots/broadcast-compose.png"
                    alt="Redactar y enviar"
                    className="w-full object-top"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease, delay: 0.24 }}
                    viewport={vp}
                  />
                </div>
              </div>
            </div>
          </SlideIn>
        </div>
      </Container>
    </section>
  )
}

// ─── Mini Features ─────────────────────────────────────────────────────────────
// 3-card grid: Google Meet, Nuevo chat, Archivar lista · bg-white

const miniFeatures = [
  {
    key: 'meet',
    images: ['/screenshots/meet-command.png', '/screenshots/meet-link.png'],
    eyebrow: { es: 'Google Meet · Zoom', en: 'Google Meet · Zoom' },
    title: { es: 'Creá un link de reunión al instante.', en: 'Create a meeting link instantly.' },
    desc: {
      es: 'Escribí /meet o /zoom en cualquier chat para generar y compartir un link sin salir de Volt.',
      en: 'Type /meet or /zoom in any chat to generate and share a link without leaving Volt.',
    },
  },
  {
    key: 'newchat',
    images: ['/screenshots/new-chat.png'],
    eyebrow: { es: 'Nuevo chat', en: 'New chat' },
    title: { es: 'Escribile a cualquier número.', en: 'Message any number.' },
    desc: {
      es: 'Ingresá un número de teléfono directamente para abrir un chat, enviar un mensaje o programarlo.',
      en: 'Enter a phone number directly to start a chat, send a message, or schedule it.',
    },
  },
  {
    key: 'archive',
    images: ['/screenshots/archive-list.png'],
    eyebrow: { es: 'Archivar lista', en: 'Archive list' },
    title: { es: 'Antes de irte, archivá toda una lista.', en: 'Before you leave, archive an entire list.' },
    desc: {
      es: 'Clic derecho sobre una lista → Archive list. Todos los chats quedan archivados de una vez.',
      en: 'Right-click a list → Archive list. All chats in that list get archived at once.',
    },
  },
]

function MiniFeatures() {
  const { lang } = useLanguage()
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <FadeUp className="mb-12 text-center">
          <p className="font-inter text-xs/5 font-normal uppercase tracking-widest text-gray-400">
            {lang === 'es' ? 'Más funcionalidades' : 'More features'}
          </p>
        </FadeUp>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {miniFeatures.map((f, i) => (
            <motion.div
              key={f.key}
              className="overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow-sm"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease, delay: i * 0.15 }}
              viewport={vp}
            >
              {/* Image area — fixed height, gray bg, images centered */}
              <div className="flex h-52 items-center justify-center gap-2 bg-gray-50 px-4">
                {f.images.map((src) => (
                  <img
                    key={src}
                    src={src}
                    alt=""
                    className={`rounded-xl object-contain shadow-sm ring-1 ring-black/5 ${
                      f.images.length > 1 ? 'max-h-40 w-1/2' : 'max-h-44 max-w-full'
                    }`}
                  />
                ))}
              </div>
              {/* Text */}
              <div className="p-5">
                <p className="font-inter text-xs font-semibold uppercase tracking-widest text-volt-green">{t(f.eyebrow, lang)}</p>
                <h3 className="mt-2 text-lg font-normal tracking-tight text-gray-950">{t(f.title, lang)}</h3>
                <p className="mt-2 font-inter text-sm/6 text-gray-500">{t(f.desc, lang)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="overflow-x-clip bg-white">
      <Navbar />
      <Hero />
      <main>
        <GettingStarted />
        <TasksSection />
        <SendLaterSection />
        <VoiceTranscriptionSection />
        <AppStoreSection />
        <AiIntegrationSection />
        <PrivacyModeSection />
        <ShortcutsSection />
        <ListsSection />
        <BroadcastSection />
        <MiniFeatures />
      </main>
      <Footer />
    </div>
  )
}
