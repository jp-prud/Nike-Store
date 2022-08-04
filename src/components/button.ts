import styled from 'styled-components';

export default styled.button`
  border: 1px solid ${({ theme }) => theme.colors.gray[900]};
  background: ${({ theme }) => theme.colors.gray[900]};
  color: #fff;
  transition: 0.3s all;

  &:hover {
    filter: brightness(1.2);
  }

  &:active {
    filter: brightness(0.8);
  }
`;
