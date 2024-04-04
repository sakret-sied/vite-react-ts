import { JSX } from 'react';
import { Outlet } from 'react-router-dom';
import Logout from '../../components/Logout/Logout.tsx';
import Menu from '../../components/Menu/Menu';
import User from '../../components/User/User';
import styles from './MainLayout.module.css';

function MainLayout(): JSX.Element {
  return (
    <div className={styles.layout}>
      <div className={styles.sidebar}>
        <User />
        <Menu />
        <Logout />
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
