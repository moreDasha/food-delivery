//import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Menu } from './pages/Menu/Menu';
import { Cart } from './pages/Cart/Cart';
import { Error } from './pages/Error/Error';
import { Basic } from './layout/Basic/Basic';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Basic />,
    children: [
      {
        path: '/',
        element: <Menu />
      },
      {
        path: '/cart',
        element: <Cart />
      }
    ]
  },
  {
    path: '*',
    element: <Error />
  }
]);

function App() {
  //const [counter, setCounter] = useState<number>();

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
