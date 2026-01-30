import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logoutUser } from '../features/user/userSlice'
import { clearCart } from '../features/cart/cartSlice'
import { QueryClient, useQueryClient } from '@tanstack/react-query'

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const user = useSelector((state) => state.userState.user)
  const queryClient = useQueryClient()
  const handleLogout = () => {
    navigate('/');
    dispatch(clearCart());
    dispatch(logoutUser());
    queryClient.removeQueries();
  }
  return (
    <header className='bg-neutral text-neutral-content py-2'>
        <div className="flex justify-center sm:justify-end align-element">
              {user ? (
          <div className='flex gap-x-2 sm:gap-x-8 items-center'>
            <p className='text-xs sm:text-sm'>Hello, {user.username}</p>
            <button
              className='btn btn-xs btn-outline btn-primary '
              onClick={handleLogout}
            >
              logout
            </button>
          </div>

              ) : (
            <div className="flex gap-4 justify-center items-center px-4 text-xs sm:text-sm">
            <Link to="/login" className='link link-hover'>Sign in/ Guest</Link>
            <Link to="/register" className='link link-hover'>Create Account </Link>
            </div>

              )}
        </div>
    </header>
  )
}

export default Header
