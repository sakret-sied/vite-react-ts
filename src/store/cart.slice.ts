import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState } from '../interfaces/CartState.ts';
import { loadState } from './storage.ts';

export const CART_KEY = 'cart';

const initialState: CartState = {
  items: loadState<CartState>(CART_KEY)?.items ?? []
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<number>) => {
      const existed = state.items.find((i) => i.id === action.payload);
      if (!existed) {
        state.items.push({ id: action.payload, count: 1 });
        return;
      }
      state.items.map((i) => {
        if (i.id === action.payload) {
          i.count += 1;
        }
        return i;
      });
    },
    remove: (state, action: PayloadAction<number>) => {
      const existed = state.items.find((i) => i.id === action.payload);
      if (!existed) {
        return;
      }
      if (existed.count <= 1) {
        state.items = state.items.filter((i) => i.id !== action.payload);
        return;
      }
      state.items.map((i) => {
        if (i.id === action.payload) {
          i.count -= 1;
        }
        return i;
      });
    },
    delete: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    }
  }
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
