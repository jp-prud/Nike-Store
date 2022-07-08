import { useContext } from 'react';
import { useTransition } from 'react-spring';

import ReactDOM from 'react-dom';
import Overlay from '../../Overlay';
import { Container } from './styles';

import { SideMenuContext } from '../../../context/SideMenuContext';
import { ISideMenu } from '../sideMenu.types';

export default function Wrapper({ links }: ISideMenu) {
  const { isOpen, handleToggleSideMenu } = useContext(SideMenuContext);

  const transition = useTransition(isOpen, {
    from: {
      x: -1000,
      y: 0,
      opacity: 0,
    },
    enter: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    leave: {
      x: -1000,
      y: 0,
      opacity: 0,
    },
  });

  function createMenuLinks() {
    return links.map(({ name, link }) => (
      <a href={link} key={name} data-testid="side-menu__links">
        {name}
      </a>
    ));
  }

  return ReactDOM.createPortal(
    <>
      {transition((style: any, item: boolean) => (item ? (
        <>
          <Overlay isOpen={isOpen} onClose={handleToggleSideMenu} />

          <Container
            data-testid="side-menu"
            style={style}
            aria-hidden="true"
            aria-label="Side Menu"
          >
            <button
              type="button"
              onClick={() => {
                handleToggleSideMenu();
              }}
            >
              X
            </button>

            {createMenuLinks()}
          </Container>
        </>
      ) : (
        ''
      )))}
    </>,
    document.getElementById('side-menu__root') as HTMLElement,
  );
}
