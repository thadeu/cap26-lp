const translations = {
  'pt-BR': {
    // Nav
    navDownload: 'Download para macOS',

    // Hero
    badgeText: 'Alpha v0.1.0',
    heroTitle1: 'One Studio.',
    heroTitle2: 'All Your Recordings.',
    heroSub:
      'Unifique gravação e edição em uma experiência só. Feito para criadores, times de produto e pessoas dolorosamente desorganizadas com vídeos.',
    btnDownload: 'Download para macOS',
    btnGithub: 'Star on GitHub',
    heroMeta: 'Alpha v0.1.0 · macOS 12+',

    // Footer
    footerDesc: 'Screen recording studio para macOS.',
    footerCopyright: '© {year} Stella. Todos os direitos reservados.',
    footerProduct: 'Produto',
    footerDownload: 'Download',
    footerContact: 'Contato',
    footerDevelopers: 'Developers',
    footerApiSoon: 'API em breve',
    footerLegal: 'Legal',
    footerPrivacy: 'Privacidade',
    footerTerms: 'Termos',

    // SEO
    seoTitle: 'Stella for macOS | Screen Recording com editor completo',
    seoDescription:
      'Stella, o screen recording studio para macOS: editor completo, cortes, efeitos, microfone, webcam, video, legendas e background em um fluxo unificado.',
    twitterDescription: 'One studio. All your recordings. Feito para macOS.',
    imgAlt: 'Stella app — interface do screen recording studio',
  },
  en: {
    // Nav
    navDownload: 'Download for macOS',

    // Hero
    badgeText: 'Alpha v0.1.0',
    heroTitle1: 'One Studio.',
    heroTitle2: 'All Your Recordings.',
    heroSub:
      'Unify recording and editing in a single experience. Built for creators, product teams, and people painfully disorganized with videos.',
    btnDownload: 'Download for macOS',
    btnGithub: 'Star on GitHub',
    heroMeta: 'Alpha v0.1.0 · macOS 12+',

    // Footer
    footerDesc: 'Screen recording studio for macOS.',
    footerCopyright: '© {year} Stella. All rights reserved.',
    footerProduct: 'Product',
    footerDownload: 'Download',
    footerContact: 'Contact',
    footerDevelopers: 'Developers',
    footerApiSoon: 'API coming soon',
    footerLegal: 'Legal',
    footerPrivacy: 'Privacy',
    footerTerms: 'Terms',

    // SEO
    seoTitle: 'Stella for macOS | Screen Recording with full editor',
    seoDescription:
      'Stella, the screen recording studio for macOS: full editor, cuts, effects, mic, webcam, video, captions and backgrounds in a unified workflow.',
    twitterDescription: 'One studio. All your recordings. Built for macOS.',
    imgAlt: 'Stella app — screen recording studio interface',
  },
}

export function t(locale, key) {
  return translations[locale]?.[key] ?? translations['en'][key] ?? key
}
