import { Octokit } from 'octokit'
import type { RequestParameters } from '@octokit/core/types'

const octokit = new Octokit({
  auth: process.env.GH_ACCESS_TOKEN,
})

// https://docs.github.com/en/rest/issues/issues
export function getIssues(
  params: RequestParameters & { repo: string; owner: string },
) {
  return octokit.request('GET /repos/{owner}/{repo}/issues', params)
}
