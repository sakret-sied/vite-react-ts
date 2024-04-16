import ProductCard from '../ProductCard/ProductCard.tsx';
import { ItemsListProps } from './ItemsList.props.ts';
import { ItemAPI } from '../../interfaces/API.ts';
import styles from './ItemList.module.css';

function ItemsList({ items }: ItemsListProps) {
  return (
    <div className={styles.wrapper}>
      {items.map((p: ItemAPI) => (
        <ProductCard
          key={p.id}
          id={p.id}
          title={p.name}
          description={p.ingredients.join(', ')}
          rating={p.rating}
          price={p.price}
          image={p.image}
        />
      ))}
    </div>
  );
}

export default ItemsList;
