import { Container } from '@/components/container'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Heading, Subheading } from '@/components/text'
import { Button } from '@/components/button'
import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/16/solid'

function Hero() {
  return (
    <div
      className="relative overflow-hidden rounded-b-4xl"
      style={{
        backgroundImage: 'linear-gradient(to top right, #1c1f22, #2e4257)',
      }}
    >
      <Container className="relative">
        <Navbar dark />
        <div className="pb-24 pt-16 text-center sm:pb-32 sm:pt-24">
          <p className="font-inter text-xs/5 font-normal uppercase tracking-widest text-volt-green-neon/60">
            Interno · Volt
          </p>
          <h1 className="mt-6 tracking-tight">
            <span className="block text-4xl/[1.1] font-light text-white sm:text-7xl/[1.1]">
              Handbook
            </span>
            <span className="block text-5xl/[0.85] font-semibold text-volt-green-neon sm:text-8xl/[0.85]">
              Volt
            </span>
          </h1>
          <p className="mx-auto mt-8 max-w-xl font-inter text-base/snug font-normal text-white/70 sm:text-lg/snug">
            Todo lo que necesitás saber para trabajar en Volt. Cultura, proceso,
            expectativas y más.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-x-6 gap-y-4 sm:flex-row">
            <Button
              href="/cultura"
              className="border-transparent! bg-[#A0FF79]! text-lg font-semibold text-[#1a2e3f]! hover:bg-[#8ae866]!"
            >
              Empezar a leer
            </Button>
            <Button
              variant="secondary"
              href="/equipo"
              className="bg-transparent! text-lg text-[#A0FF79]! ring-[#A0FF79]/40! after:shadow-none! hover:bg-[#A0FF79]/10!"
            >
              Conocer el equipo
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

const slides = [
  {
    eyebrow: 'Cultura',
    title: 'Quiénes somos y cómo trabajamos',
    description: 'Nuestros valores, principios y la forma en que tomamos decisiones.',
    href: '/cultura',
  },
  {
    eyebrow: 'Proceso',
    title: 'Cómo construimos Volt',
    description: 'Rituales de equipo, herramientas, ciclos de trabajo y shipping.',
    href: '/proceso',
  },
  {
    eyebrow: 'Equipo',
    title: 'Las personas detrás de Volt',
    description: 'Quiénes somos, cómo comunicarnos y cómo colaborar.',
    href: '/equipo',
  },
  {
    eyebrow: 'Onboarding',
    title: 'Tus primeros días en Volt',
    description: 'Todo lo que necesitás configurar y aprender en tu primera semana.',
    href: '/onboarding',
  },
]

function IndexSection() {
  return (
    <div className="bg-linear-to-b from-white from-50% to-gray-100 py-16 sm:py-24">
      <Container>
        <Subheading>Contenido</Subheading>
        <Heading as="h2" className="mt-2 max-w-3xl">
          Todo lo que necesitás saber.
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2">
          {slides.map((slide) => (
            <Link
              key={slide.href}
              href={slide.href}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white p-8 shadow-xs ring-1 ring-black/5 transition hover:shadow-md hover:ring-black/10"
            >
              <p className="font-inter text-xs/5 font-normal uppercase tracking-widest text-gray-500">
                {slide.eyebrow}
              </p>
              <h3 className="mt-2 text-xl/7 font-normal tracking-tight text-volt-charcoal">
                {slide.title}
              </h3>
              <p className="mt-2 font-inter text-sm/6 text-gray-500">
                {slide.description}
              </p>
              <div className="mt-6 flex items-center gap-1 font-inter text-sm/5 font-medium text-volt-green">
                Leer
                <ChevronRightIcon className="size-4 fill-volt-green transition-transform group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-x-clip bg-white">
      <Hero />
      <main>
        <IndexSection />
      </main>
      <Footer />
    </div>
  )
}
