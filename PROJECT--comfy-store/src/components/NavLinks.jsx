import React from 'react'
import { links } from '../data'
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  return (
    <>
    {links.map((link) => {
        const {id, url, text} = link;
        return (
            <li key={id} className=''>
                <NavLink to={url} className={({isActive}) => `capitalize ${isActive ? 'bg-neutral': 'bg-none'}`}>{text}</NavLink>
            </li>
        )
    })}
    </>
  )
}

export default NavLinks


