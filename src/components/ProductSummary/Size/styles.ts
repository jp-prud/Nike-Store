import styled, { css } from 'styled-components';

import Button from '../../button';

export interface ISize {
  isAvailable: boolean;
  isSelected: boolean;
}

export const Container = styled(Button)<ISize>`
  height: 32px;
  width: 40px;
  border-radius: 4px;
  background: none;
  color: ${({ theme }) => theme.colors.gray[900]};
  font: 600 1rem/1.6rem 'Montserrat', sans-serif;

  &:hover {
    background: ${({ theme }) => theme.colors.gray[900]};
    color: #fff;
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      background: ${({ theme }) => theme.colors.gray[900]};
      color: #fff;

      &:hover {
        background: none;
        color: ${({ theme }) => theme.colors.gray[900]};
      }
    `};

  ${({ isAvailable }) =>
    !isAvailable &&
    css`
      opacity: 0.4;
      pointer-events: none;
    `}
`;
