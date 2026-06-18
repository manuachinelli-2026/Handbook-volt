'use client'

import { clsx } from 'clsx'
import { useState } from 'react'
import Link from 'next/link'
import { Logo } from './logo'
import { useLanguage } from '@/contexts/language'

export function LangSwitcher() {
  const { lang, setLang } = useLanguage()
  return (
    <div className="flex items-center gap-0.5 rounded-full bg-black/5 p-0.5 font-inter text-sm font-medium">
      <button
        onClick={() => setLang('es')}
        className={clsx(
          'rounded-full px-3 py-1 transition-colors',
          lang === 'es'
            ? 'bg-white text-gray-950 shadow-xs'
            : 'text-gray-500 hover:text-gray-800',
        )}
      >
        ES
      </button>
      <button
        onClick={() => setLang('en')}
        className={clsx(
          'rounded-full px-3 py-1 transition-colors',
          lang === 'en'
            ? 'bg-white text-gray-950 shadow-xs'
            : 'text-gray-500 hover:text-gray-800',
        )}
      >
        EN
      </button>
    </div>
  )
}

export function LangSwitcherDark() {
  const { lang, setLang } = useLanguage()
  return (
    <div className="flex items-center gap-0.5 rounded-full bg-white/10 p-0.5 font-inter text-sm font-medium">
      <button
        onClick={() => setLang('es')}
        className={clsx(
          'rounded-full px-3 py-1 transition-colors',
          lang === 'es'
            ? 'bg-white/20 text-white shadow-xs'
            : 'text-white/50 hover:text-white/80',
        )}
      >
        ES
      </button>
      <button
        onClick={() => setLang('en')}
        className={clsx(
          'rounded-full px-3 py-1 transition-colors',
          lang === 'en'
            ? 'bg-white/20 text-white shadow-xs'
            : 'text-white/50 hover:text-white/80',
        )}
      >
        EN
      </button>
    </div>
  )
}

export function Navbar({ dark }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="relative">
      <div className="flex items-center justify-between py-5">
        <Link href="/" title="Home">
          <Logo className="h-9" dark={dark} />
        </Link>

        <div className="flex items-center gap-4">
          {dark ? <LangSwitcherDark /> : <LangSwitcher />}
        </div>
      </div>
    </header>
  )
}
