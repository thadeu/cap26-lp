import { localeDefault, locales, type Locale } from './locales'

const localePrefix = locales.filter((l) => l !== localeDefault).map((l) => l.toLowerCase())

const localeMap = Object.fromEntries(locales.map((l) => [l.toLowerCase(), l])) as Record<string, Locale>

type LocaleResult = {
  locale: Locale
  urlPathnameWithoutLocale: string
}

export function extractLocale(urlPathname: string): LocaleResult {
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
