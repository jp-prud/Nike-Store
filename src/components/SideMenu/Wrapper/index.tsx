import { useContext } from 'react';
import ReactDOM from 'react-dom';
import { useTransition } from 'react-spring';

import Overlay from '../../Overlay';

import { SideMenuContext } from '../../../context/SideMenuContext';
import { ISideMenu } from '../sideMenu.types';

import { Container, PagesList } from './styles';

import Close from '../../../assets/images/icons/Close.svg';

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

  function createWrapper(style: any) {
    return (
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
            <img src={Close} alt="Close Button" />
          </button>

          <PagesList>{createMenuLinks()}</PagesList>
        </Container>
      </>
    );
  }

  return ReactDOM.createPortal(
    <>
      {transition((style: any, item: boolean) =>
        item ? createWrapper(style) : '',
      )}
    </>,
    document.getElementById('side-menu__root') as HTMLElement,
  );
}
