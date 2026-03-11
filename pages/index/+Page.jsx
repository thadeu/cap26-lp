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

export default function Page() {
  const { locale } = usePageContext()
  const year = new Date().getFullYear()

  return (
    <>
      <Config
        title={t(locale, 'seoTitle')}
        description={t(locale, 'seoDescription')}
        image="/og-stella.svg"
        Head={() => (
          <>
            <meta name="robots" content="index,follow" />
            <meta name="theme-color" content="#050710" />
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
        {/* ── Top Nav ── */}
        <header className="header">
          <div className="wrap header-inner">
            <a className="logo" href={locale === 'pt-BR' ? '/pt-br' : '/'} aria-label="Stella home">
              {/* <span className="logo-icon" aria-hidden="true">S</span> */}
              <span className="logo-text">Stella</span>
            </a>

            <nav className="nav" aria-label="Primary">
              <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
              <a href="mailto:hello@stella.app">Contact</a>
            </nav>

            <a className="btn-download" href="#download">
              {t(locale, 'navDownload')}
            </a>
          </div>
        </header>

        {/* ── Hero — full viewport ── */}
        <main className="hero">
          <div className="hero-bg" aria-hidden="true" />

          <div className="wrap hero-content">
            <a className="badge" href="#download">
              <span className="badge-dot" aria-hidden="true" />
              {t(locale, 'badgeText')}
            </a>

            <h1>
              {t(locale, 'heroTitle1')}<br />
              {t(locale, 'heroTitle2')}
            </h1>

            <p className="hero-sub">
              {t(locale, 'heroSub')}
            </p>

            <div className="hero-actions">
              <a className="btn primary" href="#download">
                {t(locale, 'btnDownload')}
              </a>
              <a
                className="btn secondary"
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
              >
                {t(locale, 'btnGithub')}
              </a>
            </div>

            <span className="hero-meta">{t(locale, 'heroMeta')}</span>
          </div>

          {/* App screenshot — replace src with your real image */}
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

        {/* ── Footer ── */}
        <footer className="footer">
          <div className="wrap footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="logo-icon" aria-hidden="true">S</span>
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
