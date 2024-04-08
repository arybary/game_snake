import React from "react";
import SnakeHead from "../../snakeModel/snakeHead/SnakeHead";
import * as PRISMA from "../../snakeModel/snakeBody/SnakeBodyPrisma";
import * as SNAKE from "../../engine/snake/snake";
import { getField } from "../../engine/field/fieldPerLevel";
import { Vector3 } from "three";
import { snakeBodyTransform } from "./snakeBody/snakeBodyTransform";
import snakeHeadTransform from "./snakeHead/snakeHeadTransform";
import SnakeTail from "../../snakeModel/snakeTail/snakeTail";
import snakeTailTransform from "./snakeTail/snakeTailTransform";

const Snake: React.FC = () => {
  const gridSize = getField();
  return (
    <group>
      {SNAKE.getSnakeBodyCoord().map((_: unknown, index: number) => {
        const [bodyPos, bodyRot, bodyScl] = snakeBodyTransform(index);
        const [headPos, headRot, headScl] = snakeHeadTransform();
        const [tailPos, tailRot, tailScl] = snakeTailTransform(index);
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
            {index === 0 && (
              <SnakeHead
                position={new Vector3(headPos[0], headPos[1], headPos[2])}
                rotation-x={headRot[0]}
                rotation-y={headRot[1]}
                rotation-z={headRot[2]}
                scale={headScl[0]}
              />
            )}
            {index !== 0 && index !== SNAKE.getSnakeBodyCoord().length - 1 && (
              <>
                <PRISMA.SnakeBodyRightPrisma
                  position={
                    new Vector3(
                      bodyPos.right[0],
                      bodyPos.right[1],
                      bodyPos.right[2]
                    )
                  }
                  rotation-x={bodyRot.right[0]}
                  rotation-y={bodyRot.right[1]}
                  rotation-z={bodyRot.right[2]}
                  scale={bodyScl.right[0]}
                />
                <PRISMA.SnakeBodyLeftPrisma
                  position={
                    new Vector3(
                      bodyPos.left[0],
                      bodyPos.left[1],
                      bodyPos.left[2]
                    )
                  }
                  rotation-x={bodyRot.left[0]}
                  rotation-y={bodyRot.left[1]}
                  rotation-z={bodyRot.left[2]}
                  scale={bodyScl.left[0]}
                />
              </>
            )}
            {index === SNAKE.getSnakeBodyCoord().length - 1 && (
              <SnakeTail
                position={new Vector3(tailPos[0], tailPos[1], tailPos[2])}
                rotation-x={tailRot[0]}
                rotation-y={tailRot[1]}
                rotation-z={tailRot[2]}
                scale={tailScl[0]}
              />
            )}
          </group>
        );
      })}
    </group>
  );
};

export default Snake;
