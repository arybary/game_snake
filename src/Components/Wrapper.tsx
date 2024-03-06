// import React, { useRef, useEffect } from "react";
import { ReactNode } from "react";
import GameDetails from "./GameDetails";
import handleSwipeEvent from "../engine/events/handleSwipeEvent";

function Wrapper({ children }: { children: ReactNode }) {
  // const wrapperRef = useRef(null);

  // useEffect(() => {
  //   if (wrapperRef.current) {
  //     // Ваш код обработки
  //     console.log(wrapperRef.current);
  //   }
  // }, []);

  return (
    <div
      className="wrapper"
      onTouchStart={(e) => handleSwipeEvent(e)}
      onTouchMove={(e) => handleSwipeEvent(e)}
      //  ref={wrapperRef}
    >
      <GameDetails />
      {children}
    </div>
  );
}

export default Wrapper;
