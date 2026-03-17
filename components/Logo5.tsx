import { useId } from 'react'

export function Cap26Logo5() {
  const backgroundId = useId()
  const ringBaseId = useId()
  const ringGlowId = useId()
  const ringShadowId = useId()
  const holeId = useId()

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
          <linearGradient id={ringBaseId} x1="20" y1="18" x2="44" y2="44" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#FFE3A3" />
            <stop offset="0.38" stopColor="#D89B57" />
            <stop offset="0.72" stopColor="#8B6CFF" />
            <stop offset="1" stopColor="#6B53C7" />
          </linearGradient>
          <linearGradient id={ringGlowId} x1="23" y1="20" x2="33" y2="29" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="rgba(255,242,214,0.78)" />
            <stop offset="1" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
          <linearGradient id={ringShadowId} x1="25" y1="24" x2="40" y2="42" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="rgba(62,32,12,0)" />
            <stop offset="0.58" stopColor="rgba(72,44,28,0.34)" />
            <stop offset="1" stopColor="rgba(72,56,128,0.78)" />
          </linearGradient>
          <radialGradient
            id={holeId}
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(31.8 32.8) rotate(90) scale(11.6 10.8)"
          >
            <stop offset="0" stopColor="#02060D" />
            <stop offset="0.78" stopColor="#07111D" />
            <stop offset="1" stopColor="#251A42" />
          </radialGradient>
        </defs>

        <rect x="4" y="4" width="56" height="56" rx="17" fill={`url(#${backgroundId})`} />
        <rect x="4.5" y="4.5" width="55" height="55" rx="16.5" stroke="rgba(255,255,255,0.16)" />

        <circle cx="32" cy="32" r="14.2" stroke={`url(#${ringBaseId})`} strokeWidth="8.2" />

        <circle
          cx="32"
          cy="32"
          r="13.2"
          stroke={`url(#${ringGlowId})`}
          strokeWidth="2.5"
          strokeDasharray="19 64"
          strokeLinecap="round"
          transform="rotate(-125 32 32)"
        />

        <circle
          cx="32"
          cy="32"
          r="13.2"
          stroke={`url(#${ringShadowId})`}
          strokeWidth="3.2"
          strokeDasharray="26 57"
          strokeLinecap="round"
          transform="rotate(36 32 32)"
        />

        <path
          d="M22.8 24.2C25.1 21.9 28.4 20.7 31.8 20.8"
          stroke="rgba(255,238,205,0.26)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />

        <path
          d="M24.6 40.7C26.8 42.3 29.4 43.1 32.2 43C34.8 42.9 37.2 42 39.2 40.5"
          stroke="rgba(121,98,201,0.42)"
          strokeWidth="3.2"
          strokeLinecap="round"
        />

        <path
          d="M24.6 31.8C24.6 27.76 27.85 24.48 31.87 24.44C36.1 24.4 39.46 27.76 39.42 31.99C39.38 36.15 36.03 39.5 31.87 39.5C27.86 39.5 24.6 36.24 24.6 32.23V31.8Z"
          fill={`url(#${holeId})`}
        />
      </svg>

      <span className="flex items-baseline font-semibold leading-none tracking-[-0.03em] text-[1.35rem] relative -top-[2.8px]">
        <span className="text-white">cap</span>

        <sup className="pl-[2.5px] text-[0.55em] text-white/72">26</sup>
        <sub className="-left-3.25 top-[4.5px] text-[0.55em] text-white/72">better</sub>
      </span>
    </span>
  )
}
