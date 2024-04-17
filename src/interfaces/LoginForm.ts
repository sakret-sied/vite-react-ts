import { FormEvent } from 'react';

export interface ILoginFields {
  email: string;
  password: string;
}

export interface ILoginEventValues {
  email: {
    value: string;
  };
  password: {
    value: string;
  };
}

export interface ILoginEvent<T = Element> extends FormEvent<T> {
  target: EventTarget & ILoginEventValues;
}
