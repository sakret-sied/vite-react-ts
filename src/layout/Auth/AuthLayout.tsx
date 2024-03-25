import { JSX } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './AuthLayout.module.css';

function AuthLayout(): JSX.Element {
  return (
    <div className={styles.layout}>
      <div className={styles.logo}>
        <img src="/logo.svg" alt="Company logo" />
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
