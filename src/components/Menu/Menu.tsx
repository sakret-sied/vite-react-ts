import { NavLink } from 'react-router-dom';
import styles from './Menu.module.css';

function Menu() {
  return (
    <div className={styles.menu}>
      <NavLink to="/" className={styles.link}>
        <img src="/main-icon.svg" alt="Main icon" />
        Main
      </NavLink>
      <NavLink to="/cart" className={styles.link}>
        <img src="/cart-icon.svg" alt="Menu icon" />
        Cart
      </NavLink>
    </div>
  );
}

export default Menu;
