import { Container } from "./styles";

interface ISideMenu {
  isOpen: boolean;
  links: ILinkChildren[];
}

type ILinkChildren = {
  name: string;
  link: string;
};

export default function SideMenu({ isOpen, links }: ISideMenu) {
  return (
    <Container
      data-testid="side-menu"
      isOpen={isOpen}
      aria-hidden="true"
      aria-label="Side Menu"
    >
      {links.map(({ name, link }) => (
        <a href={link} key={name} data-testid="side-menu__links">
          {name}
        </a>
      ))}
    </Container>
  );
}
