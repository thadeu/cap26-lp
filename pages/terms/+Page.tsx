import { usePageContext } from 'vike-react/usePageContext'

import { LegalPage, type LegalCopy } from '@/components/LegalPage'
import { localeDefault, type Locale } from '@/i18n'

const copy = {
  en: {
    metaTitle: 'Terms of Use | Cap26',
    metaDescription:
      'Review the terms that govern access to the Cap26 website, app, subscriptions, and support services.',
    eyebrow: 'Terms of Use',
    title: 'Terms for using Cap26.',
    intro:
      'These Terms of Use govern your access to the Cap26 website, the Cap26 macOS app, and any related downloads, subscriptions, updates, and support interactions. By downloading, installing, purchasing, or using Cap26, you agree to these Terms and to our Privacy Policy.',
    updatedLabel: 'Last updated',
    updatedValue: 'March 17, 2026',
    homeLabel: 'Back to home',
    privacyLabel: 'Privacy',
    termsLabel: 'Terms',
    contactLabel: 'Questions about these terms?',
    contactText: 'support@cap26.app',
    sections: [
      {
        title: 'Agreement and scope',
        paragraphs: [
          'These Terms apply to your use of Cap26 websites, downloads, applications, subscriptions, trials, and support channels unless a separate written agreement applies.',
          'If Cap26 is distributed through Apple, some purchase, billing, refund, or platform-specific rights may also be governed by Apple terms in addition to these Terms.',
        ],
      },
      {
        title: 'Eligibility and account responsibilities',
        paragraphs: [
          'You may use Cap26 only if you can enter into a binding agreement and comply with applicable laws, platform rules, and third-party rights.',
          'If you create an account, start a trial, or manage a subscription, you are responsible for keeping your credentials, purchase information, and contact details accurate and secure.',
        ],
      },
      {
        title: 'License',
        paragraphs: [
          'Subject to these Terms, Cap26 grants you a limited, non-exclusive, non-transferable, revocable license to use the app and website for your personal use or internal business use.',
          'You may not copy, sell, sublicense, distribute, reverse engineer, or otherwise misuse the software except where those restrictions are not allowed by applicable law.',
        ],
      },
      {
        title: 'Subscriptions, billing, trials, and refunds',
        paragraphs: [
          'Paid features may be offered as monthly, yearly, one-time, promotional, or trial-based access. Prices, included features, and limits may change over time.',
          'If your plan renews automatically, renewal continues until canceled. If you purchase through Apple, renewal, cancellation, refund, and billing rules are handled under Apple policies. If you purchase through another provider, the billing terms shown at checkout apply.',
          'Free plans, previews, and trial periods may be modified, limited, or discontinued at any time. Except where required by law, fees already paid are non-refundable.',
        ],
      },
      {
        title: 'Plan limits, devices, and sharing features',
        paragraphs: [
          'Your subscription may include limits on devices, exports, hosted assets, shared links, storage, team usage, or other product entitlements. Those limits are part of the plan you selected.',
          'You may not bypass device limits, usage caps, licensing checks, or technical restrictions built into Cap26. If you exceed plan limits or use the product outside the scope of your plan, we may restrict access, require an upgrade, or charge the applicable price difference where allowed by law.',
          'If Cap26 offers hosted or shareable features, you remain responsible for the content you choose to publish or share through those features.',
        ],
      },
      {
        title: 'User content and permissions',
        paragraphs: [
          'You retain ownership of recordings, edits, exports, captions, and other content you create with Cap26.',
          'You are solely responsible for making sure you have the legal right and any necessary consent to record screens, people, audio, meetings, applications, or third-party materials.',
        ],
      },
      {
        title: 'Acceptable use',
        paragraphs: [
          'You may use Cap26 only for lawful purposes and in ways that do not interfere with the product, other users, or third-party rights.',
        ],
        items: [
          'Do not use Cap26 to violate laws, privacy rights, intellectual property rights, or platform policies.',
          'Do not attempt to probe, disrupt, overload, or bypass the stability, security, licensing, or normal operation of the app, website, or related services.',
          'Do not misuse trial access, coupon codes, payment systems, subscription features, or support channels.',
          'Do not use Cap26 to capture or distribute content in a way that is unlawful, deceptive, abusive, or harmful.',
        ],
      },
      {
        title: 'Intellectual property',
        paragraphs: [
          'Cap26, including its software, visual design, branding, documentation, site content, and related materials, remains the property of Cap26 and its licensors.',
          'These Terms do not transfer any ownership rights to you other than the limited right to use the product under this agreement.',
        ],
      },
      {
        title: 'Feedback',
        paragraphs: [
          'If you send us suggestions, ideas, bug reports, or product feedback, you agree that we may use that feedback to improve Cap26 without any obligation to compensate you.',
          'Please do not send confidential information if you expect it to remain subject to special confidentiality terms unless we have agreed otherwise in writing.',
        ],
      },
      {
        title: 'Third-party services and external links',
        paragraphs: [
          'Cap26 may rely on or link to third-party services such as Apple, payment processors, analytics tools, hosting providers, support tools, or external websites.',
          'We are not responsible for the content, policies, or actions of third-party services, and your use of them may be governed by their own terms and privacy policies.',
        ],
      },
      {
        title: 'Beta status, availability, and updates',
        paragraphs: [
          'Cap26 may be offered as an alpha, beta, preview, or evolving product. Features may change, be removed, delayed, or become unavailable without notice.',
          'We may release updates, bug fixes, compatibility changes, or security patches automatically, or require an update before certain features continue to work properly.',
        ],
      },
      {
        title: 'Disclaimer of warranties',
        paragraphs: [
          'Cap26 is provided on an “as is” and “as available” basis to the maximum extent permitted by law.',
          'We do not guarantee uninterrupted availability, error-free operation, compatibility with every workflow, or that the product will always meet your specific expectations or business needs.',
        ],
      },
      {
        title: 'Limitation of liability',
        paragraphs: [
          'To the maximum extent permitted by law, Cap26 and its affiliates will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages, or for lost revenue, profits, data, business, or goodwill arising from or relating to your use of the product.',
          'If liability cannot be excluded, our total liability will be limited to the amount you paid to Cap26 for the relevant product or service during the twelve months before the event giving rise to the claim.',
        ],
      },
      {
        title: 'Indemnification',
        paragraphs: [
          'To the maximum extent permitted by law, you agree to defend, indemnify, and hold harmless Cap26, its affiliates, and its personnel from claims, losses, liabilities, costs, and expenses arising out of your content, your misuse of the product, or your violation of these Terms or applicable law.',
          'This includes claims related to recordings, shared material, consent, privacy, intellectual property, or other rights that you were responsible for clearing before using or distributing content through Cap26.',
        ],
      },
      {
        title: 'Termination',
        paragraphs: [
          'We may suspend, limit, or terminate access if you materially violate these Terms, misuse the product, create legal or security risk, or fail to pay applicable fees.',
          'You may stop using Cap26 at any time. Sections that by their nature should survive termination, including intellectual property, disclaimers, limitations of liability, and payment obligations, will continue to apply.',
        ],
      },
      {
        title: 'Changes to these Terms',
        paragraphs: [
          'We may update these Terms from time to time by posting a revised version on this page and updating the effective date.',
          'Your continued use of Cap26 after revised Terms become effective means you accept the updated Terms. If you do not agree, you should stop using the product.',
        ],
      },
    ],
  },
  'pt-BR': {
    metaTitle: 'Termos de Uso | Cap26',
    metaDescription: 'Consulte os termos que regem o acesso ao site, app, assinaturas e suporte da Cap26.',
    eyebrow: 'Termos de Uso',
    title: 'Termos para usar o Cap26.',
    intro:
      'Estes Termos de Uso regulam seu acesso ao site da Cap26, ao app Cap26 para macOS e a quaisquer downloads, assinaturas, atualizações e interações de suporte relacionadas. Ao baixar, instalar, comprar ou usar o Cap26, você concorda com estes Termos e com a nossa Política de Privacidade.',
    updatedLabel: 'Última atualização',
    updatedValue: '17 de março de 2026',
    homeLabel: 'Voltar para a home',
    privacyLabel: 'Privacidade',
    termsLabel: 'Termos',
    contactLabel: 'Dúvidas sobre estes termos?',
    contactText: 'support@cap26.app',
    sections: [
      {
        title: 'Acordo e escopo',
        paragraphs: [
          'Estes Termos se aplicam ao seu uso dos sites, downloads, aplicativos, assinaturas, testes e canais de suporte da Cap26, salvo se houver um contrato escrito separado aplicável.',
          'Se o Cap26 for distribuído pela Apple, alguns direitos específicos de compra, cobrança, reembolso ou plataforma também podem ser regidos pelos termos da Apple, além destes Termos.',
        ],
      },
      {
        title: 'Elegibilidade e responsabilidades da conta',
        paragraphs: [
          'Você só pode usar o Cap26 se puder celebrar um acordo vinculante e cumprir as leis aplicáveis, regras de plataforma e direitos de terceiros.',
          'Se você criar uma conta, iniciar um teste ou gerenciar uma assinatura, é responsável por manter suas credenciais, informações de compra e dados de contato corretos e seguros.',
        ],
      },
      {
        title: 'Licença',
        paragraphs: [
          'Sujeito a estes Termos, a Cap26 concede a você uma licença limitada, não exclusiva, intransferível e revogável para usar o app e o site para uso pessoal ou para uso interno do seu negócio.',
          'Você não pode copiar, vender, sublicenciar, distribuir, fazer engenharia reversa ou usar o software de forma indevida, exceto quando tais restrições não forem permitidas pela lei aplicável.',
        ],
      },
      {
        title: 'Assinaturas, cobrança, testes e reembolsos',
        paragraphs: [
          'Recursos pagos podem ser oferecidos em planos mensais, anuais, avulsos, promocionais ou de teste. Preços, recursos incluídos e limites podem mudar com o tempo.',
          'Se o seu plano se renovar automaticamente, a renovação continua até o cancelamento. Se a compra ocorrer pela Apple, renovação, cancelamento, reembolso e regras de cobrança seguem as políticas da Apple. Se a compra ocorrer por outro provedor, valem os termos de cobrança exibidos no checkout.',
          'Planos gratuitos, previews e períodos de teste podem ser alterados, limitados ou descontinuados a qualquer momento. Salvo quando exigido por lei, valores já pagos não são reembolsáveis.',
        ],
      },
      {
        title: 'Limites do plano, dispositivos e recursos de compartilhamento',
        paragraphs: [
          'Sua assinatura pode incluir limites de dispositivos, exports, ativos hospedados, links compartilháveis, armazenamento, uso em equipe ou outros direitos do produto. Esses limites fazem parte do plano que você escolheu.',
          'Você não pode contornar limites de dispositivos, tetos de uso, verificações de licença ou restrições técnicas incorporadas ao Cap26. Se você exceder os limites do plano ou usar o produto fora do escopo contratado, poderemos restringir o acesso, exigir upgrade ou cobrar a diferença aplicável quando isso for permitido por lei.',
          'Se o Cap26 oferecer recursos hospedados ou compartilháveis, você continuará sendo responsável pelo conteúdo que decidir publicar ou compartilhar por meio desses recursos.',
        ],
      },
      {
        title: 'Conteúdo do usuário e permissões',
        paragraphs: [
          'Você mantém a titularidade sobre gravações, edições, exports, legendas e outros conteúdos criados com o Cap26.',
          'Você é o único responsável por garantir que possui o direito legal e qualquer consentimento necessário para gravar telas, pessoas, áudio, reuniões, aplicativos ou materiais de terceiros.',
        ],
      },
      {
        title: 'Uso aceitável',
        paragraphs: [
          'Você pode usar o Cap26 apenas para finalidades legais e de forma que não interfira no produto, em outros usuários ou em direitos de terceiros.',
        ],
        items: [
          'Não use o Cap26 para violar leis, direitos de privacidade, direitos de propriedade intelectual ou políticas de plataforma.',
          'Não tente testar, interromper, sobrecarregar ou contornar a estabilidade, segurança, licenciamento ou operação normal do app, do site ou de serviços relacionados.',
          'Não abuse de períodos de teste, cupons, sistemas de pagamento, recursos de assinatura ou canais de suporte.',
          'Não use o Cap26 para capturar ou distribuir conteúdo de forma ilegal, enganosa, abusiva ou prejudicial.',
        ],
      },
      {
        title: 'Propriedade intelectual',
        paragraphs: [
          'Cap26, incluindo software, design visual, marca, documentação, conteúdo do site e materiais relacionados, permanece como propriedade da Cap26 e de seus licenciantes.',
          'Estes Termos não transferem a você qualquer direito de propriedade além do direito limitado de usar o produto de acordo com este acordo.',
        ],
      },
      {
        title: 'Feedback',
        paragraphs: [
          'Se você nos enviar sugestões, ideias, relatórios de bug ou feedback de produto, você concorda que podemos usar esse material para melhorar o Cap26 sem obrigação de compensação.',
          'Por favor, não envie informações confidenciais se você espera que elas permaneçam sujeitas a obrigações especiais de confidencialidade, salvo se houver acordo escrito em contrário.',
        ],
      },
      {
        title: 'Serviços de terceiros e links externos',
        paragraphs: [
          'Cap26 pode depender de ou apontar para serviços de terceiros, como Apple, processadores de pagamento, ferramentas de analytics, provedores de hospedagem, ferramentas de suporte ou sites externos.',
          'Não somos responsáveis pelo conteúdo, políticas ou condutas de serviços de terceiros, e o seu uso desses serviços pode ser regido pelos próprios termos e políticas de privacidade deles.',
        ],
      },
      {
        title: 'Status beta, disponibilidade e atualizações',
        paragraphs: [
          'Cap26 pode ser oferecido como alpha, beta, preview ou produto em evolução. Recursos podem mudar, ser removidos, atrasados ou ficar indisponíveis sem aviso prévio.',
          'Podemos lançar atualizações, correções de bugs, mudanças de compatibilidade ou patches de segurança automaticamente, ou exigir atualização antes que certos recursos continuem funcionando adequadamente.',
        ],
      },
      {
        title: 'Isenção de garantias',
        paragraphs: [
          'Cap26 é fornecido “como está” e “conforme disponível”, no limite máximo permitido por lei.',
          'Não garantimos disponibilidade ininterrupta, operação sem erros, compatibilidade com todos os fluxos de trabalho, nem que o produto sempre atenderá às suas expectativas específicas ou necessidades de negócio.',
        ],
      },
      {
        title: 'Limitação de responsabilidade',
        paragraphs: [
          'No limite máximo permitido por lei, a Cap26 e suas afiliadas não serão responsáveis por danos indiretos, incidentais, especiais, exemplares, consequenciais ou punitivos, nem por perda de receita, lucros, dados, negócios ou goodwill decorrentes ou relacionados ao seu uso do produto.',
          'Se a responsabilidade não puder ser excluída, nossa responsabilidade total ficará limitada ao valor que você pagou à Cap26 pelo produto ou serviço relevante nos doze meses anteriores ao evento que deu origem à reclamação.',
        ],
      },
      {
        title: 'Indenização',
        paragraphs: [
          'No limite máximo permitido por lei, você concorda em defender, indenizar e isentar a Cap26, suas afiliadas e seu pessoal contra reclamações, perdas, responsabilidades, custos e despesas decorrentes do seu conteúdo, do uso indevido do produto ou da violação destes Termos ou da lei aplicável.',
          'Isso inclui reclamações relacionadas a gravações, material compartilhado, consentimento, privacidade, propriedade intelectual ou outros direitos cuja liberação era sua responsabilidade antes de usar ou distribuir conteúdo por meio do Cap26.',
        ],
      },
      {
        title: 'Encerramento',
        paragraphs: [
          'Podemos suspender, limitar ou encerrar o acesso se você violar materialmente estes Termos, usar o produto de forma indevida, criar risco legal ou de segurança, ou deixar de pagar valores aplicáveis.',
          'Você pode parar de usar o Cap26 a qualquer momento. Seções que, por sua natureza, devam sobreviver ao encerramento, incluindo propriedade intelectual, isenções, limitações de responsabilidade e obrigações de pagamento, continuarão válidas.',
        ],
      },
      {
        title: 'Mudanças nestes Termos',
        paragraphs: [
          'Podemos atualizar estes Termos periodicamente por meio da publicação de uma versão revisada nesta página e da atualização da data de vigência.',
          'Seu uso continuado do Cap26 após a entrada em vigor dos Termos revisados significa que você aceita a versão atualizada. Se não concordar, deve parar de usar o produto.',
        ],
      },
    ],
  },
} satisfies Record<Locale, LegalCopy>

export default function Page() {
  const pageContext = usePageContext()
  const localeValue =
    'locale' in pageContext && typeof pageContext.locale === 'string' ? pageContext.locale : localeDefault
  const locale = localeValue in copy ? (localeValue as Locale) : localeDefault

  return <LegalPage locale={locale} currentPage="terms" copy={copy[locale]} />
}
