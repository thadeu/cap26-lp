export function Cap26Logo() {
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
          <linearGradient id="cap26-bg" x1="12" y1="8" x2="53" y2="58" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#173A67" />
            <stop offset="0.55" stopColor="#0B2446" />
            <stop offset="1" stopColor="#07172F" />
          </linearGradient>
          <linearGradient id="cap26-back" x1="18" y1="16" x2="35" y2="42" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="rgba(255,255,255,0.9)" />
            <stop offset="1" stopColor="rgba(207,229,255,0.52)" />
          </linearGradient>
          <linearGradient id="cap26-front" x1="28" y1="18" x2="47" y2="45" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#FDFEFF" />
            <stop offset="1" stopColor="#CFE2FF" />
          </linearGradient>
        </defs>

        <rect x="4" y="4" width="56" height="56" rx="17" fill="url(#cap26-bg)" />
        <rect x="4.5" y="4.5" width="55" height="55" rx="16.5" stroke="rgba(255,255,255,0.16)" />

        <rect x="14" y="16" width="36" height="30" rx="8" fill="url(#cap26-back)" />
        <rect x="14.5" y="16.5" width="35" height="29" rx="7.5" stroke="rgba(255,255,255,0.24)" strokeWidth="1" />
        <path d="M19 23H45" stroke="rgba(7,23,47,0.18)" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20.5" cy="20" r="1.15" fill="rgba(7,23,47,0.26)" />
        <circle cx="24" cy="20" r="1.15" fill="rgba(7,23,47,0.16)" />

        <rect x="18" y="27" width="28" height="12" rx="3.5" fill="rgba(11,36,70,0.84)" />
        <path d="M22 29.5V32.5H19.5" stroke="#EAF2FF" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M42 29.5V32.5H44.5" stroke="#EAF2FF" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 36.5V33.5H19.5" stroke="#EAF2FF" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M42 36.5V33.5H44.5" stroke="#EAF2FF" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />

        <rect x="20" y="41.5" width="22" height="3.2" rx="1.6" fill="rgba(11,36,70,0.24)" />
        <rect x="21.5" y="42.3" width="9.5" height="1.6" rx="0.8" fill="rgba(255,255,255,0.78)" />
        <rect x="32" y="41.4" width="1.8" height="3.4" rx="0.9" fill="#CFE2FF" />
        <circle cx="46" cy="46" r="3.5" fill="#FF6B57" />
        <circle cx="46" cy="46" r="6.5" stroke="rgba(255,107,87,0.28)" />
      </svg>

      <span className="flex items-baseline font-semibold leading-none tracking-[-0.03em] text-[1.35rem] relative -top-[2.8px]">
        <span className="text-white">cap</span>
        <sup className="pl-1 text-[0.55em] text-white/72">26</sup>
      </span>
    </span>
  )
}
