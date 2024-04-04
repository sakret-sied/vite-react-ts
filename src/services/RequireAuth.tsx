import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store.ts';
import { JWT_KEY } from '../store/user.slice.ts';

export const RequireAuth = ({ children }: { children: ReactNode }) => {
  const jwt: string | null = useSelector((s: RootState) => s.user[JWT_KEY]);

  if (!jwt) {
    return <Navigate to="/auth/login" replace />;
  }

  return children;
};
