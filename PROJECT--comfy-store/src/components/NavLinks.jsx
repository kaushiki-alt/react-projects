import React from 'react'
import { links } from '../data'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavLinks = () => {
    const user = useSelector((state) => state.userState.user)
  
  return (
    <>
    {links.map((link) => {
        const {id, url, text} = link;
        if ((url === 'checkout' || url === 'orders') && !user) return null;
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


