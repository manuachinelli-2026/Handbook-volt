import { clsx } from 'clsx'

export function TipCallout({ children, className }) {
  return (
    <div className={clsx('mt-8 border-l-2 border-volt-green pl-4', className)}>
      <p className="font-inter text-xs/5 font-semibold uppercase tracking-widest text-volt-green">
        Tip
      </p>
      <p className="mt-1 font-inter text-sm/6 text-gray-500">
        {children}
      </p>
    </div>
  )
}
