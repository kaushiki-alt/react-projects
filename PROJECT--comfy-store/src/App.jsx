import React from "react"
import { HomeLayout, About, Cart, Orders, Checkout, Products, Error, Register, Login, Landing, SingleProduct, ErrorElement } from "./pages"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {store} from './store'

// loaders
import { loader as loadingLoader } from "./pages/Landing";
import { loader as SingleProductLoader } from "./pages/SingleProduct";
import { loader as ProductLoader } from "./pages/Products";
// actions
import { action as RegisterAction } from "./pages/Register";
import { action as LoginAction } from "./pages/Login";
import { action as CheckoutAction } from "./components/CheckoutForm";
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
        loader: ProductLoader,
        errorElement:<ErrorElement/>,
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
        action: CheckoutAction(store),
      },
    ]
  },

  {
  path: '/login',
  element:<Login/>,
  errorElement: <Error/>,
  action: LoginAction(store),
  },
  {
  path: '/register',
  element:<Register/>,
  errorElement: <Error/>,
  action: RegisterAction,
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
