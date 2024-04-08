import { FormEvent } from 'react';

export interface RegisterFields {
  email: string;
  name: string;
  password: string;
}

export interface RegisterEventValues {
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

export interface RegisterEvent<T = Element> extends FormEvent<T> {
  target: EventTarget & RegisterEventValues;
}
