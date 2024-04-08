import { createSlice } from '@reduxjs/toolkit';
import { UserState } from '../interfaces/UserState.ts';
import { loadState } from './storage.ts';
import { loginThunk, profileThunk, registerThunk } from './user.thunks.ts';

export const JWT_KEY = 'jwt';

const initialState: UserState = {
  [JWT_KEY]: loadState<UserState>(JWT_KEY)?.[JWT_KEY] ?? null,
  error: null,
  profile: null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state): void => {
      state[JWT_KEY] = null;
    },
    clearError: (state): void => {
      state.error = null;
    }
  },
  extraReducers: (builder): void => {
    builder
      .addCase(loginThunk.fulfilled, (state, action): void => {
        if (!action.payload) {
          return;
        }
        state[JWT_KEY] = action.payload.access_token;
      })
      .addCase(loginThunk.rejected, (state, action): void => {
        state.error = action.error.message ?? null;
      })
      .addCase(profileThunk.fulfilled, (state, action): void => {
        if (!action.payload) {
          return;
        }
        state.profile = action.payload;
      })
      .addCase(registerThunk.fulfilled, (state, action): void => {
        if (!action.payload) {
          return;
        }
        state[JWT_KEY] = action.payload.access_token;
      })
      .addCase(registerThunk.rejected, (state, action): void => {
        state.error = action.error.message ?? null;
      });
  }
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
