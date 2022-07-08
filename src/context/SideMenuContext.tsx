import { useState, createContext, ReactNode, useMemo } from 'react';

export const SideMenuContext = createContext({
  isOpen: false,
  handleToggleSideMenu: () => {},
});

export function SideMenuProvider({ children }: ReactNode | any) {
  const [isOpen, setIsOpen] = useState(true);

  function handleToggleSideMenu() {
    setIsOpen((prevState) => !prevState);
  }

  const contextValue = useMemo(
    () => ({
      isOpen,
      handleToggleSideMenu,
    }),
    [],
  );

  return (
    <SideMenuContext.Provider value={contextValue}>
      {children}
    </SideMenuContext.Provider>
  );
}
