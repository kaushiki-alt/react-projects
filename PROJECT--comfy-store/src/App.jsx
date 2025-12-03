import React from "react"
import { HomeLayout, About, Cart, Orders, Checkout, Products, Error, Register, Login, Landing, SingleProduct, ErrorElement } from "./pages"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// loaders
import { loader as loadingLoader } from "./pages/Landing";
import { loader as SingleProductLoader } from "./pages/SingleProduct";
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout/>,
    errorElement:<Error/>,
    children: [
      {
        element:<Landing/>,
        index:true,
        loader: loadingLoader,
        errorElement:<ErrorElement/>,
      },
      {
        path: 'products',
        element:<Products/>,
      },
      {
        path: 'products/:id',
        element:<SingleProduct/>,
        loader: SingleProductLoader,
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
