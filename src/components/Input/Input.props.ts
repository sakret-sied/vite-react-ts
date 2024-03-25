import React, { InputHTMLAttributes, RefAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isValid?: boolean;
}

export interface InputType
  extends React.ForwardRefExoticComponent<
    InputProps & RefAttributes<HTMLInputElement>
  > {}
