import { useEffect, useState } from 'react';
import { Item } from '../../interfaces/item.ts';
import { getItems } from '../../services/api.items.ts';
import Heading from '../../components/Heading/Heading.tsx';
import ProductCard from '../../components/ProductCard/ProductCard.tsx';
import Search from '../../components/Search/Search.tsx';
import styles from './Main.module.css';

function Main() {
  const [items, setItems] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    getItems()
      .then((r) => setItems(r))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <div className={styles.header}>
        <Heading>Let's feed you</Heading>
        <Search placeholder="Enter food name" />
      </div>
      <div>
        {isLoading && <>Loading...</>}
        {!isLoading &&
          items.map((p) => (
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
    </>
  );
}

export default Main;
