import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ProductCardProps } from './ProductCard.props.ts';
import { AppDispatch } from '../../store/store.ts';
import { cartActions } from '../../store/cart.slice.ts';
import styles from './ProductCard.module.css';

function ProductCard(props: ProductCardProps) {
  const dispatch = useDispatch<AppDispatch>();

  const addHandler = (e: MouseEvent) => {
    e.preventDefault();
    dispatch(cartActions.add(props.id));
  };

  return (
    <Link to={`/item/${props.id}`} className={styles.link}>
      <div className={styles.card}>
        <div
          className={styles.header}
          style={{ backgroundImage: `url(${props.image})` }}
        >
          <div className={styles.price}>
            {props.price}&nbsp;<span className={styles.currency}>₽</span>
          </div>
          <button className={styles.addToCart} onClick={addHandler}>
            <img src="/cart-button-icon.svg" alt="Add to cart" />
          </button>
          <div className={styles.rating}>
            {props.rating}
            <img src="/star-icon.svg" alt="Star icon" />
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.title}>{props.title}</div>
          <div className={styles.description}>{props.description}</div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
