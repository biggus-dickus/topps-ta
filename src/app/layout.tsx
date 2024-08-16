import type { ReactNode } from 'react'
import { Inter as FontSans } from 'next/font/google'

import '@/styles/globals.css'
import { cn } from '@/lib/utils'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

type PropTypes = {
  children: ReactNode
}

export default function RootLayout({ children }: PropTypes) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        {children}
      </body>
    </html>
  )
}
