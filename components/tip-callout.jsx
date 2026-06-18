import { clsx } from 'clsx'

export function TipCallout({ children, className }) {
  return (
    <div className={clsx(
      'mt-8 flex gap-3 rounded-2xl border border-volt-green/20 bg-volt-green-neon/10 p-5',
      className
    )}>
      <span className="mt-0.5 shrink-0 text-base">⚡</span>
      <div>
        <p className="font-inter text-xs/5 font-semibold uppercase tracking-widest text-volt-green">
          Tip de Volt
        </p>
        <p className="mt-1 font-inter text-sm/6 text-gray-700">
          {children}
        </p>
      </div>
    </div>
  )
}
