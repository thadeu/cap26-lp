import { useId } from 'react'

export function Cap26Logo3() {
  const backgroundId = useId()
  const windowId = useId()

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
          <linearGradient id={windowId} x1="16" y1="14" x2="46" y2="42" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#FAFCFF" />
            <stop offset="1" stopColor="#D7E5FF" />
          </linearGradient>
        </defs>

        <rect x="4" y="4" width="56" height="56" rx="17" fill={`url(#${backgroundId})`} />
        <rect x="4.5" y="4.5" width="55" height="55" rx="16.5" stroke="rgba(255,255,255,0.16)" />

        <rect x="14" y="15" width="36" height="31" rx="8" fill={`url(#${windowId})`} />
        <rect x="14.5" y="15.5" width="35" height="30" rx="7.5" stroke="rgba(255,255,255,0.22)" />
        <path d="M19 22H45" stroke="rgba(11,36,70,0.16)" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20.5" cy="19" r="1.15" fill="rgba(11,36,70,0.28)" />
        <circle cx="24" cy="19" r="1.15" fill="rgba(11,36,70,0.16)" />

        <rect x="20" y="27" width="18" height="11" rx="3.2" fill="rgba(11,36,70,0.86)" />
        <rect x="40" y="27" width="4.5" height="11" rx="2.2" fill="rgba(11,36,70,0.18)" />
        <rect x="40.8" y="29" width="2.9" height="1.7" rx="0.85" fill="rgba(11,36,70,0.5)" />
        <rect x="40.8" y="32.1" width="2.9" height="1.7" rx="0.85" fill="rgba(11,36,70,0.34)" />
        <rect x="22.5" y="41.2" width="17" height="2.2" rx="1.1" fill="rgba(11,36,70,0.18)" />
        <rect x="28.8" y="40.6" width="1.8" height="3.4" rx="0.9" fill="#0B2446" opacity="0.88" />
        <circle cx="45.5" cy="45.5" r="3.4" fill="#FF6B57" />
      </svg>

      <span className="flex items-baseline font-semibold leading-none tracking-[-0.03em] text-[1.35rem] relative -top-[2.8px]">
        <span className="text-white">cap</span>
        <sup className="pl-1 text-[0.55em] text-white/72">26</sup>
      </span>
    </span>
  )
}
