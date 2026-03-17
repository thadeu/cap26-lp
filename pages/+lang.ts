type PageContextWithLocale = {
  locale: string
}

export default (pageContext: PageContextWithLocale) => pageContext.locale
