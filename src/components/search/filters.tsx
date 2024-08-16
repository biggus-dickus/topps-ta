'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ChangeEventHandler, useId } from 'react'

import { Checkbox, Label } from '@/components/ui'

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

  const handleChangePR = (checked: boolean) => {
    const qp = new URLSearchParams(searchParams)
    qp.set('page', '1')

    if (checked) {
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
        <div className="flex items-center gap-2">
          <Label htmlFor={issueId}>Issue state:</Label>
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

        <div className="flex items-center gap-2">
          <Checkbox
            checked={searchParams.has('pulls')}
            id={pullsId}
            onCheckedChange={handleChangePR}
          />
          <Label htmlFor={pullsId}>Pull requests only</Label>
        </div>
      </form>
    </section>
  )
}
