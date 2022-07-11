import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../assets/styles/global';

import Layout from '../Layout';
import useTheme from '../../hooks/useTheme';

export default function App() {
  const { currentTheme } = useTheme();

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Layout />
    </ThemeProvider>
  );
}
