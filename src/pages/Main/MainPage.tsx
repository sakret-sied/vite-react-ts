import { ChangeEvent, JSX } from 'react';
import { useContentState } from '../../hooks/useContentState.ts';
import Heading from '../../components/Heading/Heading.tsx';
import ItemsList from '../../components/ItemsList/ItemsList.tsx';
import Search from '../../components/Search/Search.tsx';
import styles from './MainPage.module.css';

function MainPage(): JSX.Element {
  const { items, isLoading, error, filter, setFilter } = useContentState();
  const filterHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  return (
    <>
      <div className={styles.header}>
        <Heading>Let's feed you</Heading>
        <Search
          placeholder="Enter food name"
          value={filter}
          onChange={filterHandler}
        />
      </div>
      <div>
        {error ? <>{error}</> : ''}
        {isLoading ? (
          <>Loading...</>
        ) : items.length === 0 ? (
          <>Not found</>
        ) : (
          <ItemsList items={items} />
        )}
      </div>
    </>
  );
}

export default MainPage;
