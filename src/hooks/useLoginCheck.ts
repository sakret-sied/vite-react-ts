import { JWT_KEY } from '../store/user.slice.ts';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store.ts';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function useLoginCheck() {
  const navigate = useNavigate();
  const { [JWT_KEY]: jwt } = useSelector((s: RootState) => s.user);

  useEffect(() => {
    if (jwt) {
      navigate('/');
    }
  }, [jwt, navigate]);
}
