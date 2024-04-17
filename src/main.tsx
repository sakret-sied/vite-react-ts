import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter, defer } from 'react-router-dom';
import { getItemByIdAction } from './services/API.ts';
import { RequireAuth } from './services/RequireAuth.tsx';
import { store } from './store/store.ts';
import './index.css';
import AuthLayout from './layout/Auth/AuthLayout.tsx';
import MainLayout from './layout/Main/MainLayout.tsx';
import CartPage from './pages/Cart/CartPage.tsx';
import ErrorPage from './pages/Error/ErrorPage.tsx';
import ItemPage from './pages/Item/ItemPage.tsx';
import LoginPage from './pages/Login/LoginPage.tsx';
import RegisterPage from './pages/Register/RegisterPage.tsx';
import SuccessPage from './pages/Success/SuccessPage.tsx';

const Main = lazy(() => import('./pages/Main/MainPage.tsx'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <RequireAuth>
        <MainLayout />
      </RequireAuth>
    ),
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
        path: '/success',
        element: <SuccessPage />
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
            data: getItemByIdAction(Number(params.id))
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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
