import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import cyrillicToTranslit from 'cyrillic-to-translit-js';
import { IProductCardProps } from './ProductCard.props.ts';
import { AppDispatch } from '../../store/store.ts';
import { cartActions } from '../../store/cart.slice.ts';
import styles from './ProductCard.module.css';

function ProductCard(props: IProductCardProps) {
  const { id, image, price, rating, title, description } = props;
  const dispatch = useDispatch<AppDispatch>();

  const addHandler = (e: MouseEvent) => {
    e.preventDefault();
    dispatch(cartActions.add(id));
  };

  return (
    <Link to={`/item/${id}`} className={styles.link}>
      <div className={styles.card}>
        <div
          className={styles.header}
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className={styles.price}>
            {price}&nbsp;<span className={styles.currency}>$</span>
          </div>
          <button className={styles.addToCart} onClick={addHandler}>
            <img src="/cart-button-icon.svg" alt="Add to cart" />
          </button>
          <div className={styles.rating}>
            {rating}
            <img src="/star-icon.svg" alt="Star" />
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.title}>
            {cyrillicToTranslit().transform(title)}
          </div>
          <div className={styles.description}>
            {cyrillicToTranslit().transform(description)}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
