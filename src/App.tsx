import { useState } from "React";

import SideMenu from "./components/SideMenu";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleSideMenu() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <div>
      <button type="button" onClick={handleToggleSideMenu}>
        Click
      </button>
      <SideMenu
        isOpen={isOpen}
        links={[
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
        ]}
      />
    </div>
  );
}

export default App;
