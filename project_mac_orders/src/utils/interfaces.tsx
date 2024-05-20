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
  product:any
}

export interface IRemove {
  id:string
}


export interface Product {
  id: string;
  name: string;
  price: number;
}

export interface CartItem extends Product {
  image: string;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  amount:number;
}