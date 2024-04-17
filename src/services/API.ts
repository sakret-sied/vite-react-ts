import axios, { AxiosRequestConfig } from 'axios';
import { IItemAPI, IProfileAPI, ITokenAPI } from '../interfaces/API.ts';
import { IRegisterFields } from '../interfaces/RegisterForm.ts';
import { ILoginFields } from '../interfaces/LoginForm.ts';
import { IProfileFields } from '../interfaces/Profile.ts';
import { AxiosMethod } from '../enums/AxiosMethod.ts';
import { TAxiosMethods } from '../types/AxiosMethods.ts';
import { ICartItem } from '../interfaces/CartState.ts';
import { TToken } from '../types/Token.ts';

export const PREFIX = 'https://purpleschool.ru/pizza-api-demo';

async function timer(seconds: number): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  });
}

async function baseAction<P, R>(
  url: string,
  params: AxiosRequestConfig<P> | P | undefined = undefined,
  method: TAxiosMethods = AxiosMethod.get,
  secondsDelay: number = 0.2
): Promise<R> {
  await timer(secondsDelay);
  const { data } = await axios[method]<R>(`${PREFIX}${url}`, params);
  return data;
}

export function getItemsAction(name: string) {
  return baseAction<{ name: string }, IItemAPI[]>('/products', {
    params: {
      name: name
    }
  });
}

export function getItemByIdAction(id: number) {
  return baseAction<undefined, IItemAPI>(`/products/${id}`);
}

export function loginAction(fields: ILoginFields) {
  return baseAction<ILoginFields, ITokenAPI>(
    `/auth/login`,
    fields,
    AxiosMethod.post
  );
}

export function registerAction(fields: IRegisterFields) {
  return baseAction<IRegisterFields, ITokenAPI>(
    `/auth/register`,
    fields,
    AxiosMethod.post
  );
}

export function profileAction(fields: IProfileFields) {
  return baseAction<IProfileFields, IProfileAPI>(`/user/profile`, fields);
}

export function orderAction(items: ICartItem[], jwt: TToken) {
  return axios.post(
    `${PREFIX}/order`,
    {
      products: items
    },
    {
      headers: {
        Authorization: `Bearer ${jwt}`
      }
    }
  );
}
