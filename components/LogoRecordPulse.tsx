export function Cap26RecordPulse() {
  return (
    <div className="flex flex-col items-center gap-8">
      {/* Logo Icon */}
      <div className="relative w-9 h-9 flex items-center justify-center">
        <svg
          width="192"
          height="192"
          viewBox="0 0 192 192"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-lg"
        >
          {/* Background for macOS app icon style */}
          <rect width="192" height="192" rx="42" fill="url(#bgGradient)" />

          {/* Outer C shape - circular stroke */}
          <circle
            cx="96"
            cy="96"
            r="48"
            stroke="white"
            strokeWidth="16"
            strokeDasharray="240 60"
            strokeDashoffset="30"
            opacity="0.9"
            strokeLinecap="round"
          />

          {/* Inner subtle glow for depth */}
          <circle
            cx="96"
            cy="96"
            r="48"
            stroke="url(#innerGlow)"
            strokeWidth="16"
            strokeDasharray="240 60"
            strokeDashoffset="30"
            opacity="0.3"
            strokeLinecap="round"
          />

          {/* Record point - positioned at the opening of the C */}
          <circle cx="134" cy="96" r="10" fill="url(#recordGradient)" />

          {/* Inner record point highlight for "pulse" effect */}
          <circle cx="134" cy="96" r="6" fill="url(#recordHighlight)" opacity="0.6" />

          {/* Subtle outer pulse ring */}
          <circle cx="134" cy="96" r="12" stroke="url(#pulseRing)" strokeWidth="2" opacity="0.4" />

          {/* Gradients */}
          <defs>
            {/* Background gradient - premium blue */}
            <linearGradient id="bgGradient" x1="0" y1="0" x2="192" y2="192" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#5B7FE8" />
              <stop offset="100%" stopColor="#3E5FC9" />
            </linearGradient>

            {/* Inner glow for C */}
            <linearGradient id="innerGlow" x1="96" y1="48" x2="96" y2="144" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="white" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>

            {/* Record point gradient - subtle red */}
            <radialGradient id="recordGradient" cx="134" cy="96" r="10" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FF6B6B" />
              <stop offset="100%" stopColor="#EE5555" />
            </radialGradient>

            {/* Record highlight */}
            <radialGradient id="recordHighlight" cx="134" cy="96" r="6" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="white" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>

            {/* Pulse ring */}
            <radialGradient id="pulseRing" cx="134" cy="96" r="12" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FF6B6B" />
              <stop offset="100%" stopColor="#FF6B6B" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Logo Text */}
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-4xl font-semibold text-gray-900 tracking-tight">Cap26</h1>
        <p className="text-sm text-gray-500 font-medium">Record Pulse</p>
      </div>

      {/* Size variations preview */}
      <div className="flex items-center gap-6 pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-400 font-medium">Preview:</p>

        {/* 64px version */}
        <svg
          width="64"
          height="64"
          viewBox="0 0 192 192"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-lg"
        >
          <rect width="192" height="192" rx="42" fill="url(#bgGradient2)" />
          <circle
            cx="96"
            cy="96"
            r="48"
            stroke="white"
            strokeWidth="16"
            strokeDasharray="240 60"
            strokeDashoffset="30"
            opacity="0.9"
            strokeLinecap="round"
          />
          <circle cx="134" cy="96" r="10" fill="url(#recordGradient2)" />
          <circle cx="134" cy="96" r="6" fill="url(#recordHighlight2)" opacity="0.6" />
          <defs>
            <linearGradient id="bgGradient2" x1="0" y1="0" x2="192" y2="192" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#5B7FE8" />
              <stop offset="100%" stopColor="#3E5FC9" />
            </linearGradient>
            <radialGradient id="recordGradient2" cx="134" cy="96" r="10" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FF6B6B" />
              <stop offset="100%" stopColor="#EE5555" />
            </radialGradient>
            <radialGradient id="recordHighlight2" cx="134" cy="96" r="6" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="white" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>

        {/* 32px version */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 192 192"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow"
        >
          <rect width="192" height="192" rx="42" fill="url(#bgGradient3)" />
          <circle
            cx="96"
            cy="96"
            r="48"
            stroke="white"
            strokeWidth="16"
            strokeDasharray="240 60"
            strokeDashoffset="30"
            opacity="0.9"
            strokeLinecap="round"
          />
          <circle cx="134" cy="96" r="10" fill="#FF6B6B" />
          <defs>
            <linearGradient id="bgGradient3" x1="0" y1="0" x2="192" y2="192" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#5B7FE8" />
              <stop offset="100%" stopColor="#3E5FC9" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}
