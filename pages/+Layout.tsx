import type { ReactNode } from 'react'

import './styles.css'

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return children
}
