export interface ItemAPI {
  id: number;
  name: string;
  price: number;
  ingredients: string[];
  image: string;
  rating: number;
}

export interface TokenAPI {
  access_token: string;
}

export interface ProfileAPI {
  id: number;
  email: string;
  passwordHash: string;
  address: string;
  name: string;
  restoreToken: null;
  phone: string;
}
