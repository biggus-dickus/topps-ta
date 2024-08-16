import { Metadata } from 'next'

import { getIssues } from '@/lib/api'

import ResultsList from '@/components/search/results-list'
import SearchFilters from '@/components/search/filters'

export const metadata: Metadata = {
  title: 'Search Results',
}

type PropTypes = {
  searchParams: {
    q?: string
    page?: string
    pulls?: string,
    state?: 'open' | 'closed' | 'all'
  }
}

export default async function SearchResults({ searchParams }: PropTypes) {
  const { q: query, pulls, state } = searchParams || {};
  const validQuery = query && query.match(/^https:\/\/github\.com\/([^/]+)\/([^/]+)/)

  const noResults = <p>Nothing found.</p>

  if (!validQuery) return noResults

  const [owner, repo] = validQuery.slice(1)
  const resp = await getIssues({ owner, repo, state: state || 'all' })

  // todo: must be a proper way to to this via the API, but I haven't found one
  const results = pulls ? resp.data.filter((issue) => issue.pull_request) : resp.data

  return (
    <div className="w-1/3 mx-auto my-10 px-2">
      <h1 className="text-2xl">Search Results</h1>
      <p className="mt-3 mb-5">
        Repo: <a href={query} className="text-blue-500" target="_blank" rel="noreferrer noopener">{query}</a>
      </p>
      <SearchFilters />
      {resp.data.length ? <ResultsList results={results} /> : noResults}
    </div>
  )
}
