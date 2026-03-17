import { useId } from 'react'

export function Cap26Logo() {
  const gradientId = useId()
  const frameId = useId()

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
          <linearGradient id={gradientId} x1="12" y1="8" x2="53" y2="58" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#173A67" />
            <stop offset="0.55" stopColor="#0B2446" />
            <stop offset="1" stopColor="#07172F" />
          </linearGradient>
          <linearGradient id={frameId} x1="19" y1="17" x2="44" y2="42" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#F9FBFF" />
            <stop offset="1" stopColor="#D7E6FF" />
          </linearGradient>
        </defs>

        <rect x="4" y="4" width="56" height="56" rx="17" fill={`url(#${gradientId})`} />
        <rect x="4.5" y="4.5" width="55" height="55" rx="16.5" stroke="rgba(255,255,255,0.16)" />

        <path
          d="M24 24H20.5V28"
          stroke={`url(#${frameId})`}
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M40 24H43.5V28"
          stroke={`url(#${frameId})`}
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 40H20.5V36"
          stroke={`url(#${frameId})`}
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M40 40H43.5V36"
          stroke={`url(#${frameId})`}
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <circle cx="32.5" cy="31.5" r="3.5" fill="#FF6B57" />
        <circle cx="32.5" cy="31.5" r="6.5" stroke="rgba(255,107,87,0.28)" />
      </svg>

      <span className="flex items-baseline font-semibold leading-none tracking-[-0.03em] text-[1.35rem] relative -top-[2.8px]">
        <span className="text-white">cap</span>
        <sup className="pl-1 text-[0.55em] text-white/72">26</sup>
      </span>
    </span>
  )
}
