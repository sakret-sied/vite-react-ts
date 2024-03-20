import { forwardRef } from 'react';
import { SearchProps } from './Search.props';
import styles from './Search.module.css';

const Search = forwardRef<HTMLInputElement, SearchProps>(function Input(
  { isValid = true, ...props },
  ref
) {
  let classes = styles.search;
  classes += isValid ? '' : ` ${styles.invalid}`;

  return (
    <div className={styles.searchWrapper}>
      <input ref={ref} className={classes} {...props} />
      <img
        className={styles.searchIcon}
        src="/search-icon.svg"
        alt="Search icon"
      />
    </div>
  );
});

export default Search;
