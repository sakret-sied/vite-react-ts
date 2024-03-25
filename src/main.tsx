import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter, defer } from 'react-router-dom';
import './index.css';
import Cart from './pages/Cart/Cart.tsx';
import Error from './pages/Error/Error.tsx';
import Item from './pages/Item/Item.tsx';
import Layout from './layout/Layout/Layout.tsx';
import { getItemById } from './services/api.items.ts';

const Main = lazy(() => import('./pages/Main/Main'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<>Loading...</>}>
            <Main />
          </Suspense>
        )
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/item/:id',
        element: <Item />,
        errorElement: <>Error</>,
        loader: ({ params }) => defer({ data: getItemById(Number(params.id)) })
      }
    ]
  },
  {
    path: '*',
    element: <Error />
  }
]);

export default Main;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
