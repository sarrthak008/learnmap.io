import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='h-screen w-screen flex items-center justify-center gap-7 flex-col'>
         <h3 className='text-5xl font-bold text-gray-300'>Not Found</h3>
         <Link to="/" className='text-md text-gray-400'>go to home page</Link>
    </div>
  )
}

export default NotFound