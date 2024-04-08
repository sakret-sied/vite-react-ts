import { ProfileAPI } from './ResponseAPI.ts';
import { JWT_KEY } from '../store/user.slice.ts';

export interface UserState {
  [JWT_KEY]: string | null;
  error: string | null;
  profile: ProfileAPI | null;
}
