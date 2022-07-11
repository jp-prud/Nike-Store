import ProductImages from '../ProductImages';
import ProductSummary from '../ProductSummary';

import { Wrapper } from './styles';

export default function Main() {
  return (
    <Wrapper>
      <ProductImages />
      <ProductSummary />
    </Wrapper>
  );
}
