import { useContext } from 'react';

import Size from './Size';

import { Container, Details, Description, BuyButton } from './styles';

import { ProductPageContext } from '../../context/ProductPageContext';

export default function ProductSummary() {
  const { product } = useContext(ProductPageContext);

  return (
    <Container>
      <Details>
        <span>SNEAKER</span>
        <h1>{product?.category}</h1>
        <h4>{product?.name}</h4>
      </Details>

      <Description>{product?.description}</Description>

      <div className="sizes">
        <span>Escolha o seu tamanho:</span>
        {product?.sizes.map(({ value, isAvailable }) => (
          <Size isAvailable={isAvailable} key={value}>
            {value}
          </Size>
        ))}
      </div>

      <BuyButton>COMPRAR</BuyButton>
    </Container>
  );
}
