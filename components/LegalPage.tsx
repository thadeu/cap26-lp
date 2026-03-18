import { Config } from 'vike-react/Config'

import { Link } from '@/components/Link'
import { PwaHead } from '@/components/PwaHead'
import type { Locale } from '@/i18n'

type LegalSection = {
  title: string
  paragraphs: string[]
  items?: string[]
}

type LegalCopy = {
  metaTitle: string
  metaDescription: string
  eyebrow: string
  title: string
  intro: string
  updatedLabel: string
  updatedValue: string
  homeLabel: string
  privacyLabel: string
  termsLabel: string
  contactLabel: string
  contactText: string
  sections: LegalSection[]
}

type LegalPageProps = {
  locale: Locale
  currentPage: 'privacy' | 'terms'
  copy: LegalCopy
}

export function LegalPage({ locale, currentPage, copy }: LegalPageProps) {
  return (
    <>
      <Config title={copy.metaTitle} description={copy.metaDescription} image="/og-cap26.svg" Head={<PwaHead />} />

      <main className="legal-page">
        <div className="wrap legal-shell">
          <header className="legal-topbar">
            <Link href="/" className="legal-home-link" locale={locale}>
              <img src="/b/cap26-lockup-horizontal-white.svg" alt="Cap26" width="170" />
              <span>{copy.homeLabel}</span>
            </Link>

            <nav className="legal-switcher" aria-label="Legal navigation">
              <Link
                href="/privacy"
                locale={locale}
                className={`legal-switcher-link ${currentPage === 'privacy' ? 'is-active' : ''}`}
                aria-current={currentPage === 'privacy' ? 'page' : undefined}
              >
                {copy.privacyLabel}
              </Link>

              <Link
                href="/terms"
                locale={locale}
                className={`legal-switcher-link ${currentPage === 'terms' ? 'is-active' : ''}`}
                aria-current={currentPage === 'terms' ? 'page' : undefined}
              >
                {copy.termsLabel}
              </Link>
            </nav>
          </header>

          <section className="legal-hero">
            <p className="legal-eyebrow">{copy.eyebrow}</p>
            <h1>{copy.title}</h1>
            <p className="legal-intro">{copy.intro}</p>

            <div className="legal-meta">
              <span className="legal-meta-label">{copy.updatedLabel}</span>
              <strong>{copy.updatedValue}</strong>
            </div>
          </section>

          <article className="legal-article" aria-label={copy.title}>
            {copy.sections.map((section) => (
              <section className="legal-card" key={section.title}>
                <h2>{section.title}</h2>

                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                {section.items && (
                  <ul className="legal-list">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </article>

          <footer className="legal-footer">
            <p>{copy.contactLabel}</p>
            <a href="mailto:support@cap26.app">{copy.contactText}</a>
          </footer>
        </div>
      </main>
    </>
  )
}

export type { LegalCopy }
