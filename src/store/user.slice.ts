import { createSlice } from '@reduxjs/toolkit';
import { IUserState } from '../interfaces/UserState.ts';
import { loadState } from './storage.ts';
import { loginThunk, profileThunk, registerThunk } from './user.thunks.ts';

export const JWT_KEY = 'jwt';

const initialState: IUserState = {
  jwt: loadState<IUserState>(JWT_KEY)?.jwt ?? null,
  error: null,
  profile: null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state[JWT_KEY] = null;
    },
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.fulfilled, (state, action) => {
        if (!action.payload) {
          return;
        }
        state[JWT_KEY] = action.payload.access_token;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.error = action.error.message ?? null;
      })
      .addCase(profileThunk.fulfilled, (state, action) => {
        if (!action.payload) {
          return;
        }
        state.profile = action.payload;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        if (!action.payload) {
          return;
        }
        state[JWT_KEY] = action.payload.access_token;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.error = action.error.message ?? null;
      });
  }
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
