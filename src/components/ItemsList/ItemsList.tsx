import ProductCard from '../ProductCard/ProductCard.tsx';
import { ItemsListProps } from './ItemsList.props.ts';

function ItemsList({ items }: ItemsListProps) {
  return (
    <>
      {items.map((p) => (
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
    </>
  );
}

export default ItemsList;
