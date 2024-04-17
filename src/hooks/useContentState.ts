import { useEffect, useState } from 'react';
import { IItemAPI } from '../interfaces/API.ts';
import { getItemsAction } from '../services/API.ts';
import {
  TErrorState,
  TFilterState,
  TIsLoadingState,
  TItemsState
} from '../types/ContentState.ts';

export function useContentState() {
  const [items, setItems]: TItemsState = useState<IItemAPI[]>([]);
  const [isLoading, setIsLoading]: TIsLoadingState = useState<boolean>(false);
  const [error, setError]: TErrorState = useState<string>('');
  const [filter, setFilter]: TFilterState = useState<string>('');

  useEffect(() => {
    setError('');
    setIsLoading(true);
    getItemsAction(filter)
      .then((r: IItemAPI[]) => setItems(r))
      .catch((e) => setError(e.message))
      .finally(() => setIsLoading(false));
  }, [filter]);

  return { items, isLoading, error, filter, setFilter };
}
