import React, { forwardRef, JSX } from 'react';
import { InputProps, InputType } from './Input.props';
import styles from './Input.module.css';

const Input: InputType = forwardRef<HTMLInputElement, InputProps>(
  function Input(
    { isValid = true, placeholder = '' }: InputProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ): JSX.Element {
    let classes: string = styles.input;
    classes += isValid ? '' : ` ${styles.invalid}`;

    return <input ref={ref} className={classes} placeholder={placeholder} />;
  }
);

export default Input;
