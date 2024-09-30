import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, defer, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import axios from 'axios';
import { Basic } from './layout/Basic/Basic';
import { Auth  } from './layout/Auth/Auth';
import { Cart } from './pages/Cart/Cart';
import { Error } from './pages/Error/Error';
import { Product } from './pages/Product/Product';
import { Login } from './pages/Login/Login';
import { Registration } from './pages/Registration/Registration';
import { ProductCardProps } from './components/ProductCard/ProductCard.props';
import { ErrorItem } from './components/Error/ErrorItem';

const Menu = lazy(() => import('./pages/Menu/Menu'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Basic />,
    children: [
      {
        path: '/',
        element: <Suspense fallback={<>Загрузка</>}><Menu /></Suspense>
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/product/:id',
        element: <Product />,
        errorElement: <ErrorItem text={'Ошибка при загрузке данных'}></ErrorItem>,
        loader: async ({ params }) => {

          return defer({
            data: new Promise((resolve, reject) => {
              setTimeout(() => {
                axios.get('https://moredasha.github.io/food-delivery/products.json').then(response => {
                  resolve(response.data.find((item: ProductCardProps) => String(item.id) === params.id));
                }).catch(e => reject(e));
              }, 1500);
            })
          });

          // симуляция задержки загрузки для просмотре прелоадера
          /* await new Promise<void>((resolve) => {
            setTimeout(() => {
              resolve();
            }, 2000);
          });

          const { data } = await axios.get<ProductCardProps[]>('https://moredasha.github.io/food-delivery/products.json');
          const product = data.find((item) => (String(item.id) === params.id));
          return product; */
        }
      }
    ]
  },
  {
    path: '/auth',
    element: <Auth />,
    children: [
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'registration',
        element: <Registration />
      }
    ]
  },
  {
    path: '*',
    element: <Error />
  }
], { basename: '/food-delivery/' });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
