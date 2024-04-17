import React, { forwardRef } from 'react';
import { IInputProps, IInputType } from './Input.props';
import styles from './Input.module.css';

const Input: IInputType = forwardRef<HTMLInputElement, IInputProps>(
  function Input(
    { isValid = true, ...props }: IInputProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) {
    let classes: string = styles.input;
    classes += isValid ? '' : ` ${styles.invalid}`;

    return <input ref={ref} className={classes} {...props} />;
  }
);

export default Input;
