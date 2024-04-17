export interface ICartItem {
  id: number;
  count: number;
}

export interface ICartState {
  items: ICartItem[];
}
