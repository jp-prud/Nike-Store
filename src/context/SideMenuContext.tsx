/* eslint-disable react/jsx-no-constructed-context-values */
import { useState, useCallback, createContext, ReactNode } from 'react';

interface ISideMenuContext {
  isOpen: boolean;
  handleToggleSideMenu: () => void;
}

export const SideMenuContext = createContext<ISideMenuContext>({
  isOpen: false,
  handleToggleSideMenu: () => undefined,
});

export function SideMenuProvider({ children }: ReactNode[] | any) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggleSideMenu = useCallback(() => {
    setIsOpen(prevState => !prevState);
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
