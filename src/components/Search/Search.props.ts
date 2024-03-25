import React, { InputHTMLAttributes, RefAttributes } from 'react';
import { InputProps } from '../Input/Input.props.ts';

export interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
  isValid?: boolean;
}

export interface SearchType
  extends React.ForwardRefExoticComponent<
    InputProps & RefAttributes<HTMLInputElement>
  > {}
