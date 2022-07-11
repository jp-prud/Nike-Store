import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.large}px
    ${({ theme }) => theme.spacing.medium}px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
  gap: ${({ theme }) => theme.spacing.xlarge}px;
`;
