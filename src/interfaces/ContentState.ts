import { ItemAPI } from './API.ts';

export interface ContentState {
  items: ItemAPI[];
  isLoading: boolean;
  error: string;
}
