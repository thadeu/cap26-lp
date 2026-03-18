import { useEffect, useRef, useState } from 'react'
import { Config } from 'vike-react/Config'
import { usePageContext } from 'vike-react/usePageContext'
import { t } from '@/i18n'
import { ConfettiParticles } from '@/components/Confetti'
import { Link } from '@/components/Link'

type UserAgentData = {
  getHighEntropyValues: (values: string[]) => Promise<{ platform?: string }>
}

type NavigatorWithUserAgentData = Navigator & {
  userAgentData?: UserAgentData
}

const COOKIE_CONSENT_COOKIE = 'cap26_cookie_consent'
const LOCALE_PREFERENCE_KEY = 'cap26_locale_preference'
const GEO_PROMPT_DISMISSED_KEY = 'cap26_geo_prompt_dismissed'

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null

  const entry = document.cookie.split('; ').find((item) => item.startsWith(`${name}=`))

  return entry ? decodeURIComponent(entry.split('=').slice(1).join('=')) : null
}

function setCookie(name: string, value: string) {
  if (typeof document === 'undefined') return

  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=31536000; SameSite=Lax`
}

function isLikelyBrazil(latitude: number, longitude: number): boolean {
  return latitude <= 5.3 && latitude >= -33.9 && longitude >= -73.99 && longitude <= -34.79
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Cap26',
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

export default function Page() {
  const pageContext = usePageContext()
  const locale = 'locale' in pageContext && typeof pageContext.locale === 'string' ? pageContext.locale : 'en'
  const year = new Date().getFullYear()
  const localeUi =
    locale === 'pt-BR'
      ? {
          cookieTitle: 'Cookies no Cap26',
          cookieBody:
            'Usamos cookies e armazenamento local para lembrar preferências essenciais do site e melhorar a experiência. Você pode aceitar ou rejeitar cookies não essenciais.',
          cookieAccept: 'Aceitar',
          cookieReject: 'Rejeitar',
          cookieManage: 'Configurar cookies',
          locationTitle: 'Quer ver a versão certa automaticamente?',
          locationBody:
            'Podemos pedir sua localização para decidir entre pt-BR e a versão default quando você cair na home principal.',
          locationAllow: 'Usar minha localização',
          locationDefault: 'Continuar no default',
          locationLater: 'Agora não',
          locationLoading: 'Verificando localização...',
          locationError:
            'Não conseguimos acessar sua localização. Você pode continuar no default ou permitir a localização no navegador.',
          privacyLink: 'Política de Privacidade',
        }
      : {
          cookieTitle: 'Cookies on Cap26',
          cookieBody:
            'We use cookies and local storage to remember essential site preferences and improve the experience. You can accept or reject non-essential cookies.',
          cookieAccept: 'Accept',
          cookieReject: 'Reject',
          cookieManage: 'Cookie settings',
          locationTitle: 'Want the right locale automatically?',
          locationBody:
            'We can ask for your location to decide between pt-BR and the default version when you land on the main home page.',
          locationAllow: 'Use my location',
          locationDefault: 'Continue on default',
          locationLater: 'Not now',
          locationLoading: 'Checking location...',
          locationError:
            'We could not access your location. You can continue on the default version or allow location in your browser.',
          privacyLink: 'Privacy Policy',
        }

  const [isMac, setIsMac] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showCookieBanner, setShowCookieBanner] = useState(true)
  const [showLocationPrompt, setShowLocationPrompt] = useState(false)
  const [isLocatingUser, setIsLocatingUser] = useState(false)
  const [locationError, setLocationError] = useState<string | null>(null)

  useEffect(() => {
    const uad = (navigator as NavigatorWithUserAgentData).userAgentData
    if (uad) {
      uad.getHighEntropyValues(['platform']).then((v) => setIsMac(v.platform === 'macOS'))
    } else {
      setIsMac(navigator.userAgent.includes('Macintosh'))
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const consent = getCookie(COOKIE_CONSENT_COOKIE)

    if (consent === 'accepted' || consent === 'rejected') {
      setShowCookieBanner(false)
    }

    const pathname = window.location.pathname.replace(/\/+$/, '') || '/'
    const savedLocale = window.localStorage.getItem(LOCALE_PREFERENCE_KEY)
    const dismissedPrompt = window.localStorage.getItem(GEO_PROMPT_DISMISSED_KEY) === '1'

    if (pathname === '/' && savedLocale === 'pt-BR') {
      window.location.replace('/pt-br')
      return
    }

    if (pathname === '/' && !savedLocale && !dismissedPrompt) {
      setShowLocationPrompt(true)
    }

    if (pathname.startsWith('/pt-br')) {
      window.localStorage.setItem(LOCALE_PREFERENCE_KEY, 'pt-BR')
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const heroRef = useRef<HTMLElement | null>(null)
  const headerNavRef = useRef<HTMLElement | null>(null)
  const cinemaRef = useRef<HTMLElement | null>(null)
  const cinemaFrameRef = useRef<HTMLDivElement | null>(null)
  const cinemaBgRef = useRef<HTMLImageElement | null>(null)
  const cinemaImgRef = useRef<HTMLImageElement | null>(null)
  const cinemaVideoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const confetti = heroRef.current?.querySelector<HTMLElement>('.hero-confetti')
    const header = document.querySelector<HTMLElement>('.header')

    if (!confetti || !header) return

    const onScroll = () => {
      const scrolled = window.scrollY > window.outerHeight

      confetti.style.animationPlayState = scrolled ? 'paused' : 'running'
      header.classList.toggle('header-blur', scrolled)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const cinema = cinemaRef.current
    const cinemaImg = cinemaImgRef.current
    const frame = cinemaFrameRef.current
    const bg = cinemaBgRef.current
    const header = headerNavRef.current

    const video = cinemaVideoRef.current
    if (!cinema || !frame || !bg || !cinemaImg || !video || !header) return

    // IntersectionObserver for video play/pause
    const videoObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.3 },
    )

    videoObserver.observe(video)

    const onScroll = () => {
      const rect = cinema.getBoundingClientRect()
      const scrollHeight = cinema.offsetHeight - window.innerHeight
      const rawProgress = -rect.top / scrollHeight
      const progress = Math.max(0, Math.min(1, rawProgress))

      // App screenshot scales (0.7 → 1.1) then fades out
      const appScale = 0.7 + progress * 0.4

      // Screenshot fades out, video fades in at same position/scale
      cinemaImg.style.transform = `translate(-50%, -50%) scale(${appScale})`
      cinemaImg.style.opacity = `${1 - progress}`

      video.style.transform = `translate(-50%, -50%) scale(${appScale})`
      video.style.opacity = `${progress}`

      bg.style.opacity = `${progress}`

      header.style.opacity = `${1 - progress}`

      if (progress >= 0.03 && progress <= 0.97) {
        header.style.display = 'none'
      } else if (progress <= 0.029 || progress >= 1) {
        header.style.opacity = '1'
        header.style.display = 'flex'
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
      videoObserver.disconnect()
    }
  }, [])

  const handleCookieChoice = (value: 'accepted' | 'rejected') => {
    setShowCookieBanner(false)
    setCookie(COOKIE_CONSENT_COOKIE, value)
  }

  const closeLocationPrompt = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(GEO_PROMPT_DISMISSED_KEY, '1')
    }

    setShowLocationPrompt(false)
    setLocationError(null)
    setIsLocatingUser(false)
  }

  const keepDefaultLocale = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(LOCALE_PREFERENCE_KEY, 'en')
      window.localStorage.setItem(GEO_PROMPT_DISMISSED_KEY, '1')
    }

    setShowLocationPrompt(false)
    setLocationError(null)
  }

  const handleLocationPrompt = () => {
    if (typeof window === 'undefined') return

    if (!navigator.geolocation) {
      setLocationError(localeUi.locationError)
      return
    }

    setIsLocatingUser(true)
    setLocationError(null)

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const detectedLocale = isLikelyBrazil(coords.latitude, coords.longitude) ? 'pt-BR' : 'en'

        window.localStorage.setItem(LOCALE_PREFERENCE_KEY, detectedLocale)
        window.localStorage.setItem(GEO_PROMPT_DISMISSED_KEY, '1')

        if (detectedLocale === 'pt-BR') {
          window.location.replace('/pt-br')
          return
        }

        setIsLocatingUser(false)
        setShowLocationPrompt(false)
      },
      () => {
        setIsLocatingUser(false)
        setLocationError(localeUi.locationError)
      },
      {
        enableHighAccuracy: false,
        timeout: 10000,
        maximumAge: 86400000,
      },
    )
  }

  return (
    <>
      <Config
        title={t(locale, 'seoTitle')}
        description={t(locale, 'seoDescription')}
        image="/og-cap26.svg"
        Head={
          <>
            <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
            <meta name="robots" content="index,follow" />
            <meta name="theme-color" content="#0d0d12" />
            <meta name="theme-color" content="#0d0d12" media="(prefers-color-scheme: dark)" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            <meta name="apple-mobile-web-app-title" content="Cap26" />
            <meta name="format-detection" content="telephone=no" />

            <meta property="og:type" content="website" />
            <meta property="og:locale" content={locale === 'en' ? 'en_US' : 'pt_BR'} />
            <meta property="og:site_name" content="Cap26" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Cap26 for macOS" />
            <meta name="twitter:description" content={t(locale, 'twitterDescription')} />

            <link rel="alternate" hrefLang="en" href="https://cap26.app/" />
            <link rel="alternate" hrefLang="pt-BR" href="https://cap26.app/pt-br" />
            <link rel="alternate" hrefLang="x-default" href="https://cap26.app/" />

            <script type="application/ld+json">{JSON.stringify(schema)}</script>
          </>
        }
      />

      <div className="site">
        <header className="header" ref={headerNavRef}>
          <div className="wrap header-inner">
            <a className="logo" href={locale === 'pt-BR' ? '/pt-br' : '/'} aria-label="Cap26 home">
              <div className="min-h-auto relative top-2">
                <img src="/brand/cap26-lockup-horizontal.svg" width="180px" className="logo-header" />
              </div>
            </a>

            <nav className="nav" aria-label="Primary">
              <a
                className="nav-icon-link cursor-pointer"
                href="https://github.com/thadeu/cap26"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="pl-2">Github</span>
              </a>

              <a href="mailto:support@cap26.app">Contact</a>
            </nav>

            <button
              type="button"
              className={`mobile-menu-toggle ${isMobileMenuOpen ? 'is-open' : ''}`}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
            >
              <span className="mobile-menu-toggle-bar" aria-hidden="true" />
              <span className="mobile-menu-toggle-bar" aria-hidden="true" />
              <span className="mobile-menu-toggle-bar" aria-hidden="true" />
            </button>
          </div>

          <div
            className={`mobile-menu-backdrop ${isMobileMenuOpen ? 'is-open' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden={!isMobileMenuOpen}
          />

          <nav
            id="mobile-menu"
            className={`mobile-menu-panel ${isMobileMenuOpen ? 'is-open' : ''}`}
            aria-label="Mobile"
            aria-hidden={!isMobileMenuOpen}
          >
            <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="mobile-menu-link-copy">
                <span className="mobile-menu-link-title">Pricing</span>
                <span className="mobile-menu-link-subtitle">more cheap than others</span>
              </span>
            </a>
            <a href="#faq" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="mobile-menu-link-copy">
                <span className="mobile-menu-link-title">FAQ</span>
                <span className="mobile-menu-link-subtitle">you question and we answer</span>
              </span>
            </a>
            <a
              href="https://github.com/thadeu/cap26"
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="mobile-menu-link-copy">
                <span className="mobile-menu-link-title">GitHub</span>
                <span className="mobile-menu-link-subtitle">our opensource repository</span>
              </span>
            </a>
            <a href="mailto:support@cap26.app" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="mobile-menu-link-copy">
                <span className="mobile-menu-link-title">Contact</span>
                <span className="mobile-menu-link-subtitle">send us a message to talk more</span>
              </span>
            </a>

            <div className="mobile-menu-ad" aria-label="Annual plan promotion">
              <span className="mobile-menu-ad-kicker">Annual deal</span>
              <strong className="mobile-menu-ad-title">Save more with the yearly plan</strong>
              <p className="mobile-menu-ad-copy">
                Pay once, spend less over the year, and get Cap26 ready whenever you need to record.
              </p>
              <a className="mobile-menu-ad-cta" href="#pricing" onClick={() => setIsMobileMenuOpen(false)}>
                See yearly pricing
              </a>
            </div>
          </nav>
        </header>

        <main className="hero" ref={heroRef}>
          <div className="hero-bg" aria-hidden="true" />

          <div className="hero-confetti" aria-hidden="true">
            <ConfettiParticles />
            <ConfettiParticles />
          </div>

          <div className="wrap hero-content">
            <h1>{t(locale, 'heroTitle1')}</h1>

            <h1>{t(locale, 'heroTitle2')}</h1>

            <p className="hero-sub">{t(locale, 'heroSub')}</p>

            <div className="hero-actions">
              {isMac && (
                <a className="btn primary cursor-pointer" href="#download">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  {t(locale, 'btnDownload')}
                </a>
              )}

              <a
                className="btn secondary cursor-pointer"
                href="https://github.com/thadeu/cap26"
                target="_blank"
                rel="noreferrer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                {t(locale, 'btnGithub')}
              </a>
            </div>

            <span className="hero-meta">{t(locale, 'heroMeta')}</span>

            <img
              className="hero-mobile-image"
              src="/screenshot-1.png"
              alt={t(locale, 'imgAlt')}
              width="1280"
              height="800"
              loading="lazy"
            />
          </div>
        </main>

        {/* ── Scroll Cinema — app grows into macOS desktop ── */}
        <section className="scroll-cinema" ref={cinemaRef}>
          <div className="scroll-cinema-sticky">
            <div className="scroll-cinema-frame" ref={cinemaFrameRef}>
              <img className="scroll-cinema-bg" ref={cinemaBgRef} src="/macos-2.jpeg" aria-hidden="true" alt="" />

              <img
                ref={cinemaImgRef}
                className="scroll-cinema-app"
                src="/screenshot-1.png"
                alt={t(locale, 'imgAlt')}
                width="1280"
                height="800"
              />

              <video
                className="scroll-cinema-app scroll-cinema-video"
                ref={cinemaVideoRef}
                src="/video-2.webm"
                poster="/screenshot-1.png"
                muted
                playsInline
                loop
                preload="none"
              />
            </div>
          </div>
        </section>

        {/* ── Feature Sections ── */}
        <section className="feature-section">
          <div className="wrap feature-content">
            <span className="section-label">{t(locale, 'sectionRecordingLabel')}</span>
            <h2>{t(locale, 'sectionRecordingTitle')}</h2>
            <p className="section-sub">{t(locale, 'sectionRecordingSub')}</p>
          </div>

          <div className="wrap feature-image-wrap">
            <div className="feature-glow" aria-hidden="true" />

            <video
              className="feature-video"
              src="/video-1.mp4"
              poster="/screenshot-1.png"
              muted
              playsInline
              loop
              preload="none"
              ref={(el: HTMLVideoElement | null) => {
                if (!el) return

                const observer = new IntersectionObserver(
                  ([entry]) => {
                    if (entry.isIntersecting) {
                      el.play().catch(() => {})
                    } else {
                      el.pause()
                    }
                  },
                  { threshold: 0.3 },
                )

                observer.observe(el)
              }}
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
              src="/editor-export-1.png"
              alt={t(locale, 'sectionExportTitle')}
              width="1280"
              height="800"
              loading="lazy"
            />
          </div>
        </section>

        {/* ── Showcase scroll ── */}
        <section className="showcase-section" id="showcase">
          <div className="wrap">
            <div className="showcase-header">
              <h2>{t(locale, 'showcaseTitle')}</h2>
              <p className="section-sub">{t(locale, 'showcaseSub')}</p>
            </div>
          </div>

          <div className="showcase-scroll">
            {[1, 4, 3, 6].map((i) => (
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
        <section className="pricing-section" id="pricing">
          <div className="wrap">
            <div className="feature-content text-2xl">
              <h2>{t(locale, 'pricingTitle')}</h2>
              <p className="section-sub">{t(locale, 'pricingSub')}</p>
            </div>

            <div className="pricing-grid">
              {/* Monthly */}
              <div className="pricing-card">
                <span className="pricing-badge">{t(locale, 'pricingMonthlyLabel')}</span>

                <p className="pricing-desc">{t(locale, 'pricingDesc')}</p>

                <div className="pricing-price">
                  <span className="pricing-currency">$</span>
                  <span className="pricing-amount">{t(locale, 'pricingMonthlyPrice')}</span>
                  <span className="pricing-period">{t(locale, 'pricingMonthlyPeriod')}</span>
                </div>

                <p className="pricing-note">{t(locale, 'pricingMonthlyNote')}</p>

                <a className="pricing-btn" href="#download">
                  {t(locale, 'pricingCta')}
                </a>

                <ul className="pricing-features">
                  <li>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--accent)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {t(locale, 'pricingFeature1')}
                  </li>
                  <li>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--accent)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {t(locale, 'pricingFeature2')}
                  </li>
                  <li>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--accent)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {t(locale, 'pricingFeature3')}
                  </li>
                </ul>
              </div>

              {/* Yearly — highlighted */}
              <div className="pricing-card pricing-card--featured">
                <span className="pricing-badge">{t(locale, 'pricingYearlyLabel')}</span>

                <p className="pricing-desc">{t(locale, 'pricingDesc')} but more cheapest.</p>

                <div className="pricing-price">
                  <span className="pricing-currency">$</span>
                  <span className="pricing-amount">{t(locale, 'pricingYearlyPrice')}</span>
                  <span className="pricing-period">{t(locale, 'pricingYearlyPeriod')}</span>
                </div>

                <p className="pricing-note">{t(locale, 'pricingYearlyNote')}</p>
                <a className="pricing-btn pricing-btn--accent" href="#download">
                  {t(locale, 'pricingCta')}
                </a>

                <ul className="pricing-features">
                  <li>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--accent)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {t(locale, 'pricingFeature1')}
                  </li>
                  <li>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--accent)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {t(locale, 'pricingFeature2')}
                  </li>
                  <li>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--accent)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {t(locale, 'pricingFeature3')}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="faq-section" id="faq">
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
                    <svg
                      className="faq-chevron"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
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
              {isMac && (
                <a className="btn primary cursor-pointer" href="#download">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  {t(locale, 'btnDownload')}
                </a>
              )}
              <a
                className="btn secondary cursor-pointer"
                href="https://github.com/thadeu/cap26"
                target="_blank"
                rel="noreferrer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                {t(locale, 'btnGithub')}
              </a>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="wrap footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="logo-text">
                  <img src="/brand/cap26-lockup-horizontal-white.svg" width="200px" />
                </span>
              </div>

              <p>{t(locale, 'footerDesc')}</p>

              <small>{t(locale, 'footerCopyright').replace('{year}', String(year))}</small>
            </div>

            <div className="footer-col">
              <h4>{t(locale, 'footerProduct')}</h4>

              <a href="#download">{t(locale, 'footerDownload')}</a>
              <a href="mailto:support@cap26.app">{t(locale, 'footerContact')}</a>
            </div>

            <div className="footer-col">
              <h4>{t(locale, 'footerDevelopers')}</h4>

              <a href="https://github.com/thadeu/cap26" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>

            <div className="footer-col">
              <h4>{t(locale, 'footerLegal')}</h4>

              <Link href="/privacy">{t(locale, 'footerPrivacy')}</Link>

              <Link href="/terms">{t(locale, 'footerTerms')}</Link>
            </div>
          </div>
        </footer>

        {showLocationPrompt && (
          <div className={`location-prompt ${showCookieBanner ? 'has-cookie-banner' : ''}`} aria-live="polite">
            <p className="location-prompt-kicker">Locale</p>
            <h3>{localeUi.locationTitle}</h3>
            <p>{localeUi.locationBody}</p>

            {locationError && <p className="location-prompt-error">{locationError}</p>}

            <div className="location-prompt-actions">
              <button type="button" className="location-prompt-primary" onClick={handleLocationPrompt}>
                {isLocatingUser ? localeUi.locationLoading : localeUi.locationAllow}
              </button>

              <button type="button" className="location-prompt-secondary" onClick={keepDefaultLocale}>
                {localeUi.locationDefault}
              </button>

              <button type="button" className="location-prompt-link" onClick={closeLocationPrompt}>
                {localeUi.locationLater}
              </button>
            </div>
          </div>
        )}

        {showCookieBanner && (
          <div className="cookie-banner" aria-live="polite">
            <div className="cookie-banner-copy">
              <p className="cookie-banner-kicker">Cookies</p>
              <h3>{localeUi.cookieTitle}</h3>
              <p>
                {localeUi.cookieBody} <Link href="/privacy">{localeUi.privacyLink}</Link>
              </p>
            </div>

            <div className="cookie-banner-actions">
              <button type="button" className="cookie-banner-secondary" onClick={() => handleCookieChoice('rejected')}>
                {localeUi.cookieReject}
              </button>

              <button type="button" className="cookie-banner-primary" onClick={() => handleCookieChoice('accepted')}>
                {localeUi.cookieAccept}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
