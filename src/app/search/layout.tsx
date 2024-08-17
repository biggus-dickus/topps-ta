import Link from 'next/link'
import type { ReactNode } from 'react'

type PropTypes = {
  children: ReactNode
}

export default function SearchLayout({ children }: PropTypes) {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white z-10 px-6 py-7 mb-5 shadow-md">
        <Link className="text-blue-500" href="/">Home</Link>
      </nav>
      <main className="mt-24">{children}</main>
    </>
  )
}
