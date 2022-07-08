import { SideMenuProvider } from '../../context/SideMenuContext';

import SideMenu from '../SideMenu';

export default function Header() {
  return (
    <SideMenuProvider>
      <div>
        <SideMenu
          links={[
            {
              name: 'Home',
              link: '/',
            },
            {
              name: 'SNKRS',
              link: '/',
            },
            {
              name: 'Shoes',
              link: '/',
            },
            {
              name: 'Jackets',
              link: '/',
            },
            {
              name: 'Skate',
              link: '/',
            },
          ]}
        />
      </div>
    </SideMenuProvider>
  );
}
