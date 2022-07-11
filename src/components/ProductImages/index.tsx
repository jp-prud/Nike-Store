import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Container } from './styles';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ProductImages() {
  const productImages = {
    'jordan-mint': [
      'https://artwalk.vteximg.com.br/arquivos/ids/253232-1000-1000/DQ491-4-103-1.jpg?v=637908298445230000',
      'https://artwalk.vteximg.com.br/arquivos/ids/255986-1000-1000/DQ491-4-103-2.jpg?v=637908331713730000',
      'https://artwalk.vteximg.com.br/arquivos/ids/255989-1000-1000/DQ491-4-103-5.jpg?v=637908331903370000',
      'https://artwalk.vteximg.com.br/arquivos/ids/255990-1000-1000/DQ491-4-103-6.jpg?v=637908332015570000',
    ],
    'midnight-navy': [
      'https://artwalk.vteximg.com.br/arquivos/ids/256127-1000-1000/CT852-9-141-1.jpg?v=637909214275800000',
      'https://artwalk.vteximg.com.br/arquivos/ids/256404-1000-1000/CT852-9-141-2.jpg?v=637909216953470000',
      'https://artwalk.vteximg.com.br/arquivos/ids/256958-1000-1000/CT852-9-141-4.jpg?v=637909221805530000',
      'https://artwalk.vteximg.com.br/arquivos/ids/257235-1000-1000/CT852-9-141-5.jpg?v=637909224264870000',
    ],
  };

  type ObjectKeys = keyof typeof productImages;

  function getCurrentProductImages(context: ObjectKeys) {
    return productImages[context] || [];
  }

  return (
    <Container>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
      >
        {getCurrentProductImages('midnight-navy').map((link) => (
          <SwiperSlide>
            <img src={link} alt="Product" title="Product" />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
