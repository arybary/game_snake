import React from "react";
import * as SNAKE from "./../engine/snake/snake";
import { getField } from "./../engine/field/fieldPerLevel";

const Snake: React.FC = () => {
  const gridSize = getField();
  // const coord = new Float32Array([10, -10, 10, -10, 10, 10, 10, 10, -10]);
  return (
    <group>
      {SNAKE.getSnakeBodyCoord().map((_: unknown, index: number) => (
        <mesh
          key={index}
          position={[
            Math.round(SNAKE.getSnakeBodyCoord()[index][1] - gridSize / 2 - 1),
            Math.round(SNAKE.getSnakeBodyCoord()[index][0] - gridSize / 2 - 1),
            0,
          ]}
        >
          <boxGeometry args={[1, 1, 1]} />
          {/* <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={coord.length / 3}
              array={coord}
              itemSize={3}
            />
          </bufferGeometry> */}
          <meshStandardMaterial color={index === 0 ? "red" : "white"} />
        </mesh>
      ))}
    </group>
  );
};

export default Snake;
