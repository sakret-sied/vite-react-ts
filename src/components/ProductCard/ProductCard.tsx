import styles from './ProductCard.module.css';
import { ProductCardProps } from './ProductCard.props.ts';
import { Link } from 'react-router-dom';

function ProductCard(props: ProductCardProps) {
  return (
    <Link to={'/'} className={styles.link}>
      <div className={styles.card}>
        <div
          className={styles.header}
          style={{ backgroundImage: `url(${props.image})` }}
        >
          <div className={styles.price}>
            {props.price}&nbsp;<span className={styles.currency}>₽</span>
          </div>
          <button className={styles.addToCart}>
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
