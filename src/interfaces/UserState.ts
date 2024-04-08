import { ProfileAPI } from './API.ts';
import { JWT_KEY } from '../store/user.slice.ts';
import { Token } from '../types/Token.ts';

export interface UserState {
  [JWT_KEY]: Token;
  error: string | null;
  profile: ProfileAPI | null;
}
