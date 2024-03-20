import { HeadingProps } from './Heading.props';
import styles from './Heading.module.css';

function Heading({ children, ...props }: HeadingProps) {
  return (
    <h1 className={styles.h1} {...props}>
      {children}
    </h1>
  );
}

export default Heading;
