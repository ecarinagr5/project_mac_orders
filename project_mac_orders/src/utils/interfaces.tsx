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
