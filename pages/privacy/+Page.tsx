import { usePageContext } from 'vike-react/usePageContext'

import { LegalPage, type LegalCopy } from '@/components/LegalPage'
import { localeDefault, type Locale } from '@/i18n'

const copy = {
  en: {
    metaTitle: 'Privacy Policy | Cap26',
    metaDescription:
      'Learn how Cap26 handles recordings, account data, diagnostics, subscriptions, analytics, and support requests.',
    eyebrow: 'Privacy Policy',
    title: 'Your recordings stay yours.',
    intro:
      'Cap26 is designed to keep recording and editing local to your Mac whenever possible. This policy explains what information we collect, how we use it, when we share it, and the choices available to you.',
    updatedLabel: 'Last updated',
    updatedValue: 'March 17, 2026',
    homeLabel: 'Back to home',
    privacyLabel: 'Privacy',
    termsLabel: 'Terms',
    contactLabel: 'Questions about privacy?',
    contactText: 'support@cap26.app',
    sections: [
      {
        title: 'Scope of this policy',
        paragraphs: [
          'This Privacy Policy applies to the Cap26 website, the Cap26 macOS app, and related support interactions.',
          'If Apple provides billing, subscription management, or distribution for your copy of Cap26, Apple may process data under its own privacy terms in addition to this policy.',
        ],
      },
      {
        title: 'Information we collect',
        paragraphs: [
          'We collect only the information reasonably necessary to operate Cap26, process purchases, improve reliability, and respond to support requests.',
        ],
        items: [
          'Contact information you voluntarily send us, such as your email address and the content of a support message.',
          'Purchase and subscription status information provided by Apple or another payment processor, such as transaction identifiers, plan type, renewal state, and country or region.',
          'Basic technical or diagnostic information you choose to share when requesting support, such as app version, macOS version, device model, logs, crash details, or screenshots.',
          'Limited website usage or analytics information if we use analytics tools to understand product usage and site performance.',
        ],
      },
      {
        title: 'Data that stays on your device',
        paragraphs: [
          'Cap26 is designed so that your source recordings, project state, edits, and exports remain on your Mac during normal local use.',
          'As a default rule, Cap26 does not need to send your raw recordings to our servers just for you to record, edit, or export locally on your device.',
        ],
      },
      {
        title: 'Data Cap26 may receive',
        paragraphs: [
          'Cap26 may receive account, subscription, licensing, support, diagnostic, and website information needed to operate the product and help you use it.',
          'This may include email address, transaction identifiers, subscription state, app version, device or macOS details, crash data you choose to share, and support messages you send to us.',
        ],
      },
      {
        title: 'How recordings are handled',
        paragraphs: [
          'Cap26 is built around local-first processing. Screen recordings, edits, captions, and exports are intended to stay on your device as part of normal use.',
          'We do not upload your source recordings to our servers unless you explicitly use a feature that requires remote transfer or you manually send files to support.',
        ],
      },
      {
        title: 'Optional cloud and support flows',
        paragraphs: [
          'Some product flows may require remote processing or transfer only after your explicit action, such as creating a hosted share link, uploading files for support, syncing account data, or using a future cloud-backed feature.',
          'If you choose to use one of those flows, only the information needed for that feature or support interaction should be transferred, and that transfer will be governed by this policy and any relevant third-party terms.',
        ],
      },
      {
        title: 'How we use information',
        paragraphs: [
          'We use the information we collect to run the service, support customers, improve the product, and satisfy legal and operational obligations.',
        ],
        items: [
          'To provide the app, website, and customer support.',
          'To verify purchases, subscriptions, trials, and access to paid features.',
          'To diagnose crashes, fix bugs, improve reliability, and answer support requests.',
          'To comply with legal obligations and enforce our Terms of Use.',
        ],
      },
      {
        title: 'Service providers, payments, and analytics',
        paragraphs: [
          'We may rely on service providers to help deliver Cap26, such as hosting, payment, analytics, email, customer support, or infrastructure providers.',
          'Payment information is typically processed by Apple or another payment provider, not stored directly by Cap26 except for limited transaction records or status details needed for support and subscription management.',
          'If we use analytics tools, we use them to understand how the site or product is performing and to improve user experience, not to sell your personal information.',
        ],
      },
      {
        title: 'Website cookies and similar technologies',
        paragraphs: [
          'The Cap26 website may use cookies, local storage, or similar technologies for basic site functionality, remembering preferences, security, and privacy-conscious analytics where implemented.',
          'You can usually control cookies through your browser settings. Disabling certain cookies or local storage features may affect how some parts of the website behave.',
        ],
      },
      {
        title: 'Sharing and disclosure',
        paragraphs: [
          'We do not sell your personal information.',
          'We may share limited information with service providers that help us deliver the product, such as payment, analytics, hosting, email, or support tools, but only when necessary and under appropriate contractual safeguards.',
          'We may also disclose information if required by law, legal process, or to protect the rights, safety, and security of Cap26, our users, or others.',
        ],
      },
      {
        title: 'International transfers',
        paragraphs: [
          'Depending on where you live and where our service providers operate, your information may be processed outside your country or region.',
          'Where required, we use reasonable measures designed to protect transferred information in line with applicable data protection requirements.',
        ],
      },
      {
        title: 'Retention',
        paragraphs: [
          'We keep personal information only for as long as needed to provide the service, maintain required business records, resolve disputes, and meet legal obligations.',
          'Support emails, billing records, and diagnostic material may be retained for a reasonable period unless deletion is required by law or requested where applicable.',
        ],
      },
      {
        title: 'Security',
        paragraphs: [
          'We use reasonable administrative, technical, and organizational measures designed to protect personal information against unauthorized access, loss, misuse, or disclosure.',
          'No system is completely secure, so we cannot guarantee absolute security, but we work to minimize exposure and limit the amount of information we collect in the first place.',
        ],
      },
      {
        title: 'Your choices and rights',
        paragraphs: [
          'Depending on where you live, you may have the right to request access, correction, deletion, or portability of your personal information, or to object to certain processing.',
          'To make a request, email us at support@cap26.app. We may need to verify your identity before completing the request.',
        ],
      },
      {
        title: 'Children’s privacy',
        paragraphs: [
          'Cap26 is not intended for children, and we do not knowingly collect personal information from children in violation of applicable law.',
          'If you believe a child has provided personal information to us, contact us and we will investigate and take appropriate action.',
        ],
      },
      {
        title: 'Changes to this policy',
        paragraphs: [
          'We may update this Privacy Policy from time to time. When we do, we will post the revised version here and update the effective date.',
          'If the changes are material, we may also provide additional notice where appropriate. Your continued use of Cap26 after the updated policy becomes effective means the revised policy applies going forward.',
        ],
      },
    ],
  },
  'pt-BR': {
    metaTitle: 'Política de Privacidade | Cap26',
    metaDescription:
      'Entenda como a Cap26 trata gravações, dados de conta, diagnósticos, assinaturas, analytics e solicitações de suporte.',
    eyebrow: 'Política de Privacidade',
    title: 'Suas gravações continuam sendo suas.',
    intro:
      'Cap26 foi projetado para manter gravação e edição locais no seu Mac sempre que possível. Esta política explica quais informações coletamos, como as usamos, quando as compartilhamos e quais escolhas você tem.',
    updatedLabel: 'Última atualização',
    updatedValue: '17 de março de 2026',
    homeLabel: 'Voltar para a home',
    privacyLabel: 'Privacidade',
    termsLabel: 'Termos',
    contactLabel: 'Dúvidas sobre privacidade?',
    contactText: 'support@cap26.app',
    sections: [
      {
        title: 'Escopo desta política',
        paragraphs: [
          'Esta Política de Privacidade se aplica ao site da Cap26, ao app Cap26 para macOS e às interações relacionadas de suporte.',
          'Se a Apple fornecer cobrança, gestão de assinatura ou distribuição da sua cópia do Cap26, a Apple poderá processar dados sob os próprios termos de privacidade, além desta política.',
        ],
      },
      {
        title: 'Informações que coletamos',
        paragraphs: [
          'Coletamos apenas as informações razoavelmente necessárias para operar o Cap26, processar compras, melhorar a confiabilidade e responder solicitações de suporte.',
        ],
        items: [
          'Informações de contato que você enviar voluntariamente, como seu email e o conteúdo de uma mensagem de suporte.',
          'Informações de compra e assinatura fornecidas pela Apple ou outro processador de pagamento, como identificadores de transação, tipo de plano, estado de renovação e país ou região.',
          'Informações técnicas ou de diagnóstico que você optar por compartilhar ao pedir suporte, como versão do app, versão do macOS, modelo do dispositivo, logs, detalhes de crash ou capturas de tela.',
          'Informações limitadas de uso do site ou analytics, caso usemos ferramentas para entender desempenho do produto e do site.',
        ],
      },
      {
        title: 'Dados que permanecem no seu dispositivo',
        paragraphs: [
          'Cap26 foi projetado para que suas gravações de origem, estado do projeto, edições e exports permaneçam no seu Mac durante o uso local normal.',
          'Como regra padrão, o Cap26 não precisa enviar suas gravações brutas para nossos servidores apenas para que você grave, edite ou exporte localmente no seu dispositivo.',
        ],
      },
      {
        title: 'Dados que a Cap26 pode receber',
        paragraphs: [
          'A Cap26 pode receber informações de conta, assinatura, licenciamento, suporte, diagnóstico e website necessárias para operar o produto e ajudar você a usá-lo.',
          'Isso pode incluir endereço de email, identificadores de transação, estado da assinatura, versão do app, detalhes do dispositivo ou do macOS, dados de crash que você escolher compartilhar e mensagens de suporte enviadas para nós.',
        ],
      },
      {
        title: 'Como as gravações são tratadas',
        paragraphs: [
          'Cap26 foi construído com foco em processamento local. Gravações de tela, edições, legendas e exports devem permanecer no seu dispositivo durante o uso normal.',
          'Não enviamos suas gravações de origem para nossos servidores, a menos que você use explicitamente um recurso que exija transferência remota ou envie arquivos manualmente para o suporte.',
        ],
      },
      {
        title: 'Fluxos opcionais de nuvem e suporte',
        paragraphs: [
          'Alguns fluxos do produto podem exigir processamento remoto ou transferência apenas após uma ação explícita sua, como criar um link hospedado para compartilhamento, enviar arquivos para suporte, sincronizar dados de conta ou usar um recurso futuro com backend em nuvem.',
          'Se você optar por usar um desses fluxos, somente as informações necessárias para aquele recurso ou atendimento de suporte devem ser transferidas, e essa transferência será regida por esta política e por quaisquer termos relevantes de terceiros.',
        ],
      },
      {
        title: 'Como usamos as informações',
        paragraphs: [
          'Usamos as informações coletadas para operar o serviço, atender clientes, melhorar o produto e cumprir obrigações legais e operacionais.',
        ],
        items: [
          'Para fornecer o app, o site e o suporte ao cliente.',
          'Para verificar compras, assinaturas, períodos de teste e acesso a recursos pagos.',
          'Para diagnosticar crashes, corrigir bugs, melhorar a confiabilidade e responder solicitações de suporte.',
          'Para cumprir obrigações legais e aplicar nossos Termos de Uso.',
        ],
      },
      {
        title: 'Prestadores de serviço, pagamentos e analytics',
        paragraphs: [
          'Podemos depender de prestadores de serviço para ajudar a entregar o Cap26, como provedores de hospedagem, pagamento, analytics, email, suporte ao cliente ou infraestrutura.',
          'As informações de pagamento normalmente são processadas pela Apple ou por outro provedor de pagamento, e não armazenadas diretamente pela Cap26, exceto por registros limitados de transação ou status necessários para suporte e gestão de assinatura.',
          'Se usarmos ferramentas de analytics, elas serão usadas para entender como o site ou o produto está performando e para melhorar a experiência do usuário, não para vender suas informações pessoais.',
        ],
      },
      {
        title: 'Cookies do site e tecnologias semelhantes',
        paragraphs: [
          'O site da Cap26 pode usar cookies, local storage ou tecnologias semelhantes para funcionalidade básica do site, memorização de preferências, segurança e analytics com foco em privacidade, quando implementados.',
          'Normalmente você pode controlar cookies nas configurações do navegador. Desabilitar certos cookies ou recursos de armazenamento local pode afetar o comportamento de algumas partes do site.',
        ],
      },
      {
        title: 'Compartilhamento e divulgação',
        paragraphs: [
          'Não vendemos suas informações pessoais.',
          'Podemos compartilhar informações limitadas com prestadores de serviço que ajudam a entregar o produto, como ferramentas de pagamento, analytics, hospedagem, email ou suporte, mas apenas quando necessário e com salvaguardas contratuais adequadas.',
          'Também podemos divulgar informações se isso for exigido por lei, processo legal, ou para proteger os direitos, a segurança e a integridade da Cap26, dos nossos usuários ou de terceiros.',
        ],
      },
      {
        title: 'Transferências internacionais',
        paragraphs: [
          'Dependendo de onde você mora e de onde nossos prestadores de serviço operam, suas informações podem ser processadas fora do seu país ou região.',
          'Quando necessário, usamos medidas razoáveis destinadas a proteger informações transferidas em conformidade com os requisitos aplicáveis de proteção de dados.',
        ],
      },
      {
        title: 'Retenção',
        paragraphs: [
          'Mantemos informações pessoais apenas pelo tempo necessário para fornecer o serviço, manter registros comerciais obrigatórios, resolver disputas e cumprir obrigações legais.',
          'Emails de suporte, registros de cobrança e material de diagnóstico podem ser retidos por um período razoável, salvo quando a exclusão for exigida por lei ou solicitada quando aplicável.',
        ],
      },
      {
        title: 'Segurança',
        paragraphs: [
          'Usamos medidas administrativas, técnicas e organizacionais razoáveis destinadas a proteger informações pessoais contra acesso não autorizado, perda, uso indevido ou divulgação indevida.',
          'Nenhum sistema é totalmente seguro, então não podemos garantir segurança absoluta, mas trabalhamos para minimizar exposição e limitar a quantidade de informação coletada desde o início.',
        ],
      },
      {
        title: 'Suas escolhas e direitos',
        paragraphs: [
          'Dependendo de onde você mora, você pode ter o direito de solicitar acesso, correção, exclusão ou portabilidade de seus dados pessoais, ou se opor a determinados tratamentos.',
          'Para fazer uma solicitação, envie um email para support@cap26.app. Podemos precisar verificar sua identidade antes de concluir o pedido.',
        ],
      },
      {
        title: 'Privacidade de crianças',
        paragraphs: [
          'Cap26 não é destinado a crianças, e não coletamos conscientemente informações pessoais de crianças em violação à lei aplicável.',
          'Se você acredita que uma criança nos forneceu informações pessoais, entre em contato e iremos investigar e tomar as medidas apropriadas.',
        ],
      },
      {
        title: 'Mudanças nesta política',
        paragraphs: [
          'Podemos atualizar esta Política de Privacidade periodicamente. Quando isso acontecer, publicaremos a versão revisada aqui e atualizaremos a data de vigência.',
          'Se as mudanças forem relevantes, também poderemos fornecer aviso adicional quando apropriado. Seu uso continuado do Cap26 após a entrada em vigor da política atualizada significa que a versão revisada passará a se aplicar dali em diante.',
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

  return <LegalPage locale={locale} currentPage="privacy" copy={copy[locale]} />
}
