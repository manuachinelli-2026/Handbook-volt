'use client'

import { motion } from 'framer-motion'
import { useLanguage, t } from '@/contexts/language'
import { Container } from '@/components/container'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { YoutubeEmbed } from '@/components/video'
import { LogoMarquee } from '@/components/logo-marquee'
import { FadeUp, FadeIn, SlideIn, ScaleIn, Stagger, StaggerItem } from '@/components/animate'
import { features, ui } from '@/data/features'

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  const { lang } = useLanguage()
  const h = ui.hero

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center bg-white">
      <div className="w-full px-6 pb-24 pt-32 text-center">

        <FadeUp>
          <h1 className="mx-auto max-w-3xl text-5xl font-normal tracking-tighter text-gray-950 sm:text-6xl lg:text-7xl">
            {t(h.title, lang)}
          </h1>
        </FadeUp>

        {/* Integration logos marquee */}
        <FadeIn delay={0.2}>
          <div className="mx-auto mt-14 max-w-3xl">
            <p className="mb-5 font-inter text-xs/5 font-normal uppercase tracking-widest text-gray-400">
              {lang === 'es' ? 'Integraciones' : 'Integrations'}
            </p>
            <LogoMarquee />
          </div>
        </FadeIn>

        {/* Scroll invitation */}
        <FadeUp delay={0.4}>
          <div className="mt-16 flex flex-col items-center gap-3">
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

// ─── Bento overview grid ──────────────────────────────────────────────────────

function BentoCard({ feature, lang }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-xs ring-1 ring-black/5 transition duration-300 hover:shadow-md hover:ring-black/10">
      {/* Video / placeholder graphic area */}
      <div className="relative aspect-video bg-gray-50">
        {feature.youtubeId ? (
          <YoutubeEmbed id={feature.youtubeId} title={t(feature.title, lang)} />
        ) : (
          <div className="flex h-full items-center justify-center">
            <div className="size-16 rounded-full bg-volt-green-neon/20 flex items-center justify-center">
              <span className="text-2xl">⚡</span>
            </div>
          </div>
        )}
      </div>

      {/* Text */}
      <div className="p-8">
        <p className="font-inter text-xs/5 font-normal uppercase tracking-widest text-gray-400">
          {t(feature.eyebrow, lang)}
        </p>
        <h3 className="mt-2 text-xl/7 font-normal tracking-tight text-volt-charcoal">
          {t(feature.title, lang)}
        </h3>
        <p className="mt-2 font-inter text-sm/6 text-gray-500">
          {t(feature.description, lang)}
        </p>
      </div>
    </div>
  )
}

function FeaturesGrid() {
  const { lang } = useLanguage()
  const f = ui.features

  return (
    <section id="features" className="bg-white py-24 sm:py-32">
      <Container>
        <FadeUp>
          <p className="font-inter text-xs/5 font-normal uppercase tracking-widest text-gray-400">
            {t(f.heading, lang)}
          </p>
          <h2 className="mt-2 max-w-2xl text-4xl font-normal tracking-tighter text-gray-950 sm:text-5xl">
            {t(f.subheading, lang)}
          </h2>
        </FadeUp>

        <Stagger className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <StaggerItem key={feature.id}>
              <BentoCard feature={feature} lang={lang} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  )
}

// ─── Individual feature sections ──────────────────────────────────────────────

function FeatureSection({ feature, index }) {
  const { lang } = useLanguage()
  const even = index % 2 === 0

  return (
    <section className="border-t border-gray-100 py-24 sm:py-32">
      <Container>
        <div className={`flex flex-col gap-12 lg:flex-row lg:items-center ${even ? '' : 'lg:flex-row-reverse'}`}>

          {/* Text */}
          <SlideIn from={even ? 'left' : 'right'} className="flex-1">
            <p className="font-inter text-xs/5 font-normal uppercase tracking-widest text-volt-green">
              {t(feature.eyebrow, lang)}
            </p>
            <h2 className="mt-3 text-3xl font-normal tracking-tighter text-gray-950 sm:text-5xl">
              {t(feature.title, lang)}
            </h2>
            <p className="mt-5 font-inter text-base/7 text-gray-500">
              {t(feature.description, lang)}
            </p>
          </SlideIn>

          {/* Video */}
          <SlideIn from={even ? 'right' : 'left'} delay={0.1} className="flex-1">
            {feature.youtubeId ? (
              <ScaleIn>
                <YoutubeEmbed id={feature.youtubeId} title={t(feature.title, lang)} />
              </ScaleIn>
            ) : (
              <div className="flex aspect-video items-center justify-center rounded-2xl bg-gray-50 ring-1 ring-black/5">
                <p className="font-inter text-sm text-gray-400">Video coming soon</p>
              </div>
            )}
          </SlideIn>

        </div>
      </Container>
    </section>
  )
}

function FeatureSections() {
  return (
    <div className="bg-white">
      {features.map((feature, i) => (
        <FeatureSection key={feature.id} feature={feature} index={i} />
      ))}
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="overflow-x-clip bg-white">
      <Navbar />
      <Hero />
      <main>
        <FeaturesGrid />
        <FeatureSections />
      </main>
      <Footer />
    </div>
  )
}
