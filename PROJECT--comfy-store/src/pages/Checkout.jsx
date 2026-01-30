import React from 'react'
import CheckoutForm from '../components/CheckoutForm'
import CartTotals from '../components/CartTotals'
import SectionTitle from '../components/SectionTitle'
import { useSelector } from 'react-redux'

const Checkout = () => {
  const cartItems = useSelector((state) => state.cartState.cartItems)
  if (cartItems.length === 0) {
    return <SectionTitle text='Your cart is empty' />;
  }
  return (
<>
      <SectionTitle text="place your order" />
      <div className="mt-8 grid md:grid-cols-2 items-start gap-8">
          <CheckoutForm />
          <CartTotals />
          </div>
</>
  )
}

export default Checkout
