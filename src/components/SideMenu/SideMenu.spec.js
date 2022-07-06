import { render, screen } from "@testing-library/react";
import SideMenu from "./";

function renderSideMenu(isOpen = false, links = []) {
  render(<SideMenu isOpen={isOpen} links={links} />);
}

const childrenLinksMock = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "SNKRS",
    link: "/",
  },
  {
    name: "Shoes",
    link: "/",
  },
  {
    name: "Jackets",
    link: "/",
  },
  {
    name: "Skate",
    link: "/",
  },
];

describe("SideMenu", () => {
  it("should mount the component", () => {
    renderSideMenu();

    expect(screen.getByTestId("side-menu")).toBeInTheDocument();

    expect(screen.getByTestId("side-menu")).toHaveAttribute(
      "aria-hidden",
      "true"
    );
  });

  it("should visibility is hidden when the component is not visible", () => {
    renderSideMenu();

    expect(screen.getByTestId("side-menu")).toHaveStyle({
      visibility: "hidden",
      opacity: 0,
      transform: "translateX(-100%)",
    });
  });

  it("should visibility is visible when the component is visible", () => {
    renderSideMenu(true);

    expect(screen.getByTestId("side-menu")).toHaveStyle({
      visibility: "visible",
      opacity: 1,
      transform: "translateX(0)",
    });
  });

  it("should render children's links", () => {
    renderSideMenu(true, childrenLinksMock);

    expect(screen.getAllByTestId("side-menu__links")).toHaveLength(5);
  });
});
