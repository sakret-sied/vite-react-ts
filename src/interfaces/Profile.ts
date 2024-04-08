import { Token } from '../types/Token.ts';

export interface ProfileFields {
  headers: {
    Authorization: `Bearer ${Token}`;
  };
}
