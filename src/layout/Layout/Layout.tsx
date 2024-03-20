import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import Button from '../../components/Button/Button';
import Menu from '../../components/Menu/Menu.tsx';

function Layout() {
  return (
    <div className={styles.layout}>
      <div className={styles.sidebar}>
        <div className={styles.user}>
          <img className={styles.avatar} src="/avatar.jpg" alt="Avatar icon" />
          <div className={styles.name}>User Name</div>
          <div className={styles.email}>user@mail.com</div>
        </div>
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
