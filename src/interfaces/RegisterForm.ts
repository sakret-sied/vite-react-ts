import { FormEvent } from 'react';

export interface IRegisterFields {
  email: string;
  name: string;
  password: string;
}

export interface IRegisterEventValues {
  email: {
    value: string;
  };
  name: {
    value: string;
  };
  password: {
    value: string;
  };
}

export interface IRegisterEvent<T = Element> extends FormEvent<T> {
  target: EventTarget & IRegisterEventValues;
}
