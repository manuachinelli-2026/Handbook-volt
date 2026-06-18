import { clsx } from 'clsx'

export function Gradient({ className, ...props }) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        'bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-volt-offwhite from-28% via-volt-green-neon via-70% to-volt-green-neon sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))]',
      )}
    />
  )
}

export function GradientBackground() {
  return (
    <div className="relative mx-auto max-w-7xl">
      <div
        className={clsx(
          'absolute -right-60 -top-44 h-60 w-xl transform-gpu md:right-0',
          'bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-volt-offwhite from-28% via-volt-green-neon/20 via-70% to-volt-green',
          'rotate-[-10deg] rounded-full blur-3xl',
        )}
      />
    </div>
  )
}
