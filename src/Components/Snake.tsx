import React from "react";
import * as SNAKE from "../../engine/snake/snake";
import { getField } from "../../engine/field/fieldPerLevel";

const Snake: React.FC = () => {
  const gridSize = getField();

  return (
    <group>
      {SNAKE.getSnakeBodyCoord().map((_, index) => (
        <mesh
          key={index}
          position={[
            Math.round(SNAKE.getSnakeBodyCoord()[index][1] - gridSize / 2 - 1),
            Math.round(SNAKE.getSnakeBodyCoord()[index][0] - gridSize / 2 - 1),
            0,
          ]}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={index === 0 ? "red" : "yellow"} />
        </mesh>
      ))}
    </group>
  );
};

export default Snake;
