import { useId } from 'react'

export function Cap26Logo2() {
  const backgroundId = useId()
  const ringId = useId()

  return (
    <span className="inline-flex items-center gap-1 text-white">
      <svg
        width="40"
        height="40"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0 drop-shadow-[0_12px_28px_rgba(5,10,20,0.42)]"
      >
        <defs>
          <linearGradient id={backgroundId} x1="12" y1="8" x2="53" y2="58" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#173A67" />
            <stop offset="0.55" stopColor="#0B2446" />
            <stop offset="1" stopColor="#07172F" />
          </linearGradient>
          <linearGradient id={ringId} x1="20" y1="17" x2="43" y2="41" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#F9FBFF" />
            <stop offset="1" stopColor="#D7E6FF" />
          </linearGradient>
        </defs>

        <rect x="4" y="4" width="56" height="56" rx="17" fill={`url(#${backgroundId})`} />
        <rect x="4.5" y="4.5" width="55" height="55" rx="16.5" stroke="rgba(255,255,255,0.16)" />

        <path
          d="M43 23.5C40.7 20.1 36.79 18 32.4 18C25.28 18 19.5 23.78 19.5 30.9C19.5 38.02 25.28 43.8 32.4 43.8C36.41 43.8 40 42.09 42.37 39.28"
          stroke={`url(#${ringId})`}
          strokeWidth="4.2"
          strokeLinecap="round"
        />
        <rect x="27.5" y="27.5" width="9.5" height="7.5" rx="2.6" fill="rgba(255,255,255,0.18)" />
        <path d="M39 29.5L43 27V36L39 33.5" fill="rgba(255,255,255,0.82)" />
        <circle cx="44.5" cy="44.5" r="3.5" fill="#FF6B57" />
        <circle cx="44.5" cy="44.5" r="6.4" stroke="rgba(255,107,87,0.26)" />
      </svg>

      <span className="flex items-baseline font-semibold leading-none tracking-[-0.03em] text-[1.35rem] relative -top-0.75">
        <span className="text-white">cap</span>
        <sup className="pl-1 text-[0.55em] text-white/72">26</sup>
      </span>
    </span>
  )
}
