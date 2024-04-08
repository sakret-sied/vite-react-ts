import { ItemAPI } from './ResponseAPI.ts';

export interface ContentState {
  items: ItemAPI[];
  isLoading: boolean;
  error: string;
}
