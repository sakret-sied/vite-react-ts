import ProductCard from '../ProductCard/ProductCard.tsx';
import { IItemsListProps } from './ItemsList.props.ts';
import { IItemAPI } from '../../interfaces/API.ts';
import styles from './ItemList.module.css';

function ItemsList({ items }: IItemsListProps) {
  return (
    <div className={styles.wrapper}>
      {items.map((p: IItemAPI) => (
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
