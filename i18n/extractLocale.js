import { locales, localeDefault } from './locales.js'

const localePrefix = locales
  .filter((l) => l !== localeDefault)
  .map((l) => l.toLowerCase())

const localeMap = Object.fromEntries(
  locales.map((l) => [l.toLowerCase(), l]),
)

export function extractLocale(urlPathname) {
  const segments = urlPathname.split('/')
  const first = segments[1]?.toLowerCase()

  if (first && localePrefix.includes(first)) {
    const rest = '/' + segments.slice(2).join('/')
    return {
      locale: localeMap[first],
      urlPathnameWithoutLocale: rest || '/',
    }
  }

  return {
    locale: localeDefault,
    urlPathnameWithoutLocale: urlPathname,
  }
}
