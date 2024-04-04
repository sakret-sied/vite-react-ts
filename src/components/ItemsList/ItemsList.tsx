import ProductCard from '../ProductCard/ProductCard.tsx';
import { ItemsListProps } from './ItemsList.props.ts';
import { ItemAPI } from '../../interfaces/ItemAPI.ts';
import styles from './ItemList.module.css';
import { JSX } from 'react';

function ItemsList({ items }: ItemsListProps): JSX.Element {
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
