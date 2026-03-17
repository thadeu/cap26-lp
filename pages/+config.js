import vikeReact from 'vike-react/config'
import Layout from './+Layout'

export default {
  Layout,
  extends: vikeReact,
  prerender: true,
  title: 'Capdeck for macOS',
  description:
    'Grave a tela e transforme em videos polidos com editor completo, cortes, efeitos, webcam, microfone, legendas e fundos em um fluxo nativo para macOS.',
  image: '/og-stella.svg',
  favicon: '/favicon.svg',
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
  bodyAttributes: {
    class: 'theme-dark',
  },
}
