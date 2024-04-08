import React from 'react';
import { ItemAPI } from '../interfaces/ResponseAPI.ts';

export type ItemsState = [
  ItemAPI[],
  React.Dispatch<React.SetStateAction<ItemAPI[]>>
];

export type IsLoadingState = [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
];

export type ErrorState = [string, React.Dispatch<React.SetStateAction<string>>];
