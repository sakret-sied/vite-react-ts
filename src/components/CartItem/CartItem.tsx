import { ICartItemProps } from './CartItem.props.ts';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store.ts';
import { MouseEvent } from 'react';
import { cartActions } from '../../store/cart.slice.ts';
import styles from './CartItem.module.css';
import cyrillicToTranslit from 'cyrillic-to-translit-js';

function CartItem(props: ICartItemProps) {
  const { id, name, image, price, count } = props;
  const dispatch = useDispatch<AppDispatch>();

  const increaseHandler = (e: MouseEvent) => {
    e.preventDefault();
    dispatch(cartActions.add(id));
  };

  const decreaseHandler = () => {
    dispatch(cartActions.remove(id));
  };

  const removeHandler = () => {
    dispatch(cartActions.delete(id));
  };

  return (
    <div className={styles.item}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url('${image}')` }}
      ></div>
      <div className={styles.description}>
        <div className={styles.name}>
          {cyrillicToTranslit().transform(name)}
        </div>
        <div className={styles.price}>{price}&nbsp;$</div>
      </div>
      <div className={styles.actions}>
        <button className={styles.minus} onClick={decreaseHandler}>
          <img src="/minus-icon.svg" alt="Decrease" />
        </button>
        <div className={styles.number}>{count}</div>
        <button className={styles.plus} onClick={increaseHandler}>
          <img src="/plus-icon.svg" alt="Icrease" />
        </button>
        <button className={styles.remove} onClick={removeHandler}>
          <img src="/delete-icon.svg" alt="Remove" />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
