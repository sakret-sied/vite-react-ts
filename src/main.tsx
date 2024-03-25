import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter, defer } from 'react-router-dom';
import { getItemById } from './services/api.items.ts';
import './index.css';
import AuthLayout from './layout/Auth/AuthLayout.tsx';
import MainLayout from './layout/Main/MainLayout.tsx';
import CartPage from './pages/Cart/CartPage.tsx';
import ErrorPage from './pages/Error/ErrorPage.tsx';
import ItemPage from './pages/Item/ItemPage.tsx';
import LoginPage from './pages/Login/LoginPage.tsx';
import RegisterPage from './pages/Register/RegisterPage.tsx';

const Main = lazy(() => import('./pages/Main/MainPage.tsx'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
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
        path: 'cart',
        element: <CartPage />
      },
      {
        path: 'item/:id',
        element: <ItemPage />,
        errorElement: <>Error</>,
        loader: ({ params }) =>
          defer({
            data: getItemById(Number(params.id))
          })
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'register',
        element: <RegisterPage />
      }
    ]
  },
  {
    path: '*',
    element: <ErrorPage />
  }
]);

export default Main;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
