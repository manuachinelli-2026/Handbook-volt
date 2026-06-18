// Infinite horizontal logo marquee — fades at both edges.

const integrations = [
  {
    name: 'Volt',
    logo: (
      <img src="/logo/logo_black.svg" alt="Volt" className="h-5 w-auto opacity-70" />
    ),
  },
  {
    name: 'HubSpot',
    logo: (
      <svg viewBox="0 0 120 32" className="h-5 w-auto opacity-60" fill="none">
        <path d="M20 8a4 4 0 100 8 4 4 0 000-8zm0-2a6 6 0 110 12A6 6 0 0120 6zm-6 14h12v2H14v-2z" fill="#FF7A59"/>
        <text x="30" y="22" fontFamily="sans-serif" fontSize="15" fontWeight="600" fill="#33475B">HubSpot</text>
      </svg>
    ),
  },
  {
    name: 'Senders',
    logo: (
      <svg viewBox="0 0 110 32" className="h-5 w-auto opacity-60" fill="none">
        <circle cx="14" cy="16" r="8" fill="#4F46E5"/>
        <path d="M10 16l3 3 5-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <text x="28" y="22" fontFamily="sans-serif" fontSize="15" fontWeight="600" fill="#1a1a1a">Senders</text>
      </svg>
    ),
  },
  {
    name: 'Linear',
    logo: (
      <svg viewBox="0 0 100 32" className="h-5 w-auto opacity-60" fill="none">
        <path d="M8 24L24 8M8 24h10M24 8v10" stroke="#5E6AD2" strokeWidth="2" strokeLinecap="round"/>
        <text x="30" y="22" fontFamily="sans-serif" fontSize="15" fontWeight="600" fill="#1a1a1a">Linear</text>
      </svg>
    ),
  },
  {
    name: 'Claude',
    logo: (
      <svg viewBox="0 0 105 32" className="h-5 w-auto opacity-60" fill="none">
        <circle cx="14" cy="16" r="8" fill="#DA7756"/>
        <path d="M10 13c0-2.2 1.8-4 4-4s4 1.8 4 4v3c0 2.2-1.8 4-4 4s-4-1.8-4-4v-3z" fill="white" opacity="0.6"/>
        <text x="28" y="22" fontFamily="sans-serif" fontSize="15" fontWeight="600" fill="#1a1a1a">Claude</text>
      </svg>
    ),
  },
  {
    name: 'ChatSite',
    logo: (
      <svg viewBox="0 0 120 32" className="h-5 w-auto opacity-60" fill="none">
        <rect x="6" y="8" width="18" height="13" rx="3" fill="#10B981"/>
        <path d="M10 21l-4 4v-4" fill="#10B981"/>
        <text x="30" y="22" fontFamily="sans-serif" fontSize="15" fontWeight="600" fill="#1a1a1a">ChatSite</text>
      </svg>
    ),
  },
]

// Duplicate items to create a seamless infinite loop
const items = [...integrations, ...integrations]

export function LogoMarquee() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-white to-transparent" />

      {/* Scrolling strip */}
      <div className="animate-marquee flex items-center gap-12 py-2">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex shrink-0 items-center gap-2"
          >
            {item.logo}
          </div>
        ))}
      </div>
    </div>
  )
}
