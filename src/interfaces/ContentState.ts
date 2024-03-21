import { Item } from './Item.ts';

export interface ContentState {
  items: Item[];
  isLoading: boolean;
  error: string;
}
