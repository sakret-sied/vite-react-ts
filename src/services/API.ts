import axios from 'axios';
import { ActionAPI, ItemAPI, ProfileAPI, TokenAPI } from '../interfaces/API.ts';
import { RegisterFields } from '../interfaces/RegisterForm.ts';
import { LoginFields } from '../interfaces/LoginForm.ts';
import { ProfileFields } from '../interfaces/Profile.ts';

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

export const loginAction: ActionAPI<LoginFields, TokenAPI | undefined> = async (
  fields: LoginFields
): Promise<TokenAPI | undefined> => {
  await timer(1.5);
  const { data }: { data: TokenAPI } = await axios.post<TokenAPI>(
    `${PREFIX}/auth/login`,
    fields
  );
  return data;
};

export const registerAction: ActionAPI<
  RegisterFields,
  TokenAPI | undefined
> = async (fields: RegisterFields): Promise<TokenAPI> => {
  await timer(0.2);
  const { data }: { data: TokenAPI } = await axios.post<TokenAPI>(
    `${PREFIX}/auth/register`,
    fields
  );
  return data;
};

export const profileAction: ActionAPI<
  ProfileFields,
  ProfileAPI | undefined
> = async (fields: ProfileFields): Promise<ProfileAPI> => {
  await timer(0.2);
  const { data }: { data: ProfileAPI } = await axios.get<ProfileAPI>(
    `${PREFIX}/user/profile`,
    {
      headers: {
        Authorization: `Bearer ${fields.jwt}`
      }
    }
  );
  return data;
};
