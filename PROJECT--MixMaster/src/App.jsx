import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { About, Cocktail, Error, HomeLayout, Landing, Newsletter, SinglePageError } from './pages';
import { loader as landingLoader } from './pages/Landing';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement:<Error/>,
    children: [
      {
        index: true,
        loader: landingLoader,
        errorElement: <SinglePageError/>,
        element: <Landing />,
      },
      {
        path: 'newsletter',
        element: <Newsletter />,
      },
      {
        path: 'cocktail',
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
  return <RouterProvider router={router} future={{
    v7_startTransition: true,
  }} />;
};
export default App;
