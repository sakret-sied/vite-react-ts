import { IProfileAPI } from './API.ts';
import { TToken } from '../types/Token.ts';

export interface IUserState {
  jwt: TToken;
  error: string | null;
  profile: IProfileAPI | null;
}
