import { Navigation, Pagination } from 'swiper';
import { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { IProduct } from '../../types/Product.types';

import { ProductPageContext } from '../../context/ProductPageContext';

import productsMock from '../../mocks/products';

import { Container } from './styles';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ProductImages() {
  const { product } = useContext(ProductPageContext);

  const currentProduct = productsMock.find(
    (iProduct: IProduct) => iProduct.id === product?.id,
  );

  return (
    <Container>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
      >
        {currentProduct?.images.map((link: string) => (
          <SwiperSlide key={link}>
            <img src={link} alt="Product" title="Product" />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
