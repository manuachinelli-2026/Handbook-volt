'use client'

import { useLanguage, t } from '@/contexts/language'
import { Container } from '@/components/container'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { YoutubeEmbed } from '@/components/video'
import { FadeUp, FadeIn, SlideIn, ScaleIn, Stagger, StaggerItem } from '@/components/animate'
import { features, ui } from '@/data/features'
import { ChevronRightIcon } from '@heroicons/react/16/solid'

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  const { lang } = useLanguage()
  const h = ui.hero

  return (
    <div
      className="relative overflow-hidden rounded-b-4xl"
      style={{ backgroundImage: 'linear-gradient(to top right, #1c1f22, #2e4257)' }}
    >
      <Container className="relative">
        <Navbar dark />

        <div className="pb-28 pt-16 text-center sm:pb-40 sm:pt-20">
          <FadeIn>
            <p className="font-inter text-xs/5 font-normal uppercase tracking-widest text-volt-green-neon/60">
              {t(h.eyebrow, lang)}
            </p>
          </FadeIn>

          <FadeUp delay={0.1}>
            <h1 className="mt-6 tracking-tight">
              {t(h.title, lang).split('\n').map((line, i) => (
                <span
                  key={i}
                  className={
                    i === 2
                      ? 'block text-5xl/[0.85] font-semibold text-volt-green-neon sm:text-8xl/[0.85]'
                      : 'block text-4xl/[1.1] font-light text-white sm:text-7xl/[1.1]'
                  }
                >
                  {line}
                </span>
              ))}
            </h1>
          </FadeUp>

          <FadeUp delay={0.25}>
            <p className="mx-auto mt-8 max-w-lg font-inter text-base/snug font-normal text-white/70 sm:text-lg/snug">
              {t(h.subtitle, lang)}
            </p>
          </FadeUp>

          <FadeUp delay={0.4}>
            <a
              href="#features"
              className="mt-12 inline-flex items-center gap-2 rounded-full bg-volt-green-neon px-6 py-3 font-inter text-base font-semibold text-[#1a2e3f] transition hover:bg-[#8ae866]"
            >
              {t(h.cta, lang)}
              <ChevronRightIcon className="size-4" />
            </a>
          </FadeUp>
        </div>
      </Container>
    </div>
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
      <Hero />
      <main>
        <FeaturesGrid />
        <FeatureSections />
      </main>
      <Footer />
    </div>
  )
}
