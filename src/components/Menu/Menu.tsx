import { NavLink } from 'react-router-dom';
import styles from './Menu.module.css';

function Menu() {
  const navClass = ({ isActive }: { isActive: boolean }): string =>
    `${styles.link} ${isActive ? styles.active : ''}`;

  return (
    <div className={styles.menu}>
      <NavLink to="/" className={navClass}>
        <img src="/main-icon.svg" alt="Main icon" />
        Main
      </NavLink>
      <NavLink to="/cart" className={navClass}>
        <img src="/cart-icon.svg" alt="Menu icon" />
        Cart
      </NavLink>
    </div>
  );
}

export default Menu;
