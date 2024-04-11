import { configureStore } from '@reduxjs/toolkit';
import { saveState } from './storage.ts';
import cartSlice from './cart.slice.ts';
import userSlice, { JWT_KEY } from './user.slice.ts';

export const store = configureStore({
  reducer: {
    user: userSlice,
    cart: cartSlice
  }
});

store.subscribe(() => {
  saveState({ [JWT_KEY]: store.getState().user[JWT_KEY] }, JWT_KEY);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
