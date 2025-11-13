import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { About, Cocktail, Error, HomeLayout, Landing, Newsletter, SinglePageError } from './pages';
import { loader as landingLoader } from './pages/Landing';
import { loader as cocktailLoader } from './pages/Cocktail';
import { action as newsletterAction } from './pages/Newsletter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    }
  }
});
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: landingLoader(queryClient),
        errorElement: <SinglePageError />,
        element: <Landing />,
      },
      {
        path: 'newsletter',
        element: <Newsletter />,
        action: newsletterAction,
      },
      {
        path: 'cocktail/:id',
        errorElement: <SinglePageError />,
        loader: cocktailLoader(queryClient),
        element: <Cocktail />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ]
  },
])

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} future={{
        v7_startTransition: true,
      }} />
    </QueryClientProvider>
  )
};

export default App;
