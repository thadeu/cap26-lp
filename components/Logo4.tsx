import { useId } from 'react'

export function Cap26Logo4() {
  const backgroundId = useId()
  const orbId = useId()
  const glowId = useId()

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

          <radialGradient
            id={orbId}
            cx="0"
            cy="0"
            r="0.71"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(25 22) rotate(49.83) scale(29.3847)"
          >
            <stop offset="0" stopColor="#F7FDFF" />
            <stop offset="0.28" stopColor="#8DEBFF" />
            {/* <stop offset="0.7" stopColor="#39C4E6" /> */}
            <stop offset="1" stopColor="#1D6DCA" />
          </radialGradient>

          <radialGradient
            id={glowId}
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(23 21) rotate(50.1944) scale(17.6681)"
          >
            <stop offset="0" stopColor="rgba(255,255,255,0.95)" />
            <stop offset="1" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
        </defs>

        <rect x="4" y="4" width="56" height="56" rx="17" fill={`url(#${backgroundId})`} />
        <rect x="4.5" y="4.5" width="55" height="55" rx="16.5" stroke="rgba(255,255,255,0.16)" />

        <circle cx="32" cy="32" r="17.5" fill={`url(#${orbId})`} opacity="0.98" />
        <circle cx="32" cy="32" r="17" stroke="rgba(255,255,255,0.18)" />

        <text
          x="31"
          y="39.5"
          textAnchor="middle"
          fill="rgba(255,255,255, 0.9)"
          fontSize="20"
          fontWeight="900"
          letterSpacing="-2"
          fontFamily="Inter, system-ui, sans-serif"
        >
          26
        </text>
      </svg>

      <span className="flex items-baseline font-semibold leading-none tracking-[-0.03em] text-[1.35rem] relative -top-[2.8px]">
        <span className="text-white">cap</span>
        <sup className="pl-1 text-[0.55em] text-white/72">26</sup>
      </span>
    </span>
  )
}
