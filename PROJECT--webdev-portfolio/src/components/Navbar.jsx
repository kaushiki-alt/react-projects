import React from 'react'
import { links } from '../data'

const Navbar = () => {
    return (
        <nav className='bg-emerald-100'>
            <div className="align-element flex flex-col sm:flex-row py-4 sm:py-8 sm:gap-x-16 sm:items-center">
                <h2 className="font-bold text-3xl">Web
                    <span className="text-emerald-600">Dev</span>
                </h2>
                <div className='flex gap-3'>
                    {links.map((link) => {
                        const { id, href, text } = link;
                        return (
                            <a className="capitalize text-lg tracking-wide hover:text-emerald-600 duration-300" key={id} href={href}>{text}</a>
                        )
                    })}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
