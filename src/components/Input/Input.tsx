import { forwardRef } from 'react';
import { InputProps } from './Input.props';
import styles from './Input.module.css';

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { isValid = true, placeholder = '' },
  ref
) {
  let classes = styles.input;
  classes += isValid ? '' : ` ${styles.invalid}`;

  return <input ref={ref} className={classes} placeholder={placeholder} />;
});

export default Input;
