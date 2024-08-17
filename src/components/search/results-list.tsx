import { ArrowLeftEndOnRectangleIcon as PRIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { OctokitResponse } from '@octokit/types'

type PropTypes = {
  results: OctokitResponse<any[]>['data'] // todo: find the proper type for the issues list
}

export default function ResultsList({ results }: PropTypes) {
  return (
    <ol className="list-decimal pl-8 my-8">
      {results.map((result) => {
        const showIcons = !!result.pull_request || result.state === 'closed'

        return (
          <li key={result.id} className="my-4">
            <h3 className="flex items-center gap-2.5 font-bold">
              <a
                className="truncate hover:underline"
                href={result.html_url}
                rel="noopener noreferrer"
                target="_blank"
              >
                {result.title}
              </a>
              {showIcons && (
                <span className="inline-flex gap-1">
                  {result.state === 'closed' && (
                    <LockClosedIcon className="h-4 w-4" title="Closed" />
                  )}
                  {result.pull_request && <PRIcon className="h-4 w-4" title="Pull request" />}
                </span>
              )}
            </h3>
            <small className="block">
              #{result.number} by {result.user.login} created on{' '}
              {new Date(result.created_at).toLocaleDateString()}
            </small>
          </li>
        )
      })}
    </ol>
  )
}
