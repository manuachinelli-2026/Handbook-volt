'use client'

import { motion } from 'framer-motion'
import { useLanguage, t } from '@/contexts/language'
import { Container } from '@/components/container'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { TipCallout } from '@/components/tip-callout'
import { FadeUp, FadeIn, SlideIn, Stagger, StaggerItem } from '@/components/animate'
import { ui } from '@/data/features'

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  const { lang } = useLanguage()
  const h = ui.hero

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center bg-white">
      <div className="w-full px-6 pb-24 pt-32 text-center">

        {/* Volt bolt — standalone, black */}
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

        {/* Scroll invitation — extra breathing room below heading */}
        <FadeUp delay={0.3}>
          <div className="mt-28 flex flex-col items-center gap-3">
            <span className="font-inter text-sm font-normal text-gray-400">
              {t(h.cta, lang)}
            </span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            >
              <svg
                className="size-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </motion.div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

// ─── Step icons ───────────────────────────────────────────────────────────────

const stepIcons = {
  download: (
    // Volt bolt
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
      <path d="M13 2L3 14h8l-1 8 11-12h-8l1-8z" fill="#1a1a1a" />
    </svg>
  ),
  whatsapp: (
    // QR code icon
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="#1a1a1a" strokeWidth={1.5}>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <path strokeLinecap="round" d="M14 14h.01M18 14h.01M14 18h.01M18 18h.01M16 16h.01" />
    </svg>
  ),
  cloud: (
    // Cloud + bolt
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
      <path d="M17.5 19H9a5 5 0 01-.5-9.97A7 7 0 0119 13a4 4 0 01-1.5 6z" stroke="#1a1a1a" strokeWidth={1.5} strokeLinejoin="round" />
      <path d="M13 13l-2 3h3l-2 3" stroke="#58b836" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
}

// ─── Getting Started ──────────────────────────────────────────────────────────

function GettingStarted() {
  const { lang } = useLanguage()
  const s = ui.gettingStarted

  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <FadeUp className="text-center">
          <p className="font-inter text-xs/5 font-normal uppercase tracking-widest text-gray-400">
            {t(s.eyebrow, lang)}
          </p>
          <h2 className="mx-auto mt-3 max-w-xl text-4xl font-normal tracking-tighter text-gray-950 sm:text-5xl">
            {t(s.title, lang)}
          </h2>
        </FadeUp>

        {/* 3 centered steps */}
        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
          {s.steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 28, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.15 }}
              viewport={{ once: true, margin: '-8%' }}
              className="flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-xs ring-1 ring-black/5"
            >
              {/* Icon */}
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-50 ring-1 ring-black/5">
                {stepIcons[step.id]}
              </div>

              <h3 className="text-base font-semibold tracking-tight text-gray-950">
                {t(step.title, lang)}
              </h3>
              <p className="mt-2 font-inter text-sm/6 text-gray-500">
                {t(step.desc, lang)}
              </p>

              {step.href && (
                <a
                  href={step.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-[#1a1a1a] px-4 py-2 font-inter text-xs font-semibold text-white transition hover:bg-volt-green"
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

        {/* Connecting dots between steps — desktop only */}
        <div className="relative mx-auto mt-0 hidden max-w-3xl sm:block" aria-hidden>
          <div className="absolute -top-[calc(50%+3rem)] left-[33%] right-[33%] h-px bg-gray-100" />
        </div>
      </Container>
    </section>
  )
}

// ─── Tasks Section ────────────────────────────────────────────────────────────

const taskScreenshots = [
  { src: '/screenshots/task-hover.png',    alt: 'Hover sobre el mensaje' },
  { src: '/screenshots/task-drafting.png', alt: 'Volt redacta la tarea con IA' },
  { src: '/screenshots/task-modal.png',    alt: 'Confirmá, asignala y guardá' },
]

function TasksMockup() {
  return (
    <div className="space-y-4">
      {taskScreenshots.map((s, i) => (
        <motion.div
          key={s.src}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.12 }}
          viewport={{ once: true, margin: '-8%' }}
        >
          <img
            src={s.src}
            alt={s.alt}
            className="w-full rounded-2xl shadow-sm ring-1 ring-black/5"
          />
        </motion.div>
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

          {/* Text — left */}
          <SlideIn from="left" className="lg:sticky lg:top-28">
            <p className="font-inter text-xs/5 font-normal uppercase tracking-widest text-volt-green">
              {t(s.eyebrow, lang)}
            </p>
            <h2 className="mt-3 text-4xl font-normal tracking-tighter text-gray-950 sm:text-5xl">
              {t(s.title, lang)}
            </h2>
            <ol className="mt-6 space-y-3">
              {s.steps.map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gray-200 font-inter text-xs font-semibold text-gray-600">
                    {i + 1}
                  </span>
                  <span className="font-inter text-base/7 text-gray-600">{t(step, lang)}</span>
                </li>
              ))}
            </ol>
            <TipCallout className="mt-8">{t(s.tip, lang)}</TipCallout>
          </SlideIn>

          {/* Mockup — right, stagger in */}
          <SlideIn from="right" delay={0.15}>
            <TasksMockup />
          </SlideIn>

        </div>
      </Container>
    </section>
  )
}

// ─── Send Later Section ───────────────────────────────────────────────────────

function SendLaterMockup() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
      {/* Chat area */}
      <div className="mb-4 flex justify-end">
        <div className="max-w-xs rounded-2xl rounded-tr-sm bg-[#dcf8c6] px-4 py-3">
          <p className="font-inter text-sm/6 text-gray-800">
            Hola Marco, ¿cómo va el proyecto? 👋
          </p>
          <p className="mt-1 text-right font-inter text-xs text-gray-500">8:52 AM</p>
        </div>
      </div>

      {/* Input bar */}
      <div className="flex items-center gap-2 rounded-xl bg-gray-50 px-4 py-3 ring-1 ring-black/5">
        <p className="flex-1 font-inter text-sm text-gray-400">Escribí un mensaje...</p>
        <button className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-inter text-xs font-semibold text-volt-green ring-1 ring-volt-green/30">
          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <circle cx="12" cy="12" r="10" />
            <path strokeLinecap="round" d="M12 6v6l4 2" />
          </svg>
          Send Later
        </button>
      </div>

      {/* Scheduled indicator */}
      <div className="mt-3 flex items-center gap-2">
        <span className="font-inter text-xs text-gray-400">📅 Agendado · mañana 9:00 AM</span>
      </div>
    </div>
  )
}

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
    <section className="border-t border-gray-100 bg-white py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Mockup — left */}
          <SlideIn from="right">
            <SendLaterMockup />
          </SlideIn>

          {/* Text — right */}
          <SlideIn from="left" delay={0.1}>
            <p className="font-inter text-xs/5 font-normal uppercase tracking-widest text-volt-green">
              {t(s.eyebrow, lang)}
            </p>
            <h2 className="mt-3 text-4xl font-normal tracking-tighter text-gray-950 sm:text-5xl">
              {t(s.title, lang)}
            </h2>
            <p className="mt-5 font-inter text-base/7 text-gray-500">
              {t(s.description, lang)}
            </p>
            <TipCallout>{tipText}</TipCallout>
          </SlideIn>
        </div>
      </Container>
    </section>
  )
}

// ─── Meet Integration Section ─────────────────────────────────────────────────

function MeetIntegrationSection() {
  const { lang } = useLanguage()
  const s = ui.meetIntegration

  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">

          {/* Screenshots — left, stacked */}
          <SlideIn from="left">
            <div className="space-y-3">
              {[
                { src: '/screenshots/meet-command.png', alt: '/meet en el chat' },
                { src: '/screenshots/meet-link.png',    alt: 'Link de Google Meet generado' },
              ].map((s, i) => (
                <motion.div
                  key={s.src}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.12 }}
                  viewport={{ once: true, margin: '-8%' }}
                >
                  <img
                    src={s.src}
                    alt={s.alt}
                    className="w-full rounded-2xl shadow-sm ring-1 ring-black/5"
                  />
                </motion.div>
              ))}
            </div>
          </SlideIn>

          {/* Text — right */}
          <SlideIn from="right" delay={0.1}>
            <p className="font-inter text-xs/5 font-normal uppercase tracking-widest text-volt-green">
              {t(s.eyebrow, lang)}
            </p>
            <h2 className="mt-3 text-4xl font-normal tracking-tighter text-gray-950 sm:text-5xl">
              {t(s.title, lang)}
            </h2>
            <p className="mt-5 font-inter text-base/7 text-gray-500">
              {t(s.description, lang)}
            </p>
            <TipCallout>{t(s.tip, lang)}</TipCallout>
          </SlideIn>

        </div>
      </Container>
    </section>
  )
}

// ─── Voice Transcription Section ─────────────────────────────────────────────

function VoiceTranscriptionSection() {
  const { lang } = useLanguage()
  const s = ui.voiceTranscription

  return (
    <section className="border-t border-gray-100 bg-white py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">

          {/* Text — left */}
          <SlideIn from="left" className="lg:sticky lg:top-28">
            <p className="font-inter text-xs/5 font-normal uppercase tracking-widest text-volt-green">
              {t(s.eyebrow, lang)}
            </p>
            <h2 className="mt-3 text-4xl font-normal tracking-tighter text-gray-950 sm:text-5xl">
              {t(s.title, lang)}
            </h2>
            <p className="mt-5 font-inter text-base/7 text-gray-500">
              {t(s.description, lang)}
            </p>
            <p className="mt-4 font-inter text-base/7 text-gray-400 italic">
              {t(s.useCases, lang)}
            </p>
            <TipCallout>{t(s.tip, lang)}</TipCallout>
          </SlideIn>

          {/* Screenshot — right */}
          <SlideIn from="right" delay={0.1}>
            <img
              src="/screenshots/voice-transcription.png"
              alt="Transcripción de audio con IA"
              className="w-full rounded-2xl shadow-lg ring-1 ring-black/5"
            />
          </SlideIn>

        </div>
      </Container>
    </section>
  )
}

// ─── App Store Section ────────────────────────────────────────────────────────

function AppStoreSection() {
  const { lang } = useLanguage()
  const s = ui.appStore

  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

          {/* Text — left */}
          <SlideIn from="left">
            <p className="font-inter text-xs/5 font-normal uppercase tracking-widest text-volt-green">
              {t(s.eyebrow, lang)}
            </p>
            <h2 className="mt-3 text-4xl font-normal tracking-tighter text-gray-950 sm:text-5xl">
              {t(s.title, lang)}
            </h2>
            <p className="mt-5 font-inter text-base/7 text-gray-500">
              {t(s.description, lang)}
            </p>
            <TipCallout>{t(s.tip, lang)}</TipCallout>
          </SlideIn>

          {/* Screenshot — right */}
          <SlideIn from="right" delay={0.1}>
            <div className="flex justify-center lg:justify-end">
              <img
                src="/screenshots/app-store.png"
                alt="Volt App Store"
                className="w-full max-w-md rounded-2xl shadow-lg ring-1 ring-black/5"
              />
            </div>
          </SlideIn>

        </div>
      </Container>
    </section>
  )
}

// ─── Privacy Mode Section ─────────────────────────────────────────────────────

function PrivacyModeSection() {
  const { lang } = useLanguage()
  const s = ui.privacyMode

  return (
    <section className="border-t border-gray-100 bg-white py-24 sm:py-32">
      <Container>

        {/* Text — centered above */}
        <div className="mx-auto max-w-2xl text-center">
          <FadeUp>
            <p className="font-inter text-xs/5 font-normal uppercase tracking-widest text-volt-green">
              {t(s.eyebrow, lang)}
            </p>
            <h2 className="mt-3 text-4xl font-normal tracking-tighter text-gray-950 sm:text-5xl">
              {t(s.title, lang)}
            </h2>
            <p className="mt-5 font-inter text-base/7 text-gray-500">
              {t(s.description, lang)}
            </p>
            <div className="mt-6 inline-flex items-center gap-3">
              <kbd className="inline-flex items-center rounded-md border border-gray-200 bg-white px-2.5 py-1 font-mono text-sm text-gray-700 shadow-xs">⌘D</kbd>
              <span className="font-inter text-sm text-gray-400">/</span>
              <kbd className="inline-flex items-center rounded-md border border-gray-200 bg-white px-2.5 py-1 font-mono text-sm text-gray-700 shadow-xs">Ctrl+D</kbd>
            </div>
          </FadeUp>
        </div>

        {/* Screenshot — full width below */}
        <FadeUp delay={0.15}>
          <div className="mt-12 overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5">
            <img
              src="/screenshots/privacy-mode.png"
              alt="Privacy mode — chats blurred"
              className="w-full"
            />
          </div>
        </FadeUp>

      </Container>
    </section>
  )
}

// ─── Shortcuts Section ────────────────────────────────────────────────────────

function ShortcutsSection() {
  const { lang } = useLanguage()
  const s = ui.shortcuts

  return (
    <section className="border-t border-gray-100 bg-white py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

          {/* Screenshot — left */}
          <SlideIn from="left">
            <div className="flex justify-center lg:justify-start">
              <img
                src="/screenshots/shortcuts-menu.png"
                alt="Keyboard Shortcuts menu"
                className="w-64 rounded-2xl shadow-lg ring-1 ring-black/5"
              />
            </div>
          </SlideIn>

          {/* Text — right */}
          <SlideIn from="right" delay={0.1}>
            <p className="font-inter text-xs/5 font-normal uppercase tracking-widest text-volt-green">
              {t(s.eyebrow, lang)}
            </p>
            <h2 className="mt-3 text-4xl font-normal tracking-tighter text-gray-950 sm:text-5xl">
              {t(s.title, lang)}
            </h2>
            <p className="mt-5 font-inter text-base/7 text-gray-500">
              {t(s.description, lang)}
            </p>
            <TipCallout>{t(s.tip, lang)}</TipCallout>
          </SlideIn>

        </div>
      </Container>
    </section>
  )
}

// ─── AI Integration Section ───────────────────────────────────────────────────

function AiIntegrationSection() {
  const { lang } = useLanguage()
  const s = ui.aiIntegration

  return (
    <section className="bg-[#1a1a1a] py-24 sm:py-32">
      <Container>

        {/* Header — centered */}
        <div className="mx-auto max-w-2xl text-center">
          <FadeUp>
            <span className="inline-flex items-center gap-2 rounded-full border border-volt-green/30 bg-volt-green/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-volt-green" />
              <span className="font-inter text-xs font-semibold uppercase tracking-widest text-volt-green">
                {t(s.eyebrow, lang)}
              </span>
            </span>
            <h2 className="mt-6 text-4xl font-normal tracking-tighter text-white sm:text-5xl">
              {t(s.title, lang)}
            </h2>
            <p className="mt-5 font-inter text-base/7 text-white/60">
              {t(s.description, lang)}
            </p>
          </FadeUp>
        </div>

        {/* Screenshot */}
        <FadeUp delay={0.15}>
          <div className="mx-auto mt-12 max-w-2xl overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
            <img
              src="/screenshots/ai-integration.png"
              alt="Claude conectado a Volt"
              className="w-full"
            />
          </div>
        </FadeUp>

        {/* Example prompt + CTA */}
        <FadeUp delay={0.25}>
          <div className="mx-auto mt-8 max-w-2xl">
            <p className="font-inter text-sm/6 text-center italic text-white/40">
              {t(s.example, lang)}
            </p>
            <p className="mt-6 text-center font-inter text-sm font-medium text-white/50">
              {t(s.cta, lang)}
            </p>
          </div>
        </FadeUp>

      </Container>
    </section>
  )
}

// ─── Lists Section ────────────────────────────────────────────────────────────

function ListsSection() {
  const { lang } = useLanguage()
  const s = ui.lists

  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">

          {/* Text — left */}
          <SlideIn from="left" className="lg:sticky lg:top-28">
            <p className="font-inter text-xs/5 font-normal uppercase tracking-widest text-volt-green">
              {t(s.eyebrow, lang)}
            </p>
            <h2 className="mt-3 text-4xl font-normal tracking-tighter text-gray-950 sm:text-5xl">
              {t(s.title, lang)}
            </h2>
            <p className="mt-5 font-inter text-base/7 text-gray-500">
              {t(s.description, lang)}
            </p>
            <TipCallout>
              <span className="block">{t(s.tip1, lang)}</span>
              <span className="mt-2 block">{t(s.tip2, lang)}</span>
            </TipCallout>
          </SlideIn>

          {/* Screenshots — right, side by side */}
          <SlideIn from="right" delay={0.1}>
            <div className="flex items-start gap-4">
              <motion.img
                src="/screenshots/lists-workspaces.png"
                alt="Workspace y Private lists"
                className="w-1/2 rounded-2xl shadow-sm ring-1 ring-black/5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                viewport={{ once: true, margin: '-8%' }}
              />
              <motion.img
                src="/screenshots/lists-private.png"
                alt="Listas privadas"
                className="w-1/2 rounded-2xl shadow-sm ring-1 ring-black/5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.12 }}
                viewport={{ once: true, margin: '-8%' }}
              />
            </div>
          </SlideIn>

        </div>
      </Container>
    </section>
  )
}

// ─── New Chat Section ─────────────────────────────────────────────────────────

function NewChatMockup() {
  return (
    <img
      src="/screenshots/new-chat.png"
      alt="Nuevo chat por número de teléfono"
      className="w-full rounded-2xl shadow-lg ring-1 ring-black/5"
    />
  )
}

function NewChatSection() {
  const { lang } = useLanguage()
  const s = ui.newChat

  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

          {/* Text — left */}
          <SlideIn from="left">
            <p className="font-inter text-xs/5 font-normal uppercase tracking-widest text-volt-green">
              {t(s.eyebrow, lang)}
            </p>
            <h2 className="mt-3 text-4xl font-normal tracking-tighter text-gray-950 sm:text-5xl">
              {t(s.title, lang)}
            </h2>
            <p className="mt-5 font-inter text-base/7 text-gray-500">
              {t(s.description, lang)}
            </p>
            <TipCallout>{t(s.tip, lang)}</TipCallout>
          </SlideIn>

          {/* Mockup — right */}
          <SlideIn from="right" delay={0.1}>
            <NewChatMockup />
          </SlideIn>

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
        <MeetIntegrationSection />
        <VoiceTranscriptionSection />
        <AppStoreSection />
        <AiIntegrationSection />
        <PrivacyModeSection />
        <ShortcutsSection />
        <ListsSection />
        <NewChatSection />
      </main>
      <Footer />
    </div>
  )
}
