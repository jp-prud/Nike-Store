import styled from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled(animated.nav)`
  height: 100%;
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  background: #fff;
  position: absolute;
  inset: 0;
  padding: 24px 16px;
  z-index: 1;

  button {
    display: inline-block;
    margin: 0 0 24px auto;
    background: none;
    border: none;
  }
`;

export const PagesList = styled.div`
  display: flex;
  flex-direction: column;

  a {
    width: 100%;
    display: block;
    padding: 16px;
    color: ${({ theme }) => theme.colors.gray[900]};
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[900]};
    text-decoration: none;

    &:first-child {
      border-top: 1px solid ${({ theme }) => theme.colors.gray[900]};
    }

    & + & {
      margin-top: 16px;
    }
  }
`;
