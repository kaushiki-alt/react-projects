import React from 'react'
import { BsCart3 } from 'react-icons/bs';
import { FaBarsStaggered } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import NavLinks from './NavLinks';
import Theme from './Theme';
import { useSelector } from 'react-redux';


const Navbar = () => {
    const numOfItemsInCart = useSelector((state) =>  state.cartState.numItemsInCart)
    
    return (
        <nav className="bg-base-200">
            <div className="navbar align-element">
                <div className="navbar-start">
                    <NavLink to="/" className="hidden lg:flex text-3xl btn btn-primary items-center" >C</NavLink>
                    <div className="dropdown">
                        <label tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <FaBarsStaggered className='h-6 w-6' />
                        </label>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <NavLinks />
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal">
                        <NavLinks />
                    </ul>
                </div>
                <div className="navbar-end">
                    <Theme />

                    <NavLink to="cart" className="btn btn-ghost btn-circle btn-md ml-4">
                        <div className="indicator">
                            <BsCart3 className='size-6' />
                            <span className='badge badge-sm badge-primary indicator-item'>{numOfItemsInCart}</span>
                        </div>
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
