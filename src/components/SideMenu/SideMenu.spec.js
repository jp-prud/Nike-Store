import { render, screen } from "@testing-library/react";
import SideMenu from "./";

function renderSideMenu(isVisible = false, links = []) {
  render(<SideMenu isVisible={isVisible} links={links} />);
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
  });

  it("should visibility is hidden when the component is not visible", () => {
    renderSideMenu();

    expect(screen.getByTestId("side-menu")).toHaveClass("hidden");
    expect(screen.getByTestId("side-menu")).toHaveStyle("display: none");
  });

  it("should visibility is visible when the component is visible", () => {
    renderSideMenu(true);

    expect(screen.getByTestId("side-menu")).toHaveClass("visible");
    expect(screen.getByTestId("side-menu")).toHaveStyle("display: block");
  });

  it("should render children's links", () => {
    renderSideMenu(true, childrenLinksMock);

    expect(screen.getAllByTestId("side-menu__links")).toHaveLength(5);
  });
});
