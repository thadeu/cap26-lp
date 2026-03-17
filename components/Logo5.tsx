import { useId } from 'react'

export function Cap26Logo5() {
  const backgroundId = useId()
  const ringAId = useId()
  const ringBId = useId()
  const ringCId = useId()

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
          <linearGradient id={ringAId} x1="18" y1="19" x2="35" y2="44" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#C36CFF" />
            <stop offset="1" stopColor="#6C42E5" />
          </linearGradient>
          <linearGradient id={ringBId} x1="27" y1="17" x2="46" y2="41" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#9E4DFF" />
            <stop offset="1" stopColor="#4F73FF" />
          </linearGradient>
          <linearGradient id={ringCId} x1="21" y1="28" x2="42" y2="47" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#62D6FF" />
            <stop offset="1" stopColor="#43B8C8" />
          </linearGradient>
        </defs>

        <rect x="4" y="4" width="56" height="56" rx="17" fill={`url(#${backgroundId})`} />
        <rect x="4.5" y="4.5" width="55" height="55" rx="16.5" stroke="rgba(255,255,255,0.16)" />

        <g opacity="0.98">
          <circle cx="26.5" cy="28.5" r="10.5" stroke={`url(#${ringAId})`} strokeWidth="6.2" />
          <circle cx="37.5" cy="27.5" r="10.5" stroke={`url(#${ringBId})`} strokeWidth="6.2" />
          <circle cx="32" cy="37.5" r="10.5" stroke={`url(#${ringCId})`} strokeWidth="6.2" />
        </g>

        {/* <text
          x="32"
          y="36.9"
          textAnchor="middle"
          fill="rgba(255,255,255,0.82)"
          fontSize="11.5"
          fontWeight="600"
          letterSpacing="-0.9"
          fontFamily="Inter, system-ui, sans-serif"
        >
          26
        </text> */}
      </svg>

      <span className="flex items-baseline font-semibold leading-none tracking-[-0.03em] text-[1.35rem] relative -top-[2.8px]">
        <span className="text-white">cap</span>
        <sup className="pl-1 text-[0.55em] text-white/72">26</sup>
      </span>
    </span>
  )
}
