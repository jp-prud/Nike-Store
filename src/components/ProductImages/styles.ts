import styled from 'styled-components';

import Arrow from '../../assets/images/icons/Arrow.svg';

export const Container = styled.section`
  width: 100%;
  max-width: 100%;

  img {
    max-width: 100%;
    aspect-ratio: 1/1;
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    content: url(${Arrow});
    transform: scale(0.4);
  }

  .swiper-button-prev::after {
    transform: scaleX(-1) scale(0.4);
  }

  .swiper-pagination-clickable .swiper-pagination-bullet {
    height: 3px;
    width: 38px;
    border-radius: 0;
    margin: 0 !important;
  }

  .swiper-pagination-bullet-active {
    background: ${({ theme }) => theme.colors.gray[900]};
  }

  @media (max-width: 860px) {
    max-width: calc(100vw - ${({ theme }) => theme.spacing.xlarge}px);
  }

  @media (min-width: 860px) {
    max-width: 558px;
  }
`;
