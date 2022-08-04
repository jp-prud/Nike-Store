import { useState, useMemo } from 'react';

import themes from '../assets/styles/themes';

type ObjectKeys = keyof typeof themes;

export default function useTheme() {
  const [theme, setTheme] = useState('light');

  const currentTheme = useMemo(() => {
    const activeTheme = theme as ObjectKeys;

    return themes[activeTheme] || themes.light;
  }, [theme]);

  function handleToggleTheme() {
    setTheme(prevState => (prevState === 'light' ? 'dark' : 'light'));
  }

  return { currentTheme, handleToggleTheme };
}
