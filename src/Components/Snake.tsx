import React, { useState, useEffect } from "react";
import * as SNAKE from "../../engine/snake/snake";
import { useThree } from "@react-three/fiber";
import { getFoodCoord } from "../../engine/food/food";
import { getField } from "../../engine/field/fieldPerLevel";

const Snake: React.FC = () => {
  const gridSize = getField();
  console.log(SNAKE.getSnakeBodyCoord());
  return (
    <group>
      {SNAKE.getSnakeBodyCoord().map((segment, index) => (
        <mesh
          key={index}
          position={[
            Math.round(SNAKE.getSnakeBodyCoord()[index][1] - gridSize / 2),
            Math.round(SNAKE.getSnakeBodyCoord()[index][0] - gridSize / 2),
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
