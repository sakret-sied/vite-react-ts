import { useEffect, useState } from 'react';
import { ItemAPI } from '../interfaces/API.ts';
import { getItemsAction } from '../services/API.ts';
import { ContentState } from '../interfaces/ContentState.ts';
import {
  ErrorState,
  FilterState,
  IsLoadingState,
  ItemsState
} from '../types/ContentState.ts';

export function useContentState(): ContentState {
  const [items, setItems]: ItemsState = useState<ItemAPI[]>([]);
  const [isLoading, setIsLoading]: IsLoadingState = useState<boolean>(false);
  const [error, setError]: ErrorState = useState<string>('');
  const [filter, setFilter]: FilterState = useState<string>('');

  useEffect(() => {
    setError('');
    setIsLoading(true);
    getItemsAction(filter)
      .then((r: ItemAPI[]) => setItems(r))
      .catch((e) => setError(e.message))
      .finally(() => setIsLoading(false));
  }, [filter]);

  return { items, isLoading, error, filter, setFilter };
}
