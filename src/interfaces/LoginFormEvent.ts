import { FormEvent } from 'react';
import { LoginForm } from '../types/LoginForm.ts';

export interface LoginFormEvent<T = Element> extends FormEvent<T> {
  target: EventTarget & LoginForm;
}
