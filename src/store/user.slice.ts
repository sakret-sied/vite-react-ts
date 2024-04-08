import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loadState } from './storage.ts';
import { loginAction, profileAction } from '../services/API.ts';
import { AxiosError } from 'axios';
import { UserState } from '../interfaces/UserState.ts';

export const JWT_KEY = 'jwt';

const initialState: UserState = {
  [JWT_KEY]: loadState<UserState>(JWT_KEY)?.[JWT_KEY] ?? null,
  error: null,
  profile: null
};

export const loginThunk = createAsyncThunk(
  'user/login',
  async (params: { email: string; password: string }) => {
    try {
      return await loginAction(params.email, params.password);
    } catch (e) {
      if (e instanceof AxiosError) {
        throw new Error(e.response?.data.message);
      }
    }
  }
);

export const profileThunk = createAsyncThunk(
  'user/profile',
  async (params: { jwt: string | null }) => {
    try {
      return await profileAction(params.jwt);
    } catch (e) {
      if (e instanceof AxiosError) {
        throw new Error(e.response?.data.message);
      }
    }
  }
);

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
    builder.addCase(loginThunk.fulfilled, (state, action): void => {
      if (!action.payload) {
        return;
      }
      state[JWT_KEY] = action.payload.access_token;
    });
    builder.addCase(loginThunk.rejected, (state, action): void => {
      state.error = action.error.message ?? null;
    });
    builder.addCase(profileThunk.fulfilled, (state, action): void => {
      if (!action.payload) {
        return;
      }
      state.profile = action.payload;
    });
  }
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
