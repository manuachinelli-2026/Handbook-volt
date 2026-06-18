'use client'

import { clsx } from 'clsx'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Logo } from './logo'
import { useLanguage } from '@/contexts/language'

export function LangSwitcher({ dark }) {
  const { lang, setLang } = useLanguage()
  return (
    <div className={clsx(
      'flex items-center gap-0.5 rounded-full p-0.5 font-inter text-sm font-medium',
      dark ? 'bg-white/10' : 'bg-black/5'
    )}>
      {['es', 'en'].map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={clsx(
            'rounded-full px-3 py-1 transition-colors uppercase',
            lang === l
              ? dark ? 'bg-white/20 text-white' : 'bg-white text-gray-950 shadow-xs'
              : dark ? 'text-white/50 hover:text-white/80' : 'text-gray-500 hover:text-gray-800',
          )}
        >
          {l}
        </button>
      ))}
    </div>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/90 shadow-sm backdrop-blur-md'
          : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" title="Home">
          <Logo className="h-7" dark={false} />
        </Link>
        <LangSwitcher dark={false} />
      </div>
    </header>
  )
}
