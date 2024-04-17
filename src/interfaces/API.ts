export interface IItemAPI {
  id: number;
  name: string;
  price: number;
  ingredients: string[];
  image: string;
  rating: number;
}

export interface ITokenAPI {
  access_token: string;
}

export interface IProfileAPI {
  id: number;
  email: string;
  passwordHash: string;
  address: string;
  name: string;
  restoreToken: null;
  phone: string;
}

export interface IActionAPI<F, R> {
  (fields: F): Promise<R>;
}
