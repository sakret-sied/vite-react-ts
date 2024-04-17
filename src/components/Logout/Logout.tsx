import { useDispatch } from 'react-redux';
import Button from '../Button/Button.tsx';
import styles from '../../layout/Main/MainLayout.module.css';
import { AppDispatch } from '../../store/store.ts';
import { userActions } from '../../store/user.slice.ts';

function Logout() {
  const dispatch = useDispatch<AppDispatch>();

  const logoutHandler = () => {
    dispatch(userActions.logout());
  };

  return (
    <Button className={styles.exit} onClick={logoutHandler}>
      <img src="/exit-icon.svg" alt="Exit" />
      Exit
    </Button>
  );
}

export default Logout;
