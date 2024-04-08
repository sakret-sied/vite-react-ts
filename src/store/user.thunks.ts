import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { ActionAPI, ProfileAPI, TokenAPI } from '../interfaces/API.ts';
import { LoginFields } from '../interfaces/LoginForm.ts';
import { ProfileFields } from '../interfaces/Profile.ts';
import { RegisterFields } from '../interfaces/RegisterForm.ts';
import { loginAction, profileAction, registerAction } from '../services/API.ts';

const basicThunk = <T, E>(prefix: string, func: ActionAPI<T, E>) =>
  createAsyncThunk(prefix, async (params: T) => {
    try {
      return await func(params);
    } catch (e) {
      if (e instanceof AxiosError) {
        throw new Error(e.response?.data.message);
      }
    }
  });

export const loginThunk = basicThunk<LoginFields, TokenAPI | undefined>(
  'user/login',
  loginAction
);

export const registerThunk = basicThunk<RegisterFields, TokenAPI | undefined>(
  'user/register',
  registerAction
);

export const profileThunk = basicThunk<ProfileFields, ProfileAPI | undefined>(
  'user/profile',
  profileAction
);
