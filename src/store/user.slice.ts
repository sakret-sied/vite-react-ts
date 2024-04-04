import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loadState } from './storage.ts';

export const JWT_KEY = 'jwt';

export interface UserState {
  [JWT_KEY]: string | null;
}

const initialState: UserState = {
  [JWT_KEY]: loadState<UserState>(JWT_KEY)?.[JWT_KEY] ?? null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addJwt: (state, action: PayloadAction<string>): void => {
      state[JWT_KEY] = action.payload;
    },
    logout: (state): void => {
      state[JWT_KEY] = null;
    }
  }
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
