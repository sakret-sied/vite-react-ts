import React, { InputHTMLAttributes, RefAttributes } from 'react';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isValid?: boolean;
}

export interface IInputType
  extends React.ForwardRefExoticComponent<
    IInputProps & RefAttributes<HTMLInputElement>
  > {}
