/* eslint-disable react/jsx-no-constructed-context-values */
import { useState, useCallback, createContext, ReactNode } from 'react';

export const SideMenuContext = createContext({
  isOpen: false,
  handleToggleSideMenu: () => {},
});

export function SideMenuProvider({ children }: ReactNode | any) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggleSideMenu = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  return (
    <SideMenuContext.Provider
      value={{
        isOpen,
        handleToggleSideMenu,
      }}
    >
      {children}
    </SideMenuContext.Provider>
  );
}
