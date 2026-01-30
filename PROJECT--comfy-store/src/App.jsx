import React from "react"
import { HomeLayout, About, Cart, Orders, Checkout, Products, Error, Register, Login, Landing, SingleProduct, ErrorElement } from "./pages"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { store } from './store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// loaders
import { loader as loadingLoader } from "./pages/Landing";
import { loader as SingleProductLoader } from "./pages/SingleProduct";
import { loader as ProductLoader } from "./pages/Products";
import { loader as OrderLoader } from "./pages/Orders";
// actions
import { action as RegisterAction } from "./pages/Register";
import { action as LoginAction } from "./pages/Login";
import { action as CheckoutAction } from "./components/CheckoutForm";


// setup of query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 6 * 5,
    },
  },
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        element: <Landing />,
        index: true,
        loader: loadingLoader(queryClient),
        errorElement: <ErrorElement />,
      },
      {
        path: 'products',
        element: <Products />,
        loader: ProductLoader(queryClient),
        errorElement: <ErrorElement />,
      },
      {
        path: 'products/:id',
        element: <SingleProduct />,
        loader: SingleProductLoader(queryClient),
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'orders',
        element: <Orders />,
        loader: OrderLoader(store, queryClient),
      },
      {
        path: 'checkout',
        element: <Checkout />,
        action: CheckoutAction(store, queryClient),
      },
    ]
  },

  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
    action: LoginAction(store),
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
    action: RegisterAction,
  },

])

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} future={{
        v7_startTransition: true,
      }} />
    </QueryClientProvider>

  )
}

export default App
