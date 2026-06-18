'use client'

import Link from 'next/link'
import { Container } from './container'
import { Logo } from './logo'
import { Gradient } from './gradient'
import { useLanguage, t } from '@/contexts/language'
import { ui } from '@/data/features'

export function Footer() {
  const { lang } = useLanguage()

  return (
    <footer>
      <Gradient className="relative">
        <div className="absolute inset-2 rounded-4xl bg-white/80" />
        <Container>
          <div className="relative pb-16 pt-20 text-center sm:py-24">
            <p className="font-inter text-xs/5 font-normal uppercase tracking-widest text-gray-500">
              Volt
            </p>
            <p className="mt-6 text-3xl font-normal tracking-tight text-gray-950 sm:text-5xl">
              {t(ui.footer.tagline, lang)}
            </p>
            <div className="mt-8">
              <a
                href="https://voltchat.com/download"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-volt-charcoal px-6 py-3 font-inter text-base font-medium text-white transition hover:bg-volt-green"
              >
                {lang === 'es' ? 'Descargar Volt' : 'Download Volt'}
              </a>
            </div>
          </div>
          <div className="relative flex items-center justify-between border-t border-black/5 py-6">
            <Logo className="h-8" />
            <p className="font-inter text-sm/6 text-gray-400">
              &copy; {new Date().getFullYear()} VoltChat LLC
            </p>
          </div>
        </Container>
      </Gradient>
    </footer>
  )
}
