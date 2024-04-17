import { IButtonProps } from './Button.props';
import styles from './Button.module.css';

function Button({
  children,
  appearance = 'small',
  className = '',
  onClick = () => {}
}: IButtonProps) {
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
