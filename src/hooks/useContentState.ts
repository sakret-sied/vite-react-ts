import { useEffect, useState } from 'react';
import { Item } from '../interfaces/Item.ts';
import { getItems } from '../services/api.items.ts';
import { ContentState } from '../interfaces/ContentState.ts';

export function useContentState(): ContentState {
  const [items, setItems] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    setError('');
    setIsLoading(true);
    getItems()
      .then((r) => setItems(r))
      .catch((e) => setError(e.message))
      .finally(() => setIsLoading(false));
  }, []);

  return { items, isLoading, error };
}
