import { ReactNode } from "react";
import GameDetails from "./GameDetails";

function Wrapper({ children }: { children: ReactNode }) {
  return (
    <div className="wrapper">
      <GameDetails />
      {children}
    </div>
  );
}

export default Wrapper;
