import { Axios, AxiosResponse } from 'axios';

export type KeyOfType<Type, ValueType> = keyof {
  [Key in keyof Type as Type[Key] extends ValueType ? Key : never]: unknown;
};

export type AxiosMethods = KeyOfType<
  Axios,
  <T>(url: string) => Promise<AxiosResponse<T>>
>;
