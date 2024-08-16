import { Metadata } from 'next'

import SearchForm from '@/components/home/search-form'

export const metadata: Metadata = {
  title: 'GitHub Issue Search',
  description: 'Get the basic info about repo issues (better than on GitHub itself!)',
}

export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-2xl text-center">Explore GitHub Issues</h1>
      <SearchForm />
    </main>
  )
}
