import axios from 'axios';
import { ItemAPI } from '../interfaces/ItemAPI.ts';
import { AuthToken } from '../types/AuthToken.ts';

export const PREFIX = 'https://purpleschool.ru/pizza-api-demo';

const timer = async (seconds: number): Promise<void> =>
  new Promise<void>((resolve): void => {
    setTimeout((): void => {
      resolve();
    }, seconds * 1000);
  });

export const getItems = async (): Promise<ItemAPI[]> => {
  await timer(1.5);
  const { data }: { data: ItemAPI[] } = await axios.get<ItemAPI[]>(
    `${PREFIX}/products`
  );
  return data;
};

export const getItemById = async (id: number): Promise<ItemAPI> => {
  await timer(1.5);
  const { data }: { data: ItemAPI } = await axios.get<ItemAPI>(
    `${PREFIX}/products/${id}`
  );
  return data;
};

export const login = async (
  email: string,
  password: string
): Promise<AuthToken> => {
  await timer(0.2);
  const { data }: { data: AuthToken } = await axios.post<AuthToken>(
    `${PREFIX}/auth/login`,
    {
      email,
      password
    }
  );
  return data;
};
