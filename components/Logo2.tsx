export function Cap26Logo() {
  return (
    <div className="flex flex-col items-center gap-8">
      {/* Logo with integrated typography */}
      <div className="inline-flex items-center gap-1">
        <svg
          width="40"
          height="40"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="shrink-0 drop-shadow-[0_16px_32px_rgba(5,10,20,0.5)]"
        >
          <defs>
            {/* Background gradient - deep blue premium */}
            <linearGradient id="bg-grad" x1="12" y1="6" x2="54" y2="60" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#1A4170" />
              <stop offset="0.5" stopColor="#0D2847" />
              <stop offset="1" stopColor="#08182E" />
            </linearGradient>

            {/* Screen gradient */}
            <linearGradient id="screen-grad" x1="14" y1="14" x2="50" y2="42" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#FFFFFF" />
              <stop offset="0.8" stopColor="#E8F2FF" />
              <stop offset="1" stopColor="#D4E5FF" />
            </linearGradient>

            {/* Webcam gradient */}
            <radialGradient id="webcam-grad" cx="42" cy="42" r="8" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#FFFFFF" />
              <stop offset="0.6" stopColor="#E8F2FF" />
              <stop offset="1" stopColor="#D0E3FF" />
            </radialGradient>

            {/* Record point gradient */}
            <radialGradient id="record-grad" cx="42" cy="42" r="3" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#FF7566" />
              <stop offset="0.7" stopColor="#FF6B57" />
              <stop offset="1" stopColor="#F35847" />
            </radialGradient>

            {/* Audio wave gradient */}
            <linearGradient id="audio-grad" x1="20" y1="48" x2="28" y2="48" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="rgba(255,255,255,0.7)" />
              <stop offset="1" stopColor="rgba(255,255,255,0.95)" />
            </linearGradient>

            {/* Sheen */}
            <linearGradient id="sheen-grad" x1="18" y1="10" x2="46" y2="28" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="rgba(255,255,255,0.7)" />
              <stop offset="0.5" stopColor="rgba(255,255,255,0.25)" />
              <stop offset="1" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
          </defs>

          {/* Base rounded square */}
          <rect x="4" y="4" width="56" height="56" rx="16" fill="url(#bg-grad)" />

          {/* Subtle border glow */}
          <rect x="4.5" y="4.5" width="55" height="55" rx="15.5" stroke="rgba(255,255,255,0.18)" strokeWidth="0.5" />

          {/* Screen/Monitor frame - main element */}
          <rect x="14" y="14" width="36" height="28" rx="3" fill="url(#screen-grad)" opacity="0.95" />

          {/* Screen border for definition */}
          <rect
            x="14"
            y="14"
            width="36"
            height="28"
            rx="3"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="0.5"
            fill="none"
          />

          {/* Screen inner shadow for depth */}
          <rect x="16" y="16" width="32" height="24" rx="1.5" fill="rgba(100,150,200,0.15)" />

          {/* Webcam circle - overlapping bottom right */}
          {/* <circle cx="42" cy="42" r="8" fill="url(#webcam-grad)" /> */}

          {/* Webcam border */}
          {/* <circle cx="42" cy="42" r="8" stroke="rgba(255,255,255,0.5)" strokeWidth="0.5" fill="none" /> */}

          {/* Webcam lens inner */}
          {/* <circle cx="42" cy="42" r="5" fill="rgba(100,150,200,0.2)" /> */}

          {/* Recording indicator - small dot in top right of icon */}
          <circle cx="48" cy="16" r="5" fill="#FF3B30" />

          {/* Audio waveform - left side */}
          <g opacity="0.9">
            <rect x="20" y="46" width="1.5" height="6" rx="0.75" fill="url(#audio-grad)" />
            <rect x="23" y="44" width="1.5" height="10" rx="0.75" fill="url(#audio-grad)" />
            <rect x="26" y="47" width="1.5" height="4" rx="0.75" fill="url(#audio-grad)" />
            <rect x="29" y="44" width="1.5" height="8" rx="0.75" fill="url(#audio-grad)" />
            <rect x="31" y="46" width="1.5" height="8" rx="0.75" fill="url(#audio-grad)" />
            <rect x="33.5" y="44" width="1.5" height="10" rx="0.75" fill="url(#audio-grad)" />
            <rect x="36" y="46" width="1.5" height="7" rx="0.75" fill="url(#audio-grad)" />
            <rect x="38" y="44" width="1.5" height="10" rx="0.75" fill="url(#audio-grad)" />
            <rect x="40.5" y="46" width="1.5" height="8" rx="0.75" fill="url(#audio-grad)" />
            <rect x="43" y="47" width="1.5" height="5" rx="0.75" fill="url(#audio-grad)" />
            <rect x="45" y="44" width="1.5" height="10" rx="0.75" fill="url(#audio-grad)" />
          </g>
        </svg>

        <span className="flex items-baseline font-semibold leading-none tracking-[-0.03em] text-[2rem] relative -top-[3px]">
          <span className="text-white-900">cap</span>
          <sup className="pl-1.5 text-[0.52em] text-gray-500">26</sup>
        </span>
      </div>
    </div>
  )
}
