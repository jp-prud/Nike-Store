import { BrowserRouter } from 'react-router-dom';

import Routes from '../../Routes';
import Header from '../Header';

import { Container } from './styles';

export default function Layout() {
  return (
    <BrowserRouter>
      <Container>
        <Header />

        <Routes />
      </Container>
    </BrowserRouter>
  );
}
