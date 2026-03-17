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
          <linearGradient id="cap26-sheen" x1="19" y1="11" x2="44" y2="29" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="rgba(255,255,255,0.62)" />
            <stop offset="1" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>

        <rect x="4" y="4" width="56" height="56" rx="17" fill="url(#cap26-bg)" />
        <rect x="4.5" y="4.5" width="55" height="55" rx="16.5" stroke="rgba(255,255,255,0.16)" />

        <path
          d="M15 21.5C15 18.4624 17.4624 16 20.5 16H34C35.1046 16 36 16.8954 36 18V22C36 23.1046 35.1046 24 34 24H23.5C22.1193 24 21 25.1193 21 26.5V37.5C21 38.8807 22.1193 40 23.5 40H34C35.1046 40 36 40.8954 36 42V46C36 47.1046 35.1046 48 34 48H20.5C17.4624 48 15 45.5376 15 42.5V21.5Z"
          fill="url(#cap26-back)"
        />
        <path
          d="M28 21.5C28 18.4624 30.4624 16 33.5 16H43.5C46.5376 16 49 18.4624 49 21.5V42.5C49 45.5376 46.5376 48 43.5 48H33.5C30.4624 48 28 45.5376 28 42.5V38.5C28 37.1193 26.8807 36 25.5 36H23C21.8954 36 21 35.1046 21 34V30C21 28.8954 21.8954 28 23 28H25.5C26.8807 28 28 26.8807 28 25.5V21.5Z"
          fill="url(#cap26-front)"
        />
        <path
          d="M13 11C22.5 11 30.5 13.2 37.5 18.5"
          stroke="url(#cap26-sheen)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
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
