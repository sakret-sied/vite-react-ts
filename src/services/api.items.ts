import axios from 'axios';
import { IItem } from '../interfaces/Item.iterface.ts';

export const PREFIX = 'https://purpleschool.ru/pizza-api-demo';

const timer = async (seconds: number): Promise<void> =>
  new Promise<void>((resolve): void => {
    setTimeout((): void => {
      resolve();
    }, seconds * 1000);
  });

export const getItems = async (): Promise<IItem[]> => {
  await timer(2);
  const { data }: { data: IItem[] } = await axios.get<IItem[]>(
    `${PREFIX}/products`
  );
  return data;
};

export const getItemById = async (id: number): Promise<IItem> => {
  await timer(2);
  const { data }: { data: IItem } = await axios.get<IItem>(
    `${PREFIX}/products/${id}`
  );
  return data;
};
