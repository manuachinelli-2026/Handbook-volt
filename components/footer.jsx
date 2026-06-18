import Link from 'next/link'
import { Container } from './container'
import { Logo } from './logo'
import { Gradient } from './gradient'

export function Footer() {
  return (
    <footer>
      <Gradient className="relative">
        <div className="absolute inset-2 rounded-4xl bg-white/80" />
        <Container>
          <div className="relative pb-16 pt-20 text-center sm:py-24">
            <p className="font-inter text-xs/5 font-normal uppercase tracking-widest text-gray-500">
              Handbook
            </p>
            <p className="mt-6 text-3xl font-normal tracking-tight text-gray-950 sm:text-5xl">
              Bienvenido al equipo Volt.
            </p>
          </div>
          <div className="relative flex items-center justify-between border-t border-black/5 py-6">
            <Logo className="h-8" />
            <p className="font-inter text-sm/6 text-gray-500">
              &copy; {new Date().getFullYear()} VoltChat LLC
            </p>
          </div>
        </Container>
      </Gradient>
    </footer>
  )
}
