import styled from 'styled-components';

export const Wrapper = styled.main`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xlarge}px;
  padding: ${({ theme }) => theme.spacing.xlarge}px
    ${({ theme }) => theme.spacing.medium}px;

  @media (min-width: 860px) {
    grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  }
`;
