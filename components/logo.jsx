'use client'

import { clsx } from 'clsx'

export function Logo({ className, dark }) {
  return (
    <img
      src={dark ? '/logo/logo_white.svg' : '/logo/logo_black.svg'}
      alt="Volt Logo"
      className={clsx(className, 'h-8 w-auto')}
    />
  )
}
