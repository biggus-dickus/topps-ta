import { BaseParams, getIssues, PER_PAGE } from '@/lib/api'

import ResultsList from '@/components/search/results-list'
import ResultsPagination from '@/components/search/results-pagination'

const NoResults = () => <p>Nothing found.</p>

type PropTypes = BaseParams & { page?: string }

export default async function ResultsContainer({ owner, page, repo, state, type }: PropTypes) {
  const resp = await getIssues({ owner, page, repo, state, type })
  const [total, results] = [resp.data.total_count, resp.data.items]

  return total ? (
    <>
      <ResultsList currentPage={Number(page) || 1} results={results} />
      <p className="mb-6">Total results: {total}</p>
      <ResultsPagination totalPages={Math.ceil(total / PER_PAGE)} />
    </>
  ) : (
    <NoResults />
  )
}
