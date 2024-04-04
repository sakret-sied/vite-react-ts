export function loadState<T>(key: string): T | null {
  try {
    const jsonState: string | null = localStorage.getItem(key);
    if (!jsonState) {
      return null;
    }
    return JSON.parse(jsonState) as T;
  } catch (e) {
    console.error(e);
    return null;
  }
}

export function saveState<T>(state: T, key: string): void {
  const stringState: string = JSON.stringify(state);
  localStorage.setItem(key, stringState);
}
