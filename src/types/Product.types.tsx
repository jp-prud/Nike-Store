import { ReactNode } from 'react';

export interface IProduct {
  id: string;
  name: string;
  category: string;
  price: number;
  sizes: {
    value: number;
    isAvailable: boolean;
  }[];
  description: string;
  images: string[];
}

export interface IProductPageProvider {
  children: ReactNode | any;
  productId: string | undefined;
}

export interface IProductPageContext {
  product: IProduct | undefined;
}
