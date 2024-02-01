import { ReactNode } from "react";
// import { Canvas } from "@react-three/fiber";
// import SnakeGame from "./SnakeGame/SnakeGame";
import GameDetails from "./game-details";
import "../style.css"; // Импорт файла со стилями

// Остальной код остаётся таким же

function Wrapper({ children }: { children: ReactNode }) {
  return (
    <div className="wrapper">
      <GameDetails />
      {children}
    </div>
  );
}

export default Wrapper;
