import { createBrowserRouter } from 'react-router-dom';
import { Menu } from '../pages/Menu/Menu';
import { Cart } from '../pages/Cart/Cart';
import { Error } from '../pages/Error/Error';
import { Basic } from '../layout/Basic/Basic';
import { Product } from '../pages/Product/Product';

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
      },
      {
        path: '/product/:id',
        element: <Product />
      }
    ]
  },
  {
    path: '*',
    element: <Error />
  }
], { basename: '/food-delivery/' });