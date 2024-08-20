import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

import type { BaseParams } from '@/lib/api'
import ResultsContainer from '@/components/search/results-container'
import SearchFilters from '@/components/search/filters'

export const metadata: Metadata = {
  title: 'Search Results',
}

type PropTypes = {
  searchParams: {
    page?: string
    q?: string
    state?: BaseParams['state']
    type?: BaseParams['type']
  }
}

export default async function SearchResults({ searchParams }: PropTypes) {
  const { q: query, ...rest } = searchParams || {}
  const validQuery = query && query.match(/^https:\/\/github\.com\/([^/]+)\/([^/]+)/)

  if (!validQuery) notFound()

  const [owner, repo] = validQuery.slice(1)
  const qp = new URLSearchParams(rest)

  return (
    <div className="w-1/3 mx-auto my-10 px-2">
      <h1 className="text-2xl">Search Results</h1>
      <p className="mt-3 mb-5">
        Repo:{' '}
        <a href={query} className="text-blue-500" target="_blank" rel="noreferrer noopener">
          {query}
        </a>
      </p>
      <SearchFilters />
      <Suspense key={qp.toString()} fallback={<p className="text-lg">Loading&hellip;</p>}>
        <ResultsContainer owner={owner} repo={repo} {...rest} />
      </Suspense>
    </div>
  )
}
