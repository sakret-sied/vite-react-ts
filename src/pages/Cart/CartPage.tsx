import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ItemAPI } from '../../interfaces/API.ts';
import { RootState } from '../../store/store.ts';
import { getItemByIdAction } from '../../services/API.ts';
import Heading from '../../components/Heading/Heading.tsx';
import CartItem from '../../components/CartItem/CartItem.tsx';
import styles from './CartPage.module.css';

function CartPage() {
  const [cartItems, setCartItems] = useState<ItemAPI[]>([]);
  const items = useSelector((s: RootState) => s.cart.items);

  useEffect(() => {
    const loadAllItems = async () => {
      const res = await Promise.all(items.map((i) => getItemByIdAction(i.id)));
      setCartItems(res);
    };
    loadAllItems().then();
  }, [items]);

  return (
    <>
      <Heading className={styles.heading}>Cart</Heading>
      {items.map((i) => {
        const item = cartItems.find((p) => p.id === i.id);
        if (!item) {
          return;
        }
        return <CartItem key={i.id} count={i.count} {...item} />;
      })}
    </>
  );
}

export default CartPage;
