import React from 'react'
import CartTotals from '../components/cartTotals'
import SectionTitle from '../components/SectionTitle'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { CartItemsList } from '../components'
const Cart = () => {
    const user = useSelector((state) => state.userState.user)
  
  const numOfItemsInCart = useSelector((state) => state.cartState.numItemsInCart)
  if (numOfItemsInCart === 0) {
    return (
      <SectionTitle text="your cart is Empty" />
    )
  }
  return (
    <>
      <SectionTitle text="Shopping cart" />
      <div className="mt-8 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />

          {user ? (
            <Link to='/checkout' className='btn bg-primary btn-block mt-8'>
              Proceed to checkout
            </Link>
          ) : (
            <Link to='/login' className='btn bg-primary btn-block mt-8'>
              Please login 
            </Link>

          )}
        </div>
      </div>
    </>
  )
}

export default Cart
