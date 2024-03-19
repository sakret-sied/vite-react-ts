import { ButtonProps } from './Button.props';
import styles from './Button.module.css';

function Button({
  children,
  appearence = 'small',
  className = ''
}: ButtonProps) {
  let classes = `${styles.button} ${styles.accent}`;
  classes += appearence === 'big' ? ` ${styles.big}` : '';
  classes += appearence === 'small' ? ` ${styles.small}` : '';
  classes += ` ${className}`;

  return <button className={classes}>{children}</button>;
}

export default Button;
