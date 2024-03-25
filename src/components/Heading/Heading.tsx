import { HeadingProps } from './Heading.props';
import styles from './Heading.module.css';
import { JSX } from 'react';

function Heading({ children, ...props }: HeadingProps): JSX.Element {
  return (
    <h1 className={styles.h1} {...props}>
      {children}
    </h1>
  );
}

export default Heading;
