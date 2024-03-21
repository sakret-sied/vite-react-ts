import axios from 'axios';
import { Item } from '../interfaces/Item.ts';

export const PREFIX = 'https://purpleschool.ru/pizza-api-demo';

export const getItems = async () => {
  await new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
  const { data } = await axios.get<Item[]>(`${PREFIX}/products`);
  return data;
};
