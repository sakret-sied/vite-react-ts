import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import Button from '../../components/Button/Button';
import Menu from '../../components/Menu/Menu.tsx';
import User from '../../components/User/User.tsx';

function Layout() {
  return (
    <div className={styles.layout}>
      <div className={styles.sidebar}>
        <User />
        <Menu />
        <Button className={styles.exit}>
          <img src="/exit-icon.svg" alt="Exit icon" />
          Exit
        </Button>
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
