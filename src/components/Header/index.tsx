import { SideMenuProvider } from '../../context/SideMenuContext';

import SideMenu from '../SideMenu';

import { Wrapper } from './styles';

import Logo from '../../assets/images/Logo.svg';
import Minicart from '../../assets/images/icons/Minicart.svg';

import links from './mocks/links';

export default function Header() {
  return (
    <SideMenuProvider>
      <Wrapper>
        <SideMenu links={links} />

        <a href="/">
          <img src={Logo} alt="Nike Store" title="Nike Store" />
        </a>

        <button type="button">
          <img src={Minicart} alt="Minicart" title="Minicart" />
        </button>
      </Wrapper>
    </SideMenuProvider>
  );
}
