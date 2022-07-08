import { useTransition } from 'react-spring';
import { Container } from './styles';

interface IOverlay {
  isOpen: boolean;
  onClose: () => void;
}

export default function Overlay({ isOpen, onClose }: IOverlay) {
  const transition = useTransition(isOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <>
      {transition((style: any, item: boolean) => (item ? <Container style={style} onClick={() => onClose()} /> : ''))}
    </>
  );
}
