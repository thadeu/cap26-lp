export { onBeforeRoute }

import { extractLocale } from '../i18n/index.js'
import { modifyUrl } from 'vike/modifyUrl'

function onBeforeRoute(pageContext) {
  const { pathname } = pageContext.urlParsed
  const { locale, urlPathnameWithoutLocale } = extractLocale(pathname)
  const urlLogical = modifyUrl(pageContext.urlParsed.href, {
    pathname: urlPathnameWithoutLocale,
  })

  return {
    pageContext: {
      locale,
      urlLogical,
    },
  }
}
