import { Button, Input } from '@/components/ui'

export default function SearchForm() {
  return (
    <form action="/search" className="w-1/4 mt-20 mx-auto text-center">
      <div className="flex justify-center gap-1 my-2.5">
        <Input
          autoComplete="off"
          name="q"
          pattern="^https:\/\/github\.com\/.*$"
          placeholder="Enter a Github repository"
          required
          type="url"
        />
        <Button>Search</Button>
      </div>
      <small>
        Only URLs starting with <code>https://github.com</code> are allowed
      </small>
    </form>
  )
}
