import styled from 'styled-components';

import { animated } from 'react-spring';

export const Container = styled(animated.div)`
  height: 100%;
  width: 100%;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  transition: 0.5s ease-out;
`;
