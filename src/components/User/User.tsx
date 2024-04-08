import styles from './User.module.css';
import { JSX, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store.ts';
import { profileThunk } from '../../store/user.slice.ts';

function User(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const { jwt, profile } = useSelector((state: RootState) => state.user);
  useEffect((): void => {
    dispatch(profileThunk({ jwt }));
  }, [dispatch, jwt]);

  return (
    <div className={styles.user}>
      <img className={styles.avatar} src="/avatar.jpg" alt="Avatar icon" />
      <div className={styles.name}>{profile?.name ?? ''}</div>
      <div className={styles.email}>{profile?.email ?? ''}</div>
    </div>
  );
}

export default User;
