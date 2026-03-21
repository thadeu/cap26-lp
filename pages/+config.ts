import vikeReact from 'vike-react/config'
import Layout from './+Layout'

export default {
  Layout,
  extends: vikeReact,
  prerender: true,
  title: 'Cap26 Studio',
  description:
    'Screen recording studio for macOS. Unify recording and editing in a single experience. Built for creators, product teams, and people painfully disorganized with videos.',
  image: 'https://cap26.app/lp-1.png',
  favicon: '/favicon.svg',
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
  bodyAttributes: {
    class: 'theme-dark',
  },
}
