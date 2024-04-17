import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IItemAPI } from '../../interfaces/API.ts';
import { cartActions } from '../../store/cart.slice.ts';
import { AppDispatch, RootState } from '../../store/store.ts';
import { getItemByIdAction, orderAction } from '../../services/API.ts';
import Button from '../../components/Button/Button.tsx';
import CartItem from '../../components/CartItem/CartItem.tsx';
import Heading from '../../components/Heading/Heading.tsx';
import styles from './CartPage.module.css';

const DELIVERY_FEE = 300;

function CartPage() {
  const [cartItems, setCartItems] = useState<IItemAPI[]>([]);
  const items = useSelector((s: RootState) => s.cart.items);
  const jwt = useSelector((s: RootState) => s.user.jwt);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    const loadAllItems = async () => {
      const res = await Promise.all(items.map((i) => getItemByIdAction(i.id)));
      setCartItems(res);
    };
    loadAllItems().then();
  }, [items]);

  const total = items
    .map((i) => {
      const product = cartItems.find((p) => p.id === i.id);
      if (!product) {
        return 0;
      }
      return i.count * product.price;
    })
    .reduce((acc, i) => acc + i, 0);

  const checkout = async () => {
    await orderAction(items, jwt);
    dispatch(cartActions.clean());
    navigate('/success');
  };

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
      <div className={styles.line}>
        <div className={styles.text}>Total</div>
        <div className={styles.price}>
          {total}&nbsp;<span>$</span>
        </div>
      </div>
      <hr className={styles.hr} />
      <div className={styles.line}>
        <div className={styles.text}>Fee</div>
        <div className={styles.price}>
          {DELIVERY_FEE}&nbsp;<span>$</span>
        </div>
      </div>
      <hr className={styles.hr} />
      <div className={styles.line}>
        <div className={styles.text}>
          Summary
          <span className={styles.totalCount}>({items.length})</span>
        </div>
        <div className={styles.price}>
          {total + DELIVERY_FEE}&nbsp;<span>$</span>
        </div>
      </div>
      <div className={styles.checkout}>
        <Button appearance="big" onClick={checkout}>
          Order
        </Button>
      </div>
    </>
  );
}

export default CartPage;
