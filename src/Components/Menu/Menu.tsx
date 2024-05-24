import React from "react";
import { useMenuStore } from "../../store/menuStore";
import "./Menu.css";

const Menu: React.FC = () => {
  const { toggleModal, titleMenu } = useMenuStore();
  return (
    <div
      className="menu-game"
      onClick={() => {
        if (titleMenu.indexOf("Game over") !== -1) location.reload();
        else toggleModal();
      }}
    >
      <h2>{titleMenu}</h2>
    </div>
  );
};

export default Menu;
