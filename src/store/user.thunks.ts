import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { ActionAPI, ProfileAPI, TokenAPI } from '../interfaces/API.ts';
import { LoginFields } from '../interfaces/LoginForm.ts';
import { ProfileFields } from '../interfaces/Profile.ts';
import { RegisterFields } from '../interfaces/RegisterForm.ts';
import { loginAction, profileAction, registerAction } from '../services/API.ts';

const basicThunk = <P, R>(prefix: string, func: ActionAPI<P, R>) =>
  createAsyncThunk<R | undefined, P>(prefix, async (params: P) => {
    try {
      return await func(params);
    } catch (e) {
      if (e instanceof AxiosError) {
        throw new Error(e.response?.data.message);
      }
    }
  });

export const loginThunk = basicThunk<LoginFields, TokenAPI>(
  'user/login',
  loginAction
);

export const registerThunk = basicThunk<RegisterFields, TokenAPI>(
  'user/register',
  registerAction
);

export const profileThunk = basicThunk<ProfileFields, ProfileAPI>(
  'user/profile',
  profileAction
);
