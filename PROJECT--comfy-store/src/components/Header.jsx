import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-neutral text-neutral-content py-2'>
        <div className="flex justify-center sm:justify-end align-element">
            
            <div className="flex gap-4 justify-center items-center px-4 text-xs sm:text-sm">
            <Link to="/login" className='link link-hover'>Sign in/ Guest</Link>
            <Link to="/register" className='link link-hover'>Create Account </Link>
            </div>
        </div>
    </header>
  )
}

export default Header
