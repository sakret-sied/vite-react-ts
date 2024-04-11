import { NavLink } from 'react-router-dom';
import styles from './Menu.module.css';
import { JSX } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store.ts';

function Menu(): JSX.Element {
  const items = useSelector((s: RootState) => s.cart.items);

  return (
    <div className={styles.menu}>
      <NavLink to="/" className={styles.link}>
        <img src="/main-icon.svg" alt="Main icon" />
        Main
      </NavLink>
      <NavLink to="/cart" className={styles.link}>
        <img src="/cart-icon.svg" alt="Menu icon" />
        Cart {items.reduce((acc, item) => acc + item.count, 0)}
      </NavLink>
    </div>
  );
}

export default Menu;
