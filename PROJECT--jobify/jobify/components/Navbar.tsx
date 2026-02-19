import React from 'react'
import LinksDropdown from './LinksDropdown'
import ThemeToggle from './ThemeToggle'
import { UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <nav className='bg-muted py-4 px-4 sm:px-16 lg:px-24 flex justify-between items-center'>
      <div>
        <LinksDropdown />
      </div>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <UserButton />
      </div>
    </nav>
  )
}

export default Navbar
