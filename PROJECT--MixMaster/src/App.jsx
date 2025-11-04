import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { HomeLayout, Landing } from './pages';

const router = createBrowserRouter([
  {
    path:'/',
    element: <HomeLayout/>,
  },
    {
    path:'/about',
    element: <h2>About page</h2>,
  },

])

const App = () => {
  return <RouterProvider router={router} future={{
    v7_startTransition: true,
  }} />;
};
export default App;
