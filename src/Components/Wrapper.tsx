// import React, { useRef, useEffect } from "react";
import { ReactNode } from "react";
import GameDetails from "./GameDetails";
import handleSwipeEvent from "../engine/events/handleSwipeEvent";

function Wrapper({ children }: { children: ReactNode }) {
  const handleTouch = (e: React.TouchEvent<HTMLDivElement>) => {
    handleSwipeEvent(e); // Вызываем пользовательскую функцию обработки свайпа
  };

  return (
    <div
      className="wrapper"
      onTouchStart={handleTouch}
      onTouchEnd={handleTouch}
    >
      <GameDetails />
      {children}
    </div>
  );
}

export default Wrapper;
