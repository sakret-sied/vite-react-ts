import { useEffect, useState } from 'react';
import { IItem } from '../interfaces/Item.iterface.ts';
import { getItems } from '../services/api.items.ts';
import { ContentState } from '../interfaces/ContentState.ts';
import {
  ErrorState,
  IsLoadingState,
  ItemsState
} from './useContentState.props.ts';

export function useContentState(): ContentState {
  const [items, setItems]: ItemsState = useState<IItem[]>([]);
  const [isLoading, setIsLoading]: IsLoadingState = useState<boolean>(false);
  const [error, setError]: ErrorState = useState<string>('');

  useEffect((): void => {
    setError('');
    setIsLoading(true);
    getItems()
      .then((r: IItem[]) => setItems(r))
      .catch((e) => setError(e.message))
      .finally(() => setIsLoading(false));
  }, []);

  return { items, isLoading, error };
}
