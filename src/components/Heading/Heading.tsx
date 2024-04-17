import { IHeadingProps } from './Heading.props';
import styles from './Heading.module.css';

function Heading({ children, ...props }: IHeadingProps) {
  return (
    <h1 className={styles.h1} {...props}>
      {children}
    </h1>
  );
}

export default Heading;
