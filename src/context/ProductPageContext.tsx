import { createContext } from 'react';

import {
  IProductPageContext,
  IProductPageProvider,
} from '../types/Product.types';

import productsMock from '../mocks/products';

export const ProductPageContext = createContext<IProductPageContext>({
  product: undefined,
});

export default function ProductPageProvider({
  children,
  productId = '1',
}: IProductPageProvider) {
  const currentProduct = productsMock.find(product => product.id === productId);

  return (
    <ProductPageContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        product: currentProduct,
      }}
    >
      {children}
    </ProductPageContext.Provider>
  );
}
