import type { ReactNode } from 'react'
import { Inter } from 'next/font/google'

import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

type PropTypes = {
  children: ReactNode
}

export default function RootLayout({ children }: PropTypes) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
