import { configureStore } from '@reduxjs/toolkit';
import userSlice, { JWT_KEY } from './user.slice.ts';
import { saveState } from './storage.ts';

export const store = configureStore({
  reducer: {
    user: userSlice
  }
});

store.subscribe(() => {
  saveState({ [JWT_KEY]: store.getState().user[JWT_KEY] }, JWT_KEY);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
