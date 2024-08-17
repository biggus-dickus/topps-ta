import { Metadata } from 'next'

import { getIssues, PER_PAGE } from '@/lib/api'

import ResultsList from '@/components/search/results-list'
import ResultsPagination from '@/components/search/results-pagination'
import SearchFilters from '@/components/search/filters'

export const metadata: Metadata = {
  title: 'Search Results',
}

type PropTypes = {
  searchParams: {
    page?: string
    q?: string
    state?: 'open' | 'closed'
    type?: 'issue' | 'pull-request'
  }
}

export default async function SearchResults({ searchParams }: PropTypes) {
  const { q: query, state, page, type } = searchParams || {}
  const validQuery = query && query.match(/^https:\/\/github\.com\/([^/]+)\/([^/]+)/)

  const noResults = <p>Nothing found.</p>
  if (!validQuery) return noResults

  const [owner, repo] = validQuery.slice(1)
  const resp = await getIssues({
    owner,
    page,
    repo,
    state,
    type,
  })

  const [total, results] = [resp.data.total_count, resp.data.items]

  return (
    <div className="w-1/3 mx-auto my-10 px-2">
      <h1 className="text-2xl">Search Results{total ? `: ${total}` : ''}</h1>
      <p className="mt-3 mb-5">
        Repo:{' '}
        <a href={query} className="text-blue-500" target="_blank" rel="noreferrer noopener">
          {query}
        </a>
      </p>
      <SearchFilters />
      {total ? (
        <>
          <ResultsList results={results} />
          <ResultsPagination totalPages={Math.ceil(total / PER_PAGE)} />
        </>
      ) : noResults}
    </div>
  )
}
