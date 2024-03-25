import { IItem } from './Item.iterface.ts';

export interface ContentState {
  items: IItem[];
  isLoading: boolean;
  error: string;
}
