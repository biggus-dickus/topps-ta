import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="text-center">
      <h1 className="text-4xl">Not Found</h1>
      <p>Could not find requested resource</p>
      <Link className="text-blue-500" href="/">Return Home</Link>
    </div>
  )
}
