import { usePageContext } from 'vike-react/usePageContext'
import { localeDefault } from '../i18n/locales.js'

export function Link({ href, locale, children, ...props }) {
  const pageContext = usePageContext()
  const currentLocale = locale ?? pageContext.locale
  const prefixedHref =
    currentLocale !== localeDefault ? '/' + currentLocale.toLowerCase() + href : href
  return (
    <a href={prefixedHref} {...props}>
      {children}
    </a>
  )
}
