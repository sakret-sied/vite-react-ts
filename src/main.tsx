import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import Layout from './layout/Layout/Layout.tsx';
import Cart from './pages/Cart/Cart.tsx';
import Error from './pages/Error/Error.tsx';
import Main from './pages/Main/Main.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Main />
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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
