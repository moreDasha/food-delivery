import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../store/store';

export const RequireAuth = ({ children }: { children: ReactNode }) => {
  const jwt = useSelector((state: RootState) => state.user.jwt);

  if (!jwt) {
    return <Navigate to='/auth/login' replace></Navigate>;
  }
  return children;
};
