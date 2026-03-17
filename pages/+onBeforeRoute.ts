export { onBeforeRoute }

import { extractLocale } from '@/i18n'
import { modifyUrl } from 'vike/modifyUrl'

type OnBeforeRoutePageContext = {
  urlParsed: {
    href: string
    pathname: string
  }
}

function onBeforeRoute(pageContext: OnBeforeRoutePageContext) {
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
