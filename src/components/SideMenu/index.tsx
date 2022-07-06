import React, { useState } from "react";

interface ISideMenu {
  isVisible: boolean;
  links: [
    {
      name: string;
      link: string;
    }
  ];
}

export default function SideMenu({ isVisible, links }: ISideMenu) {
  return (
    <div
      data-testid="side-menu"
      className={isVisible ? "visible" : "hidden"}
      style={{ display: isVisible ? "" : "none" }}
    >
      {links.map(({ name, link }) => (
        <a href={link} data-testid="side-menu__links">
          {name}
        </a>
      ))}
    </div>
  );
}
