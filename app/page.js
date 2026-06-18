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

// ─── Getting Started ──────────────────────────────────────────────────────────

function GettingStarted() {
  const { lang } = useLanguage()
  const s = ui.gettingStarted

  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <FadeUp>
          <p className="font-inter text-xs/5 font-normal uppercase tracking-widest text-gray-400">
            {t(s.eyebrow, lang)}
          </p>
          <h2 className="mt-2 max-w-2xl text-4xl font-normal tracking-tighter text-gray-950 sm:text-5xl">
            {t(s.title, lang)}
          </h2>
        </FadeUp>

        <Stagger className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {s.steps.map((step) => (
            <StaggerItem key={step.num}>
              <div className="flex h-full flex-col rounded-2xl bg-white p-8 shadow-xs ring-1 ring-black/5">
                <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#1a1a1a]">
                  <span className="font-inter text-sm font-semibold text-white">{step.num}</span>
                </div>
                <h3 className="text-base font-medium tracking-tight text-gray-950">
                  {t(step.title, lang)}
                </h3>
                <p className="mt-2 font-inter text-sm/6 text-gray-500">
                  {t(step.desc, lang)}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  )
}

// ─── Tasks Section ────────────────────────────────────────────────────────────

function TasksMockup() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
      {/* WhatsApp message bubble */}
      <div className="flex gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-200 font-inter text-sm font-semibold text-gray-600">
          M
        </div>
        <div className="flex-1">
          <p className="mb-1 font-inter text-xs font-medium text-gray-500">Marco García</p>
          <div className="rounded-2xl rounded-tl-sm bg-gray-100 px-4 py-3">
            <p className="font-inter text-sm/6 text-gray-800">
              Hey! Call with Juan confirmed for tomorrow 9am. He'll want the budget overview ready. Don't forget!
            </p>
            <p className="mt-1 text-right font-inter text-xs text-gray-400">9:14 AM ✓✓</p>
          </div>
        </div>
      </div>

      {/* Volt task badge */}
      <div className="mt-4 flex justify-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-volt-green-neon/20 px-3 py-1 font-inter text-xs font-medium text-volt-green">
          ⚡ Task created by Volt
        </span>
      </div>

      {/* Task card */}
      <div className="mt-3 flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-xs ring-1 ring-black/5">
        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-volt-green">
          <svg className="h-3.5 w-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div className="flex flex-1 items-center justify-between">
          <span className="font-inter text-sm font-medium text-gray-900">Meet Juan 9am</span>
          <span className="font-inter text-xs text-gray-400">Tomorrow</span>
        </div>
      </div>
    </div>
  )
}

function TasksSection() {
  const { lang } = useLanguage()
  const s = ui.tasks

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
      </main>
      <Footer />
    </div>
  )
}
