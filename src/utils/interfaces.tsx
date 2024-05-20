export interface ICardProps {
  id?: string;
  name: string;
  price: number;
  image: string;
  description: string;
  slug: string;
}

export interface IFetchData {
  slug: string;
}
export interface IDetailsProps {
  name: string;
  price: number;
  description: string;
  calorie?: string;
}

export interface IBuyProduct {
  product: any;
}

export interface IRemove {
  id: string;
}

export interface Product {
  image: string;
  slug: string;
  id: string;
  name: string;
  price: number;
}

export interface CartItem extends Product {
  slug:string;
  image: string;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  amount: number;
}

export interface ICartProps {
  id: string;
  image: string;
  name: string;
  price: number;
  slug:string;
  quantity: number;
}
