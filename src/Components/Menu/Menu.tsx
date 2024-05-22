import React from "react";
import { useMenuStore } from "../../store/menuStore";
import "./Menu.css";

const Menu: React.FC = () => {
  const { toggleModal, titleMenu } = useMenuStore();
  return (
    <div
      className="menu-game"
      onClick={() => {
        if (
          titleMenu === "Game over! Lives limit! Press OK to replay..." ||
          titleMenu === "Game over! No moves! Press OK to replay..." ||
          titleMenu === "Game over! Time limit! Press OK to replay..."
        ) {
          location.reload();
        }
        toggleModal();
      }}
    >
      <h2>{titleMenu}</h2>
    </div>
  );
};

export default Menu;
