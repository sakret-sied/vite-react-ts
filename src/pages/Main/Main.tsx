import Heading from '../../components/Heading/Heading.tsx';
import Search from '../../components/Search/Search.tsx';
import styles from './Main.module.css';
import { useContentState } from '../../hooks/useContentState.ts';
import ItemsList from '../../components/ItemsList/ItemsList.tsx';

function Main() {
  const { items, isLoading, error } = useContentState();

  return (
    <>
      <div className={styles.header}>
        <Heading>Let's feed you</Heading>
        <Search placeholder="Enter food name" />
      </div>
      <div>
        {error && <>{error}</>}
        {isLoading && <>Loading...</>}
        {!isLoading && <ItemsList items={items} />}
      </div>
    </>
  );
}

export default Main;
