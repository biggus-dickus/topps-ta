'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ChangeEventHandler, useId } from 'react'

const issueStates = ['all', 'open', 'closed']

export default function SearchFilters() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const issueId = useId()
  const pullsId = useId()

  const handleChangeStatus: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const qp = new URLSearchParams(searchParams)
    qp.set('page', '1')
    qp.set('state', e.target.value)
    replace(`${pathname}?${qp.toString()}`)
  }

  const handleChangePR: ChangeEventHandler<HTMLInputElement> = (e) => {
    const qp = new URLSearchParams(searchParams)
    qp.set('page', '1')

    if (e.target.checked) {
      qp.set('pulls', 'true')
    } else {
      qp.delete('pulls')
    }
    replace(`${pathname}?${qp.toString()}`)
  }

  return (
    <section className="my-4">
      <h2>Search filters</h2>

      <form className="flex gap-7 my-2">
        <div className="flex gap-2">
          <label htmlFor={issueId}>Issue state:</label>
          <select
            className="text-slate-500 capitalize"
            id={issueId}
            onChange={handleChangeStatus}
            value={searchParams.get('state') || 'all'}
          >
            {issueStates.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-2">
          <input
            checked={searchParams.has('pulls')}
            id={pullsId}
            onChange={handleChangePR}
            type="checkbox"
          />
          <label htmlFor={pullsId}>Pull requests only</label>
        </div>
      </form>
    </section>
  )
}
