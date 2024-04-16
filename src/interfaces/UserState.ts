import { ProfileAPI } from './API.ts';
import { Token } from '../types/Token.ts';

export interface UserState {
  jwt: Token;
  error: string | null;
  profile: ProfileAPI | null;
}
