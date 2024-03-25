import React from 'react';
import { IItem } from '../interfaces/Item.iterface.ts';

export type ItemsState = [
  IItem[],
  React.Dispatch<React.SetStateAction<IItem[]>>
];

export type IsLoadingState = [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
];

export type ErrorState = [string, React.Dispatch<React.SetStateAction<string>>];
