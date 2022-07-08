import { animated } from 'react-spring';
import styled from 'styled-components';

export const Container = styled(animated.div)`
  height: 100%;
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  background: #fff;
  position: absolute;
  inset: 0;

  a {
    color: red;
  }
`;
