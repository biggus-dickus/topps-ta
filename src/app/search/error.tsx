'use client'

type PropTypes = {
  error: Error
}

export default function Error({ error }: PropTypes) {
  return (
    <>
      <h1 className="text-center">And we were doing so well&hellip;</h1>
      {error.message && <p className="text-red-600">{error.message}</p>}
    </>
  )
}
