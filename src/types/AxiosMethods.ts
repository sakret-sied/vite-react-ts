import { Axios, AxiosResponse } from 'axios';

export type TKeyOfType<Type, ValueType> = keyof {
  [Key in keyof Type as Type[Key] extends ValueType ? Key : never]: unknown;
};

export type TAxiosMethods = TKeyOfType<
  Axios,
  <T>(url: string) => Promise<AxiosResponse<T>>
>;
