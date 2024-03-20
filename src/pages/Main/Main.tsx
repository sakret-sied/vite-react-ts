import Heading from '../../components/Heading/Heading.tsx';
import ProductCard from '../../components/ProductCard/ProductCard.tsx';
import Search from '../../components/Search/Search.tsx';
import styles from './Main.module.css';

function Main() {
  const p = {
    id: 1,
    title: 'Title',
    description: 'Description',
    rating: 4.5,
    price: 300,
    image: '/product-demo.png'
  };

  return (
    <>
      <div className={styles.header}>
        <Heading>Let's feed you</Heading>
        <Search placeholder="Enter food name" />
      </div>
      <div>
        <ProductCard
          key={p.id}
          id={p.id}
          title={p.title}
          description={p.description}
          rating={p.rating}
          price={p.price}
          image={p.image}
        />
      </div>
    </>
  );
}

export default Main;
