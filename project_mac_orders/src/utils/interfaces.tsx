export interface CardProps {
  id?:string;
  name: string;
  price: number;
  image: string;
  description: string;
  slug: string;
}


export interface FetchData {
  slug:string;
}