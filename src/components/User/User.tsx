import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store.ts';
import { profileThunk } from '../../store/user.thunks.ts';
import styles from './User.module.css';

function User() {
  const dispatch = useDispatch<AppDispatch>();
  const { jwt, profile } = useSelector((state: RootState) => state.user);
  useEffect(() => {
    dispatch(profileThunk({ headers: { Authorization: `Bearer ${jwt}` } }));
  }, [dispatch, jwt]);

  return (
    <div className={styles.user}>
      <img className={styles.avatar} src="/avatar.jpg" alt="Avatar" />
      <div className={styles.name}>{profile?.name ?? ''}</div>
      <div className={styles.email}>{profile?.email ?? ''}</div>
    </div>
  );
}

export default User;
