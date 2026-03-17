import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { usePageContext } from 'vike-react/usePageContext'
import { localeDefault } from '@/i18n/locales'

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  locale?: string
  children: ReactNode
}

export function Link({ href, locale, children, ...props }: LinkProps) {
  const pageContext = usePageContext() as { locale?: string }
  const currentLocale = locale ?? pageContext.locale
  const prefixedHref = currentLocale !== localeDefault ? '/' + currentLocale.toLowerCase() + href : href
  return (
    <a href={prefixedHref} {...props}>
      {children}
    </a>
  )
}
