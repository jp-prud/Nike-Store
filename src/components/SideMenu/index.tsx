import { useContext } from 'react';

import { ISideMenu } from './sideMenu.types';
import { SideMenuContext } from '../../context/SideMenuContext';

import MenuIcon from '../../assets/icons/Menu.svg';
import Wrapper from './Wrapper';

export default function SideMenu({ links }: ISideMenu) {
  const { handleToggleSideMenu } = useContext(SideMenuContext);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          handleToggleSideMenu();
        }}
      >
        <img src={MenuIcon} alt="Toggle Side Menu" title="Toggle Side Menu" />
      </button>

      <Wrapper links={links} />
    </>
  );
}
