import axios from 'axios';
import { ItemAPI, ProfileAPI, TokenAPI } from '../interfaces/ResponseAPI.ts';

export const PREFIX = 'https://purpleschool.ru/pizza-api-demo';

const timer = async (seconds: number): Promise<void> =>
  new Promise<void>((resolve): void => {
    setTimeout((): void => {
      resolve();
    }, seconds * 1000);
  });

export const getItemsAction = async (): Promise<ItemAPI[]> => {
  await timer(1.5);
  const { data }: { data: ItemAPI[] } = await axios.get<ItemAPI[]>(
    `${PREFIX}/products`
  );
  return data;
};

export const getItemByIdAction = async (id: number): Promise<ItemAPI> => {
  await timer(1.5);
  const { data }: { data: ItemAPI } = await axios.get<ItemAPI>(
    `${PREFIX}/products/${id}`
  );
  return data;
};

export const loginAction = async (
  email: string,
  password: string
): Promise<TokenAPI | undefined> => {
  await timer(1.5);
  const { data }: { data: TokenAPI } = await axios.post<TokenAPI>(
    `${PREFIX}/auth/login`,
    {
      email,
      password
    }
  );
  return data;
};

export const profileAction = async (
  token: string | null
): Promise<ProfileAPI> => {
  await timer(0.2);
  const { data }: { data: ProfileAPI } = await axios.get<ProfileAPI>(
    `${PREFIX}/user/profile`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
  return data;
};
