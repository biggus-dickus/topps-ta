'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ChangeEventHandler, useId } from 'react'

import { Label } from '@/components/ui'

const issueStates = ['all', 'open', 'closed']

export default function SearchFilters() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const issueId = useId()
  const pullsId = useId()

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const qp = new URLSearchParams(searchParams)
    qp.set('page', '1')

    const { name, value } = e.target

    if (name === 'state' && value === 'all') {
      qp.delete(name)
    } else {
      qp.set(name, value)
    }
    replace(`${pathname}?${qp.toString()}`)
  }

  return (
    <section className="my-4">
      <h2 className="sr-only">Search filters</h2>

      <form className="flex gap-7 my-2">
        <div className="flex items-center gap-2">
          <Label htmlFor={issueId}>Issue state:</Label>
          <select
            className="text-slate-500 capitalize"
            id={issueId}
            name="state"
            onChange={handleChange}
            value={searchParams.get('state') || 'all'}
          >
            {issueStates.map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <Label htmlFor={pullsId}>Issue type:</Label>
          <select
            className="text-slate-500 capitalize"
            id={pullsId}
            name="type"
            onChange={handleChange}
            value={searchParams.get('type') || 'issue'}
          >
            <option value="issue">Issue</option>
            <option value="pull-request">Pull request</option>
          </select>
        </div>
      </form>
    </section>
  )
}
