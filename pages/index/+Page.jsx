import { useEffect, useRef } from 'react'
import { Config } from 'vike-react/Config'
import { usePageContext } from 'vike-react/usePageContext'
import { t } from '../../i18n/index.js'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Stella',
  applicationCategory: 'MultimediaApplication',
  operatingSystem: 'macOS',
  description:
    'Screen recorder para macOS com editor completo, cortes, efeitos, microfone, webcam, video, legendas e background em um fluxo rapido.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
}

const RAY_COLORS = [
  '#8b6cff', '#38bdf8', '#06b6d4', '#22c55e', '#ffd60a',
  '#fb923c', '#ff6b9d', '#e879f9', '#67e8f9', '#a78bfa',
]

function StellaLogomark({ width = 340, className, animated = false }) {
  const fontSize = Math.round(width * 0.28)
  const rayLen = Math.round(width * 0.22)
  const textGap = Math.round(fontSize * 0.18)
  const VB_W = rayLen * 2 + 20
  const cx = VB_W / 2
  const cy = rayLen + 10
  const textBaseline = cy - textGap
  const VB_H = cy + rayLen + 10
  const count = RAY_COLORS.length

  const rays = RAY_COLORS.map((color, i) => {
    const rad = ((i / count) * 360 * Math.PI) / 180
    return { color, x2: cx + Math.cos(rad) * rayLen, y2: cy + Math.sin(rad) * rayLen }
  })

  return (
    <svg
      viewBox={`0 0 ${VB_W} ${VB_H}`}
      width={VB_W}
      height={VB_H}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{
        overflow: 'visible',
        filter: 'drop-shadow(0 0 24px rgba(139,108,255,0.30))',
        ...(animated ? { animation: 'stellaStarPop 2.5s cubic-bezier(0.34, 1.56, 0.64, 1) infinite' } : {}),
      }}
    >
      <defs>
        {rays.map((ray, i) => (
          <linearGradient key={i} id={`slm-rg-${i}`} x1={cx} y1={cy} x2={ray.x2} y2={ray.y2} gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={ray.color} stopOpacity="0" />
            <stop offset="45%" stopColor={ray.color} stopOpacity="0" />
            <stop offset="75%" stopColor={ray.color} stopOpacity="0.8" />
            <stop offset="100%" stopColor={ray.color} stopOpacity="1" />
          </linearGradient>
        ))}
        <filter id="slm-tg" x="-40%" y="-60%" width="180%" height="240%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="b1" />
          <feGaussianBlur in="SourceAlpha" stdDeviation="12" result="b2" />
          <feFlood floodColor="#8b6cff" floodOpacity="0.28" result="c1" />
          <feFlood floodColor="#38bdf8" floodOpacity="0.10" result="c2" />
          <feComposite in="c1" in2="b1" operator="in" result="g1" />
          <feComposite in="c2" in2="b2" operator="in" result="g2" />
          <feMerge>
            <feMergeNode in="g2" />
            <feMergeNode in="g1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g>
        {rays.map((ray, i) => (
          <line key={i} x1={cx} y1={cy} x2={ray.x2} y2={ray.y2} stroke={`url(#slm-rg-${i})`} strokeWidth={2.25} strokeLinecap="round" />
        ))}
      </g>
      <text x={cx} y={textBaseline} textAnchor="middle" fontFamily="-apple-system, 'SF Pro Display', 'Helvetica Neue', sans-serif" fontWeight="800" fontSize={fontSize} letterSpacing="-0.025em" fill="white" filter="url(#slm-tg)">
        Stella
      </text>
    </svg>
  )
}

const ConfettiParticles = () => (
  <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMin slice" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Row 1 — y 30‑100 */}
    <rect x="60" y="35" width="7" height="3" rx="1" fill="#8b6cff" opacity="0.7" transform="rotate(18 60 35)"/>
    <rect x="120" y="60" width="8" height="3" rx="1" fill="#8b6cff" opacity="0.7" transform="rotate(25 120 60)"/>
    <circle cx="195" cy="45" r="3" fill="#ff6b9d" opacity="0.6"/>
    <rect x="250" y="80" width="6" height="6" rx="1" fill="#67e8f9" opacity="0.55" transform="rotate(52 250 80)"/>
    <rect x="340" y="90" width="6" height="6" rx="1" fill="#38bdf8" opacity="0.5" transform="rotate(45 340 90)"/>
    <circle cx="420" cy="55" r="2.5" fill="#ffd60a" opacity="0.6"/>
    <rect x="520" y="40" width="9" height="3" rx="1" fill="#22c55e" opacity="0.6" transform="rotate(-15 520 40)"/>
    <rect x="610" y="70" width="5" height="5" rx="1" fill="#e879f9" opacity="0.55" transform="rotate(38 610 70)"/>
    <circle cx="690" cy="50" r="3.5" fill="#f97316" opacity="0.5"/>
    <rect x="780" y="75" width="7" height="7" rx="1" fill="#ffd60a" opacity="0.5" transform="rotate(30 780 75)"/>
    <rect x="860" y="45" width="6" height="3" rx="1" fill="#a78bfa" opacity="0.6" transform="rotate(-62 860 45)"/>
    <rect x="960" y="50" width="8" height="3" rx="1" fill="#ff6b9d" opacity="0.6" transform="rotate(-40 960 50)"/>
    <circle cx="1030" cy="85" r="3" fill="#22c55e" opacity="0.5"/>
    <rect x="1100" y="80" width="6" height="6" rx="1" fill="#f97316" opacity="0.4" transform="rotate(60 1100 80)"/>
    <rect x="1160" y="50" width="7" height="3" rx="1" fill="#38bdf8" opacity="0.55" transform="rotate(-28 1160 50)"/>

    {/* Row 2 — y 100‑180 */}
    <rect x="40" y="130" width="6" height="3" rx="1" fill="#ffd60a" opacity="0.5" transform="rotate(42 40 130)"/>
    <circle cx="110" cy="155" r="3" fill="#22c55e" opacity="0.45"/>
    <circle cx="200" cy="120" r="3.5" fill="#e879f9" opacity="0.5"/>
    <rect x="275" y="145" width="7" height="3" rx="1" fill="#ff6b9d" opacity="0.5" transform="rotate(-35 275 145)"/>
    <rect x="360" y="165" width="5" height="5" rx="1" fill="#8b6cff" opacity="0.45" transform="rotate(68 360 165)"/>
    <circle cx="450" cy="140" r="3" fill="#67e8f9" opacity="0.45"/>
    <rect x="540" y="115" width="8" height="3" rx="1" fill="#f97316" opacity="0.5" transform="rotate(22 540 115)"/>
    <rect x="650" y="130" width="7" height="3" rx="1" fill="#8b6cff" opacity="0.5" transform="rotate(50 650 130)"/>
    <circle cx="730" cy="170" r="2.5" fill="#38bdf8" opacity="0.45"/>
    <rect x="810" y="110" width="6" height="6" rx="1" fill="#ffd60a" opacity="0.4" transform="rotate(-48 810 110)"/>
    <rect x="850" y="150" width="5" height="5" rx="1" fill="#a78bfa" opacity="0.4" transform="rotate(-20 850 150)"/>
    <circle cx="940" cy="160" r="3" fill="#e879f9" opacity="0.4"/>
    <circle cx="1050" cy="135" r="3" fill="#38bdf8" opacity="0.5"/>
    <rect x="1120" y="155" width="7" height="3" rx="1" fill="#22c55e" opacity="0.4" transform="rotate(33 1120 155)"/>

    {/* Row 3 — y 180‑280 */}
    <rect x="80" y="200" width="6" height="3" rx="1" fill="#22c55e" opacity="0.4" transform="rotate(35 80 200)"/>
    <circle cx="160" cy="240" r="3" fill="#f97316" opacity="0.4"/>
    <rect x="230" y="195" width="5" height="5" rx="1" fill="#8b6cff" opacity="0.4" transform="rotate(-55 230 195)"/>
    <rect x="280" y="220" width="8" height="3" rx="1" fill="#ffd60a" opacity="0.45" transform="rotate(-55 280 220)"/>
    <rect x="370" y="260" width="7" height="3" rx="1" fill="#e879f9" opacity="0.35" transform="rotate(44 370 260)"/>
    <circle cx="480" cy="240" r="3.5" fill="#ff6b9d" opacity="0.35"/>
    <rect x="560" y="210" width="6" height="3" rx="1" fill="#67e8f9" opacity="0.4" transform="rotate(-30 560 210)"/>
    <circle cx="630" cy="270" r="2.5" fill="#a78bfa" opacity="0.35"/>
    <rect x="700" y="210" width="6" height="6" rx="1" fill="#f97316" opacity="0.4" transform="rotate(70 700 210)"/>
    <rect x="790" y="255" width="8" height="3" rx="1" fill="#38bdf8" opacity="0.35" transform="rotate(15 790 255)"/>
    <rect x="900" y="250" width="9" height="3" rx="1" fill="#e879f9" opacity="0.35" transform="rotate(-30 900 250)"/>
    <circle cx="980" cy="225" r="3" fill="#ffd60a" opacity="0.35"/>
    <rect x="1050" y="265" width="5" height="5" rx="1" fill="#22c55e" opacity="0.3" transform="rotate(58 1050 265)"/>
    <circle cx="1130" cy="230" r="3" fill="#67e8f9" opacity="0.35"/>

    {/* Row 4 — y 290‑400 */}
    <rect x="50" y="310" width="7" height="3" rx="1" fill="#ff6b9d" opacity="0.3" transform="rotate(-18 50 310)"/>
    <rect x="150" y="320" width="7" height="3" rx="1" fill="#8b6cff" opacity="0.3" transform="rotate(40 150 320)"/>
    <circle cx="240" cy="350" r="3" fill="#38bdf8" opacity="0.25"/>
    <rect x="320" y="295" width="6" height="6" rx="1" fill="#ffd60a" opacity="0.3" transform="rotate(-42 320 295)"/>
    <rect x="400" y="350" width="5" height="5" rx="1" fill="#38bdf8" opacity="0.25" transform="rotate(-45 400 350)"/>
    <circle cx="500" cy="330" r="2.5" fill="#e879f9" opacity="0.25"/>
    <rect x="580" y="370" width="8" height="3" rx="1" fill="#f97316" opacity="0.25" transform="rotate(28 580 370)"/>
    <circle cx="600" cy="380" r="3" fill="#22c55e" opacity="0.2"/>
    <rect x="710" y="305" width="6" height="3" rx="1" fill="#a78bfa" opacity="0.25" transform="rotate(-55 710 305)"/>
    <rect x="820" y="340" width="6" height="3" rx="1" fill="#ffd60a" opacity="0.25" transform="rotate(55 820 340)"/>
    <circle cx="910" cy="380" r="3" fill="#67e8f9" opacity="0.2"/>
    <circle cx="1020" cy="370" r="2.5" fill="#ff6b9d" opacity="0.2"/>
    <rect x="1090" y="330" width="7" height="3" rx="1" fill="#8b6cff" opacity="0.2" transform="rotate(48 1090 330)"/>
    <rect x="1150" y="365" width="5" height="5" rx="1" fill="#22c55e" opacity="0.2" transform="rotate(-32 1150 365)"/>

    {/* Row 5 — y 400‑520 */}
    <circle cx="90" cy="430" r="2.5" fill="#f97316" opacity="0.18"/>
    <rect x="170" y="460" width="6" height="3" rx="1" fill="#38bdf8" opacity="0.18" transform="rotate(36 170 460)"/>
    <rect x="260" y="440" width="8" height="3" rx="1" fill="#a78bfa" opacity="0.15" transform="rotate(-25 260 440)"/>
    <circle cx="350" cy="470" r="3" fill="#ffd60a" opacity="0.15"/>
    <rect x="440" y="420" width="5" height="5" rx="1" fill="#ff6b9d" opacity="0.15" transform="rotate(52 440 420)"/>
    <rect x="530" y="490" width="7" height="3" rx="1" fill="#22c55e" opacity="0.15" transform="rotate(-40 530 490)"/>
    <circle cx="620" cy="450" r="2.5" fill="#8b6cff" opacity="0.15"/>
    <rect x="730" y="460" width="6" height="6" rx="1" fill="#e879f9" opacity="0.15" transform="rotate(35 730 460)"/>
    <rect x="830" y="500" width="8" height="3" rx="1" fill="#67e8f9" opacity="0.12" transform="rotate(-22 830 500)"/>
    <circle cx="920" cy="435" r="3" fill="#f97316" opacity="0.12"/>
    <rect x="1000" y="480" width="6" height="3" rx="1" fill="#a78bfa" opacity="0.12" transform="rotate(65 1000 480)"/>
    <circle cx="1080" cy="450" r="2.5" fill="#8b6cff" opacity="0.12"/>
    <rect x="1140" y="510" width="5" height="5" rx="1" fill="#ffd60a" opacity="0.1" transform="rotate(-48 1140 510)"/>

    {/* Row 6 — y 530‑700 */}
    <rect x="100" y="560" width="6" height="3" rx="1" fill="#e879f9" opacity="0.1" transform="rotate(28 100 560)"/>
    <circle cx="210" cy="590" r="2.5" fill="#22c55e" opacity="0.1"/>
    <rect x="330" y="540" width="7" height="3" rx="1" fill="#ff6b9d" opacity="0.1" transform="rotate(-38 330 540)"/>
    <rect x="470" y="610" width="5" height="5" rx="1" fill="#38bdf8" opacity="0.08" transform="rotate(55 470 610)"/>
    <circle cx="580" cy="570" r="3" fill="#ffd60a" opacity="0.08"/>
    <rect x="700" y="600" width="8" height="3" rx="1" fill="#8b6cff" opacity="0.08" transform="rotate(-45 700 600)"/>
    <rect x="840" y="550" width="6" height="6" rx="1" fill="#f97316" opacity="0.08" transform="rotate(32 840 550)"/>
    <circle cx="960" cy="630" r="2.5" fill="#67e8f9" opacity="0.06"/>
    <rect x="1070" y="580" width="7" height="3" rx="1" fill="#a78bfa" opacity="0.06" transform="rotate(-52 1070 580)"/>
    <circle cx="1150" cy="640" r="2.5" fill="#e879f9" opacity="0.06"/>
  </svg>
)

export default function Page() {
  const { locale } = usePageContext()
  const year = new Date().getFullYear()
  const heroRef = useRef(null)

  useEffect(() => {
    const confetti = heroRef.current?.querySelector('.hero-confetti')
    const header = document.querySelector('.header')

    if (!confetti || !header) return

    const onScroll = () => {
      const scrolled = window.scrollY > window.outerHeight
      confetti.style.animationPlayState = scrolled ? 'paused' : 'running'

      header.classList.toggle('header-blur', scrolled)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <Config
        title={t(locale, 'seoTitle')}
        description={t(locale, 'seoDescription')}
        image="/og-stella.svg"
        Head={() => (
          <>
            <meta name="robots" content="index,follow" />
            <meta name="theme-color" content="#0d0d12" />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content={locale === 'en' ? 'en_US' : 'pt_BR'} />
            <meta property="og:site_name" content="Stella" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Stella for macOS" />
            <meta
              name="twitter:description"
              content={t(locale, 'twitterDescription')}
            />
            <link rel="alternate" hrefLang="en" href="https://stella.app/" />
            <link rel="alternate" hrefLang="pt-BR" href="https://stella.app/pt-br" />
            <link rel="alternate" hrefLang="x-default" href="https://stella.app/" />
            <script type="application/ld+json">{JSON.stringify(schema)}</script>
          </>
        )}
      />

      <div className="site">
        <header className="header">
          <div className="wrap header-inner">
            <a className="logo" href={locale === 'pt-BR' ? '/pt-br' : '/'} aria-label="Stella home">
              <span className="logo-text stella-glow">Stella</span>
            </a>

            <nav className="nav" aria-label="Primary">
              <a className="nav-icon-link cursor-pointer" href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                <span className="pl-2">Github</span>
              </a>

              <a href="mailto:hello@stella.app">Contact</a>
            </nav>
          </div>
        </header>

        <main className="hero" ref={heroRef}>
          <div className="hero-bg" aria-hidden="true" />
          
          <div className="hero-confetti" aria-hidden="true">
            <ConfettiParticles />
            <ConfettiParticles />
          </div>

          <div className="wrap hero-content">
            <h1>
              {t(locale, 'heroTitle1')}
            </h1>
            
            <h1>
              {t(locale, 'heroTitle2')}
            </h1>

            <p className="hero-sub">
              {t(locale, 'heroSub')}
            </p>

            <div className="hero-actions">
              <a className="btn primary cursor-pointer" href="#download">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                {t(locale, 'btnDownload')}
              </a>

              <a
                className="btn secondary cursor-pointer"
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                {t(locale, 'btnGithub')}
              </a>
            </div>

            <span className="hero-meta">{t(locale, 'heroMeta')}</span>
          </div>

          <div className="wrap hero-image-wrap">
            <div className="hero-glow" aria-hidden="true" />
            
            <img
              className="hero-image"
              src="/screenshot-1.png"
              alt={t(locale, 'imgAlt')}
              width="1280"
              height="800"
            />
          </div>
        </main>

        {/* ── Feature Sections ── */}
        <section className="feature-section">
          <div className="wrap feature-content">
            <span className="section-label">{t(locale, 'sectionRecordingLabel')}</span>
            <h2>{t(locale, 'sectionRecordingTitle')}</h2>
            <p className="section-sub">{t(locale, 'sectionRecordingSub')}</p>
          </div>

          <div className="wrap feature-image-wrap">
            <div className="feature-glow" aria-hidden="true" />
            <img
              className="feature-image"
              src="/screenshot-2.png"
              alt={t(locale, 'sectionRecordingTitle')}
              width="1280"
              height="800"
              loading="lazy"
            />
          </div>
        </section>

        <section className="feature-section">
          <div className="wrap feature-content">
            <span className="section-label">{t(locale, 'sectionEditorLabel')}</span>
            <h2>{t(locale, 'sectionEditorTitle')}</h2>
            <p className="section-sub">{t(locale, 'sectionEditorSub')}</p>
          </div>
          <div className="wrap feature-image-wrap">
            <div className="feature-glow" aria-hidden="true" />
            <img
              className="feature-image"
              src="/screenshot-3.png"
              alt={t(locale, 'sectionEditorTitle')}
              width="1280"
              height="800"
              loading="lazy"
            />
          </div>
        </section>

        <section className="feature-section">
          <div className="wrap feature-content">
            <span className="section-label">{t(locale, 'sectionEffectsLabel')}</span>
            <h2>{t(locale, 'sectionEffectsTitle')}</h2>
            <p className="section-sub">{t(locale, 'sectionEffectsSub')}</p>
          </div>
          <div className="wrap feature-image-wrap">
            <div className="feature-glow" aria-hidden="true" />
            <img
              className="feature-image"
              src="/screenshot-4.png"
              alt={t(locale, 'sectionEffectsTitle')}
              width="1280"
              height="800"
              loading="lazy"
            />
          </div>
        </section>

        <section className="feature-section">
          <div className="wrap feature-content">
            <span className="section-label">{t(locale, 'sectionExportLabel')}</span>
            <h2>{t(locale, 'sectionExportTitle')}</h2>
            <p className="section-sub">{t(locale, 'sectionExportSub')}</p>
          </div>
          <div className="wrap feature-image-wrap">
            <div className="feature-glow" aria-hidden="true" />
            <img
              className="feature-image"
              src="/screenshot-5.png"
              alt={t(locale, 'sectionExportTitle')}
              width="1280"
              height="800"
              loading="lazy"
            />
          </div>
        </section>

        {/* ── Showcase scroll ── */}
        <section className="showcase-section">
          <div className="wrap">
            <div className="showcase-header">
              <h2>{t(locale, 'showcaseTitle')}</h2>
              <p className="section-sub">{t(locale, 'showcaseSub')}</p>
            </div>
          </div>

          <div className="showcase-scroll">
            {[1, 2, 3, 4, 6].map((i) => (
              <div key={i} className="showcase-card">
                <div className="showcase-media">
                  <img
                    className="object-cover  "
                    src={`/showcase-${i}.png`}
                    alt={t(locale, `showcaseItem${i}Title`)}
                    loading="lazy"
                  />
                </div>
                <h3 className="showcase-title">{t(locale, `showcaseItem${i}Title`)}</h3>
                <p className="showcase-desc">{t(locale, `showcaseItem${i}Desc`)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Pricing ── */}
        <section className="pricing-section">
          <div className="wrap">
            <div className="feature-content text-2xl">
              <h2>{t(locale, 'pricingTitle')}</h2>
              <p className="section-sub">{t(locale, 'pricingSub')}</p>
            </div>

            <div className="pricing-grid">
              {/* Monthly */}
              <div className="pricing-card">
                <span className="pricing-badge">{t(locale, 'pricingMonthlyLabel')}</span>
                
                <h3 className="pricing-name">{t(locale, 'pricingName')}</h3>
                
                <p className="pricing-desc">{t(locale, 'pricingDesc')}</p>
                
                <div className="pricing-price">
                  <span className="pricing-currency">$</span>
                  <span className="pricing-amount">{t(locale, 'pricingMonthlyPrice')}</span>
                  <span className="pricing-period">{t(locale, 'pricingMonthlyPeriod')}</span>
                </div>
                
                <p className="pricing-note">{t(locale, 'pricingMonthlyNote')}</p>
                
                <a className="pricing-btn" href="#download">{t(locale, 'pricingCta')}</a>
                
                <ul className="pricing-features">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    {t(locale, 'pricingFeature1')}
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    {t(locale, 'pricingFeature2')}
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    {t(locale, 'pricingFeature3')}
                  </li>
                </ul>
              </div>

              {/* Yearly — highlighted */}
              <div className="pricing-card pricing-card--featured">
                <span className="pricing-badge">{t(locale, 'pricingYearlyLabel')}</span>
                <h3 className="pricing-name">{t(locale, 'pricingName')}</h3>
                <p className="pricing-desc">{t(locale, 'pricingDesc')}</p>
                <div className="pricing-price">
                  <span className="pricing-currency">$</span>
                  <span className="pricing-amount">{t(locale, 'pricingYearlyPrice')}</span>
                  <span className="pricing-period">{t(locale, 'pricingYearlyPeriod')}</span>
                </div>
                <p className="pricing-note">{t(locale, 'pricingYearlyNote')}</p>
                <a className="pricing-btn pricing-btn--accent" href="#download">{t(locale, 'pricingCta')}</a>
                <ul className="pricing-features">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    {t(locale, 'pricingFeature1')}
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    {t(locale, 'pricingFeature2')}
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    {t(locale, 'pricingFeature3')}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="faq-section">
          <div className="wrap">
            <div className="feature-content">
              <h2>{t(locale, 'faqTitle')}</h2>
              <p className="section-sub">{t(locale, 'faqSub')}</p>
            </div>

            <div className="faq-list">
              {[1, 2, 3, 4, 5].map((i) => (
                <details key={i} className="faq-item">
                  <summary className="faq-question">
                    <span>{t(locale, `faqQ${i}`)}</span>
                    <svg className="faq-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
                  </summary>
                  <div className="faq-answer">
                    <p>{t(locale, `faqA${i}`)}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="cta-section">
          <div className="wrap cta-content">
            <h2>{t(locale, 'ctaTitle')}</h2>
            
            <p className="section-sub">{t(locale, 'ctaSub')}</p>
            
            <div className="hero-actions">
              <a className="btn primary cursor-pointer" href="#download">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                {t(locale, 'btnDownload')}
              </a>
              <a
                className="btn secondary cursor-pointer"
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                {t(locale, 'btnGithub')}
              </a>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="wrap footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="logo-text">Stella</span>
              </div>

              <p>{t(locale, 'footerDesc')}</p>
              
              <small>{t(locale, 'footerCopyright').replace('{year}', year)}</small>
            </div>

            <div className="footer-col">
              <h4>{t(locale, 'footerProduct')}</h4>
              
              <a href="#download">{t(locale, 'footerDownload')}</a>
              <a href="mailto:hello@stella.app">{t(locale, 'footerContact')}</a>
            </div>

            <div className="footer-col">
              <h4>{t(locale, 'footerDevelopers')}</h4>
              
              <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
              
              <span>{t(locale, 'footerApiSoon')}</span>
            </div>

            <div className="footer-col">
              <h4>{t(locale, 'footerLegal')}</h4>
              
              <a href="/privacy">{t(locale, 'footerPrivacy')}</a>
              
              <a href="/terms">{t(locale, 'footerTerms')}</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
