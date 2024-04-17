import React, { InputHTMLAttributes, RefAttributes } from 'react';
import { IInputProps } from '../Input/Input.props.ts';

export interface ISearchProps extends InputHTMLAttributes<HTMLInputElement> {
  isValid?: boolean;
}

export interface ISearchType
  extends React.ForwardRefExoticComponent<
    IInputProps & RefAttributes<HTMLInputElement>
  > {}
