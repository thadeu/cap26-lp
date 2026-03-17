import { localeDefault, type Locale } from './locales'

const translations = {
  'pt-BR': {
    // Nav
    navDownload: 'Download para macOS',

    // Hero
    badgeText: 'Alpha v0.1.0',
    heroTitle1: 'Um Studio.',
    heroTitle2: 'Grave e edite num só lugar.',
    heroSub:
      'Unifique gravação e edição em uma experiência só. Feito para criadores, times de produto e pessoas dolorosamente desorganizadas com vídeos.',
    btnDownload: 'Download para macOS',
    btnGithub: 'Star on GitHub',
    heroMeta: 'Alpha v0.1.0 · macOS 12+',

    // Section: Recording
    sectionRecordingLabel: 'Gravação',
    sectionRecordingTitle: 'Gravação de tela reimaginada',
    sectionRecordingSub:
      'Capture tela, microfone, webcam e áudio do sistema em uma única sessão. Sem configuração, sem complicação.',

    // Section: Editor
    sectionEditorLabel: 'Editor',
    sectionEditorTitle: 'Edição completa. Integrada.',
    sectionEditorSub:
      'Corte, reorganize e refine suas gravações sem sair do app. Linha do tempo intuitiva, efeitos instantâneos.',

    // Section: Effects
    sectionEffectsLabel: 'Efeitos',
    sectionEffectsTitle: 'Legendas, backgrounds e mais',
    sectionEffectsSub: 'Adicione legendas automáticas, troque o background, ajuste zoom e cursor — tudo em segundos.',

    // Section: Export
    sectionExportLabel: 'Exportar',
    sectionExportTitle: 'Exporte e compartilhe. Rápido.',
    sectionExportSub: 'Exporte em alta qualidade para qualquer plataforma. GIF, MP4, 4K — otimizado automaticamente.',

    // Showcase
    showcaseTitle: 'Tem mais',
    showcaseSub: 'Cap26 é repleto de recursos úteis, mantendo tudo fácil de usar.',
    showcaseItem1Title: 'Zoom automático',
    showcaseItem1Desc: 'Foco automático na ação principal. Perfeito para tutoriais e demos.',
    showcaseItem2Title: 'Cursor suave',
    showcaseItem2Desc: 'Movimentos bruscos do cursor são transformados em animações suaves e profissionais.',
    showcaseItem3Title: 'Legendas automáticas',
    showcaseItem3Desc: 'Gere legendas diretamente no app. Tudo processado localmente no seu Mac.',
    showcaseItem4Title: 'Background customizável',
    showcaseItem4Desc: 'Troque cor, gradiente ou imagem de fundo com um clique.',
    showcaseItem6Title: 'Webcam integrada',
    showcaseItem6Desc: 'Seu rosto aparece sobre a gravação com zoom inteligente para não cobrir o cursor.',

    // Pricing
    pricingSub: 'Eleve seus tutoriais, demos de produto e colaboração.',
    pricingMonthlyLabel: 'Mensal',
    pricingYearlyLabel: 'Anual',
    pricingName: 'Cap26',
    pricingDesc: 'Todos os recursos inclusos.',
    pricingMonthlyPrice: '9.26',
    pricingMonthlyPeriod: '/ mês',
    pricingMonthlyNote: 'Cobrado mensalmente. Mude para anual quando quiser.',
    pricingYearlyPrice: '7.26',
    pricingYearlyPeriod: '/ mês',
    pricingYearlyNote: 'Cobrado anualmente.',
    pricingCta: 'Começar',
    pricingFeature1: 'Todos os recursos',
    pricingFeature2: 'Links compartilháveis',
    pricingFeature3: '3 dispositivos macOS pessoais',

    // FAQ
    faqTitle: 'Perguntas & Respostas',
    faqSub: 'Se tiver outras dúvidas, entre em contato.',
    faqQ1: 'Como Cap26 é diferente de outros screen recorders?',
    faqA1:
      'Cap26 grava sua tela e aplica efeitos automaticamente — zoom, cursor suave, legendas e backgrounds. Tudo em um único fluxo, sem precisar de outro editor.',
    faqQ2: 'Cap26 é gratuito?',
    faqA2:
      'Cap26 tem um plano gratuito com recursos essenciais. Para recursos avançados como exportação em 4K, legendas automáticas e links compartilháveis, confira nossos planos.',
    faqQ3: 'Qual versão do macOS é necessária?',
    faqA3: 'Cap26 requer macOS 12 (Monterey) ou superior. Recomendamos macOS 13+ para melhor desempenho.',
    faqQ4: 'Posso usar Cap26 para criar conteúdo profissional?',
    faqA4:
      'Sim! Cap26 foi projetado para demos de produto, tutoriais, cursos e conteúdo para redes sociais. Animações automáticas de zoom e cursor dão um acabamento profissional a qualquer gravação.',
    faqQ5: 'Meus dados são seguros?',
    faqA5:
      'Absolutamente. Todo o processamento acontece localmente no seu Mac. Nenhum vídeo é enviado para nossos servidores — sua privacidade é nossa prioridade.',

    // CTA
    ctaTitle: 'Pronto para gravar?',
    ctaSub: 'Baixe gratuitamente e comece a criar vídeos incríveis.',

    // Footer
    footerDesc: 'Screen recording studio para macOS.',
    footerCopyright: '© {year} cap26. Todos os direitos reservados.',
    footerProduct: 'Produto',
    footerDownload: 'Download',
    footerContact: 'Contato',
    footerDevelopers: 'Developers',
    footerApiSoon: 'API em breve',
    footerLegal: 'Legal',
    footerPrivacy: 'Privacidade',
    footerTerms: 'Termos',

    // SEO
    seoTitle: 'Cap26 for macOS | Screen Recording com editor completo',
    seoDescription:
      'Cap26, o screen recording studio para macOS: editor completo, cortes, efeitos, microfone, webcam, video, legendas e background em um fluxo unificado.',
    twitterDescription: 'One studio. All your recordings. Feito para macOS.',
    imgAlt: 'Cap26 app — interface do screen recording studio',

    pricingTitle: 'Preços',
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
    heroMeta: 'Alpha v0.1.0 · macOS 13+',

    // Section: Recording
    sectionRecordingLabel: 'Recording',
    sectionRecordingTitle: 'Screen recording reimagined',
    sectionRecordingSub:
      'Capture screen, microphone, webcam and system audio in a single session. No setup, no hassle.',

    // Section: Editor
    sectionEditorLabel: 'Editor',
    sectionEditorTitle: 'Full editor. Built in.',
    sectionEditorSub:
      'Cut, rearrange and refine your recordings without leaving the app. Intuitive timeline, instant effects.',

    // Section: Effects
    sectionEffectsLabel: 'Effects',
    sectionEffectsTitle: 'Captions, backgrounds and more',
    sectionEffectsSub: 'Add automatic captions, swap backgrounds, adjust zoom and cursor — all in seconds.',

    // Section: Export
    sectionExportLabel: 'Export',
    sectionExportTitle: 'Export & share. Fast.',
    sectionExportSub: 'Export in high quality for any platform. GIF, MP4, 4K — automatically optimized.',

    // Showcase
    showcaseTitle: 'Feature for Creators',
    showcaseSub: 'Cap26 is packed with useful features while keeping everything easy to use.',
    showcaseItem1Title: 'Automatic zoom',
    showcaseItem1Desc: 'Auto-focus on the main action. Perfect for tutorials and demos.',
    showcaseItem2Title: 'Smooth cursor',
    showcaseItem2Desc: 'Shaky cursor movements are transformed into smooth, professional animations.',
    showcaseItem3Title: 'Automatic captions',
    showcaseItem3Desc: 'Generate captions right in the app. Everything processed locally on your Mac.',
    showcaseItem4Title: 'Custom backgrounds',
    showcaseItem4Desc: 'Swap color, gradient, or background image with a single click.',
    showcaseItem6Title: 'Built-in webcam',
    showcaseItem6Desc: 'Your face overlays the recording with smart zoom to avoid covering the cursor.',

    // Pricing
    pricingTitle: 'Pricing',
    pricingSub: 'Level up your tutorials, product demos, and collaboration.',
    pricingMonthlyLabel: 'Monthly',
    pricingYearlyLabel: 'Yearly',
    pricingName: 'Cap26',
    pricingDesc: 'All features included',
    pricingMonthlyPrice: '9.26',
    pricingMonthlyPeriod: '/ month',
    pricingMonthlyNote: 'Per month billed monthly. Switch to yearly anytime.',
    pricingYearlyPrice: '7.26',
    pricingYearlyPeriod: '/ month',
    pricingYearlyNote: 'Per month billed yearly.',
    pricingCta: 'Get Started',
    pricingFeature1: 'All features',
    pricingFeature2: 'Shareable links',
    pricingFeature3: '3 personal macOS devices',

    // FAQ
    faqTitle: 'Questions & Answers',
    faqSub: 'If you have any other questions, please get in touch.',
    faqQ1: 'How is Cap26 different from other screen recording apps?',
    faqA1:
      'Cap26 records your screen and automatically applies effects — zoom, smooth cursor, captions and backgrounds. Everything in a single workflow, no separate editor needed.',
    faqQ2: 'Is Cap26 free?',
    faqA2:
      'Cap26 has a free plan with essential features. For advanced features like 4K export, automatic captions and shareable links, check out our plans.',
    faqQ3: 'What macOS version is required?',
    faqA3: 'Cap26 requires macOS 12 (Monterey) or later. We recommend macOS 14+ for the best performance.',
    faqQ4: 'Can I use Cap26 to create professional content?',
    faqA4:
      'Yes! Cap26 is designed for product demos, tutorials, courses and social media content. Automatic zoom and cursor animations give any recording a professional finish.',
    faqQ5: 'Is my data secure?',
    faqA5:
      'Absolutely. All processing happens locally on your Mac. No videos are sent to our servers — your privacy is our priority.',

    // CTA
    ctaTitle: 'Ready to record?',
    ctaSub: 'Download app for free and start creating stunning videos.',

    // Footer
    footerDesc: 'Screen recording studio for macOS.',
    footerCopyright: '© {year} Ccp26. All rights reserved.',
    footerProduct: 'Product',
    footerDownload: 'Download',
    footerContact: 'Contact',
    footerDevelopers: 'Developers',
    footerApiSoon: 'API coming soon',
    footerLegal: 'Legal',
    footerPrivacy: 'Privacy',
    footerTerms: 'Terms',

    // SEO
    seoTitle: 'Cap26 for macOS | Screen Recording with full editor',
    seoDescription:
      'Cap26, the screen recording studio for macOS: full editor, cuts, effects, mic, webcam, video, captions and backgrounds in a unified workflow.',
    twitterDescription: 'One studio. All your recordings. Built for macOS.',
    imgAlt: 'Cap26 app — screen recording studio interface',
  },
} satisfies Record<Locale, Record<string, string>>

export function t(locale: string, key: string): string {
  const normalizedLocale = locale in translations ? (locale as Locale) : localeDefault

  return translations[normalizedLocale][key] ?? translations[localeDefault][key] ?? key
}
