import axios, { AxiosRequestConfig } from 'axios';
import { ItemAPI, ProfileAPI, TokenAPI } from '../interfaces/API.ts';
import { RegisterFields } from '../interfaces/RegisterForm.ts';
import { LoginFields } from '../interfaces/LoginForm.ts';
import { ProfileFields } from '../interfaces/Profile.ts';
import { AxiosMethod } from '../enums/AxiosMethod.ts';
import { AxiosMethods } from '../types/AxiosMethods.ts';

export const PREFIX = 'https://purpleschool.ru/pizza-api-demo';

async function timer(seconds: number): Promise<void> {
  return new Promise<void>((resolve): void => {
    setTimeout((): void => {
      resolve();
    }, seconds * 1000);
  });
}

async function baseAction<P, R>(
  url: string,
  params: AxiosRequestConfig<P> | P | undefined = undefined,
  method: AxiosMethods = AxiosMethod.get,
  secondsDelay: number = 0.2
): Promise<R> {
  await timer(secondsDelay);
  const { data } = await axios[method]<R>(`${PREFIX}${url}`, params);
  return data;
}

export function getItemsAction(name: string) {
  return baseAction<{ name: string }, ItemAPI[]>('/products', {
    params: {
      name: name
    }
  });
}

export function getItemByIdAction(id: number) {
  return baseAction<undefined, ItemAPI>(`/products/${id}`);
}

export function loginAction(fields: LoginFields) {
  return baseAction<LoginFields, TokenAPI>(
    `/auth/login`,
    fields,
    AxiosMethod.post
  );
}

export function registerAction(fields: RegisterFields) {
  return baseAction<RegisterFields, TokenAPI>(
    `/auth/register`,
    fields,
    AxiosMethod.post
  );
}

export function profileAction(fields: ProfileFields) {
  return baseAction<ProfileFields, ProfileAPI>(`/user/profile`, fields);
}
