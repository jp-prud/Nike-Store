import { useParams } from 'react-router-dom';

import ProductImages from '../../components/ProductImages';
import ProductSummary from '../../components/ProductSummary';
import ProductPageProvider from '../../context/ProductPageContext';

import { Wrapper } from './styles';

export default function Product() {
  const { productId } = useParams();

  return (
    <ProductPageProvider productId={productId}>
      <Wrapper>
        <ProductImages />
        <ProductSummary />
      </Wrapper>
    </ProductPageProvider>
  );
}
