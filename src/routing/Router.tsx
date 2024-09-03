import { createBrowserRouter } from 'react-router-dom';
import { Menu } from '../pages/Menu/Menu';
import { Cart } from '../pages/Cart/Cart';
import { Error } from '../pages/Error/Error';
import { Basic } from '../layout/Basic/Basic';

export const router = createBrowserRouter([
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