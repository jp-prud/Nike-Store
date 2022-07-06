import styled, { css } from "styled-components";

interface IContainer {
  isOpen: boolean;
}

export const Container = styled.nav<IContainer>`
  opacity: 0;
  visibility: hidden;
  transform: translateX(-100%);
  transition: 0.5s ease-out;

  ${({ isOpen }) =>
    isOpen &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translateX(0);
    `}
`;
