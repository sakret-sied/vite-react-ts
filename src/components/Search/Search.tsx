import React, { forwardRef } from 'react';
import { ISearchProps, ISearchType } from './Search.props';
import styles from './Search.module.css';

const Search: ISearchType = forwardRef<HTMLInputElement, ISearchProps>(
  function Input(
    { isValid = true, ...props }: ISearchProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) {
    let classes: string = styles.search;
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
  }
);

export default Search;
