import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store.ts';
import styles from './Menu.module.css';

function Menu() {
  const items = useSelector((s: RootState) => s.cart.items);

  return (
    <div className={styles.menu}>
      <NavLink to="/" className={styles.link}>
        <img src="/main-icon.svg" alt="Main" />
        Main
      </NavLink>
      <NavLink to="/cart" className={styles.link}>
        <img src="/cart-icon.svg" alt="Menu" />
        Cart{' '}
        <span className={styles.cartCount}>
          {items.reduce((acc, item) => acc + item.count, 0)}
        </span>
      </NavLink>
    </div>
  );
}

export default Menu;
