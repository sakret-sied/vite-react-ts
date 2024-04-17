import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { IActionAPI, IProfileAPI, ITokenAPI } from '../interfaces/API.ts';
import { ILoginFields } from '../interfaces/LoginForm.ts';
import { IProfileFields } from '../interfaces/Profile.ts';
import { IRegisterFields } from '../interfaces/RegisterForm.ts';
import { loginAction, profileAction, registerAction } from '../services/API.ts';

const basicThunk = <P, R>(prefix: string, func: IActionAPI<P, R>) =>
  createAsyncThunk<R | undefined, P>(prefix, async (params: P) => {
    try {
      return await func(params);
    } catch (e) {
      if (e instanceof AxiosError) {
        throw new Error(e.response?.data.message);
      }
    }
  });

export const loginThunk = basicThunk<ILoginFields, ITokenAPI>(
  'user/login',
  loginAction
);

export const registerThunk = basicThunk<IRegisterFields, ITokenAPI>(
  'user/register',
  registerAction
);

export const profileThunk = basicThunk<IProfileFields, IProfileAPI>(
  'user/profile',
  profileAction
);
