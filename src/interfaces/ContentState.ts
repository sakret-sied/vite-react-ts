import { ItemAPI } from './ItemAPI.ts';

export interface ContentState {
  items: ItemAPI[];
  isLoading: boolean;
  error: string;
}
