export default function SearchForm() {
  return (
    <form action="/search" className="w-1/3 mt-20 mx-auto text-center">
      <div className="flex justify-center gap-1 my-2.5">
        <input
          autoComplete="off"
          className="text-slate-500"
          name="q"
          pattern="^https:\/\/github\.com\/.*$"
          placeholder="Enter a Github repository"
          required
          type="url"
        />
        <button>Search</button>
      </div>
      <small>Only URLs starting with <code>https://github.com</code> are allowed</small>
    </form>
  )
}
