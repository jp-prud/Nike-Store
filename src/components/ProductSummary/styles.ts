import styled from 'styled-components';

import Button from '../button';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 42px;

  @media (min-width: 869px) {
    max-width: 480px;
  }

  .sizes {
    display: flex;
    flex-wrap: wrap;
    gap: 16px 8px;

    span {
      width: 100%;
      display: block;
    }
  }
`;

export const Details = styled.div`
  text-transform: uppercase;

  span {
    font-size: 1.25rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.green};
  }

  h1 {
    font-size: 2.625rem;
    font-width: bold;
    display: block;
    margin-bottom: ${({ theme }) => theme.spacing.xlarge}px;
  }

  h4 {
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

export const Description = styled.div``;

export const BuyButton = styled(Button)`
  height: 60px;
  border-radius: 12px;
  font: bold 2rem/2.5rem 'Montserrat', sans-serif;
`;
