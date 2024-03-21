import axios from 'axios';
import { Item } from '../interfaces/item.ts';

export const PREFIX = 'https://purpleschool.ru/pizza-api-demo';

export const getItems = async () => {
  try {
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
    const { data } = await axios.get<Item[]>(`${PREFIX}/products`);
    return data;
  } catch (e) {
    console.error(e);
    return [];
  }
};
