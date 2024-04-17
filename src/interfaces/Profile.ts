import { TToken } from '../types/Token.ts';

export interface IProfileFields {
  headers: {
    Authorization: `Bearer ${TToken}`;
  };
}
