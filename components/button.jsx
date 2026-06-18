'use client'

import { clsx } from 'clsx'
import Link from 'next/link'

const variants = {
  primary: clsx(
    'inline-flex items-center justify-center gap-2 px-4 py-[calc(--spacing(2)-1px)]',
    'rounded-full border border-transparent',
    'bg-volt-charcoal text-white',
    'shadow-md',
    'whitespace-nowrap text-base font-medium',
    'hover:bg-volt-green transition-colors',
  ),
  secondary: clsx(
    'relative inline-flex items-center justify-center px-4 py-[calc(--spacing(2)-1px)]',
    'rounded-full border border-transparent bg-white/15 shadow-md ring-1 ring-black/10',
    'after:absolute after:inset-0 after:rounded-full after:shadow-[inset_0_0_2px_1px_#ffffff4d]',
    'whitespace-nowrap text-base font-medium text-gray-950',
    'hover:bg-white/20 transition-colors',
  ),
  outline: clsx(
    'inline-flex items-center justify-center px-2 py-[calc(--spacing(1.5)-1px)]',
    'rounded-lg border border-transparent shadow-sm ring-1 ring-black/10',
    'whitespace-nowrap text-sm font-medium text-gray-950',
    'hover:bg-gray-50 transition-colors',
  ),
}

const darkOverrides = {
  primary: 'bg-volt-green-neon text-black hover:bg-volt-green',
  secondary: 'text-volt-green-neon ring-volt-green-neon/40 after:shadow-none hover:bg-volt-green-neon/10',
  outline: '',
}

export function Button({ variant = 'primary', dark = false, className, href, ...props }) {
  const resolvedClassName = clsx(
    className,
    variants[variant],
    dark && darkOverrides[variant],
  )

  if (href) {
    return <Link href={href} className={resolvedClassName} {...props} />
  }

  return <button className={resolvedClassName} {...props} />
}
