import { ButtonProps } from './Button.props';
import styles from './Button.module.css';

function Button({
  children,
  appearance = 'small',
  className = '',
  onClick = () => {}
}: ButtonProps) {
  let classes: string = `${styles.button} ${styles.accent}`;
  classes += appearance === 'big' ? ` ${styles.big}` : '';
  classes += appearance === 'small' ? ` ${styles.small}` : '';
  classes += ` ${className}`;

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
