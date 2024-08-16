import Link from 'next/link'
import type { ReactNode } from 'react'

type PropTypes = {
  children: ReactNode
}

export default function SearchLayout({ children }: PropTypes) {
  return (
    <>
      <nav className="px-5 py-7 mb-5 border-b border-slate-400">
        <Link className="text-blue-500" href="/">Home</Link>
      </nav>
      <main>{children}</main>
    </>
  )
}
