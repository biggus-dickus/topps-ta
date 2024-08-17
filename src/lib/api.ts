import { Octokit } from 'octokit'
import type { RequestParameters } from '@octokit/core/types'

const octokit = new Octokit({
  auth: process.env.GH_ACCESS_TOKEN,
})

type BaseParams = {
  owner: string
  repo: string
  state?: 'open' | 'closed'
  type?: 'issue' | 'pull-request'
}

export const PER_PAGE = 30

// https://docs.github.com/en/rest/search/search
export function getIssues(params: BaseParams & RequestParameters) {
  const { owner, repo, state, type = 'issue', ...rest } = params;

  const qualifiers = [`is:${type}`, ...state ? [`state:${state}`] : []]

  return octokit.request('GET /search/issues', {
    q: `repo:${owner}/${repo}+${qualifiers.join('+')}`,
    ...rest,
  });
}
