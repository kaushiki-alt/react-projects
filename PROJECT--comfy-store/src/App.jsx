import React from "react"
import { HomeLayout, About, Cart, Orders, Checkout, Products, Error, Register, Login, Landing, SingleProduct } from "./pages"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout/>,
    errorElement:<Error/>,
    children: [
      {
        element:<Landing/>,
        index:true,
      },
      {
        path: 'products',
        element:<Products/>,
      },
      {
        path: 'products/:id',
        element:<SingleProduct/>,
      },
      {
        path: 'about',
        element:<About/>,
      },
      {
        path: 'cart',
        element:<Cart/>,
      },
      {
        path: 'orders',
        element:<Orders/>,
      },
      {
        path: 'checkout',
        element:<Checkout/>,
      },
    ]
  },

  {
  path: '/login',
  element:<Login/>,
  errorElement: <Error/>,
  },
  {
  path: '/register',
  element:<Register/>,
  errorElement: <Error/>,
  },
  
])

function App() {

  return (
      <RouterProvider router={router} future={{
        v7_startTransition: true,
      }} />
  )
}

export default App
