import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const Error = () => {
  const error = useRouteError()

  if (error.status === 404) {
    return (
      <main className='basic'>
        <div className="text-center flex gap-4 flex-col">
          <h1 className='text-9xl font-semibold text-primary'>404</h1>
          <p className="tracking-light text-3xl font-bold sm:text-5xl">page not found</p>
          <p className="text-lg leading-7">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
        <Link to='/' className='btn btn-secondary w-fit self-center'>Go back home</Link>
        </div>
      </main>
    )}

     return (
    <main className='grid min-h-screen place-items-center px-8 '>
      <h4 className='text-center font-bold text-4xl'>there was an error... </h4>
    </main>
  );

  }

export default Error
