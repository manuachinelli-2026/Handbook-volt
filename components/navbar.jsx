'use client'

import { clsx } from 'clsx'
import { useState } from 'react'
import Link from 'next/link'
import { Logo } from './logo'

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/cultura', label: 'Cultura' },
  { href: '/proceso', label: 'Proceso' },
  { href: '/equipo', label: 'Equipo' },
]

export function Navbar({ dark }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="relative">
      <div className="flex items-center justify-between py-4">
        <Link href="/" title="Home">
          <Logo className="h-9" dark={dark} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-1 lg:flex">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={clsx(
                'px-4 py-2 text-base font-inter font-normal rounded-lg transition-colors',
                dark
                  ? 'text-white hover:bg-white/10'
                  : 'text-gray-950 hover:bg-black/5',
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className={clsx(
            'flex size-10 items-center justify-center rounded-lg lg:hidden',
            dark ? 'text-white hover:bg-white/10' : 'hover:bg-black/5',
          )}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className="text-xl">{mobileOpen ? '✕' : '☰'}</span>
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="flex flex-col gap-4 py-4 lg:hidden">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={clsx(
                'text-base font-inter font-normal',
                dark ? 'text-white' : 'text-gray-950',
              )}
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
