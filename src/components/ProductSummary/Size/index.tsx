import { useState, ReactNode } from 'react';

import { Container } from './styles';

interface ISize {
  children: ReactNode;
  isAvailable: boolean;
}

export default function Size({ children, isAvailable }: ISize) {
  const [isSelected, setIsSelected] = useState(false);

  function handleSelectedProductSize() {
    setIsSelected(prevState => !prevState);
  }

  return (
    <Container
      isAvailable={isAvailable}
      isSelected={isSelected}
      onClick={() => handleSelectedProductSize()}
    >
      {children}
    </Container>
  );
}
