import React from 'react';
import { IItemAPI } from '../interfaces/API.ts';

export type TItemsState = [
  IItemAPI[],
  React.Dispatch<React.SetStateAction<IItemAPI[]>>
];

export type TIsLoadingState = [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
];

export type TErrorState = [
  string,
  React.Dispatch<React.SetStateAction<string>>
];

export type TFilterState = [
  string,
  React.Dispatch<React.SetStateAction<string>>
];
