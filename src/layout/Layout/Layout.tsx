import { Link, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import Button from '../../components/Button/Button';

function Layout() {
  return (
    <div className={styles.layout}>
      <div className={styles.sidebar}>
        <div className={styles.user}>
          <img className={styles.avatar} src="/avatar.jpg" alt="Avatar icon" />
          <div className={styles.name}>User Name</div>
          <div className={styles.email}>user@mail.com</div>
        </div>
        <div className={styles.menu}>
          <Link to="/" className={styles.link}>
            <img src="/main-icon.svg" alt="Main icon" />
            Main
          </Link>
          <Link to="/cart" className={styles.link}>
            <img src="/cart-icon.svg" alt="Menu icon" />
            Cart
          </Link>
        </div>
        <Button className={styles.exit}>
          <img src="/exit-icon.svg" alt="Exit icon" />
          Exit
        </Button>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
