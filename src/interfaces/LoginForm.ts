import { FormEvent } from 'react';

export interface LoginFields {
  email: string;
  password: string;
}

export interface LoginEventValues {
  email: {
    value: string;
  };
  password: {
    value: string;
  };
}

export interface LoginEvent<T = Element> extends FormEvent<T> {
  target: EventTarget & LoginEventValues;
}
