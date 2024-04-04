import React from "react";
import * as PRISMA from "../../snakeModel/snakeBody/SnakeBodyPrisma";
import * as SNAKE from "../../engine/snake/snake";
import { getField } from "../../engine/field/fieldPerLevel";
import { Vector3 } from "three";
import snakeBodyTransform from "./snakeBodyTransform";

const Snake: React.FC = () => {
  const gridSize = getField();
  return (
    <group>
      {SNAKE.getSnakeBodyCoord().map((_: unknown, index: number) => {
        const [pos, rot, scl] = snakeBodyTransform(index);
        return (
          <group
            key={index * Math.random()}
            position={[
              Math.round(
                SNAKE.getSnakeBodyCoord()[index][1] - gridSize / 2 - 1
              ),
              Math.round(
                SNAKE.getSnakeBodyCoord()[index][0] - gridSize / 2 - 1
              ),
              0,
            ]}
          >
            <PRISMA.SnakeBodyRightPrisma
              position={new Vector3(pos.right[0], pos.right[1], pos.right[2])}
              rotation-x={rot.right[0]}
              rotation-y={rot.right[1]}
              rotation-z={rot.right[2]}
              scale={scl.right[0]}
            />
            <PRISMA.SnakeBodyLeftPrisma
              position={new Vector3(pos.left[0], pos.left[1], pos.left[2])}
              rotation-x={rot.left[0]}
              rotation-y={rot.left[1]}
              rotation-z={rot.left[2]}
              scale={scl.left[0]}
            />
          </group>
        );
      })}
    </group>
  );
};

export default Snake;
