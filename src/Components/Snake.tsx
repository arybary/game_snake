import React from "react";
import * as PRISMA from "../snakeModel/snakeBody/SnakeBodyPrisma";
import * as SNAKE from "./../engine/snake/snake";
import { getField } from "./../engine/field/fieldPerLevel";
import { Vector3 } from "three";
import findLastMoveDirection from "../engine/protocol/findLastMoveDirection";

const Snake: React.FC = () => {
  const gridSize = getField();
  let diffX = 0;
  let diffY = 0;
  return (
    <group>
      {SNAKE.getSnakeBodyCoord().map((_: unknown, index: number) => {
        if (
          index === 0 &&
          (findLastMoveDirection().value !== "+" ||
            findLastMoveDirection().value !== "-")
        ) {
          diffX =
            findLastMoveDirection().name === "X"
              ? 0
              : +findLastMoveDirection().value * -1;
          diffY =
            findLastMoveDirection().name === "Y"
              ? 0
              : +findLastMoveDirection().value * -1;
        }
        if (index !== 0) {
          diffX =
            SNAKE.getSnakeBodyCoord()[index][1] -
            SNAKE.getSnakeBodyCoord()[index - 1][1];
          diffY =
            SNAKE.getSnakeBodyCoord()[index][0] -
            SNAKE.getSnakeBodyCoord()[index - 1][0];
        }
        const pos =
          diffX === 0 && diffY === -1
            ? {
                right: index % 2 === 0 ? [0.05, 0, 0] : [-0.05, 0, 0],
                left: index % 2 === 0 ? [-0.05, 0, 0] : [0.05, 0, 0],
              }
            : diffX === 0 && diffY === 1
            ? {
                right: index % 2 === 0 ? [-0.05, 0, 0] : [0.05, 0, 0],
                left: index % 2 === 0 ? [0.05, 0, 0] : [-0.05, 0, 0],
              }
            : diffX === -1 && diffY === 0
            ? {
                right: index % 2 === 0 ? [0.05, 0, 0] : [0.05, 0, 0],
                left: index % 2 === 0 ? [-0.05, 0, 0] : [-0.05, 0, 0],
              }
            : diffX === 1 && diffY === 0
            ? {
                right: index % 2 === 0 ? [-0.05, 0, 0] : [-0.05, 0, 0],
                left: index % 2 === 0 ? [0.05, 0, 0] : [0.05, 0, 0],
              }
            : {
                right: [0.05, 0, 0],
                left: [-0.05, 0, 0],
              };
        const rot =
          diffX === 0 && diffY === -1
            ? {
                right: index % 2 === 0 ? [22, 0, 22] : [0, 0, 0],
                left: index % 2 === 0 ? [22, 0, 0] : [0, 0, 22],
              }
            : diffX === 0 && diffY === 1
            ? {
                right: index % 2 === 0 ? [22, 0, 0] : [0, 0, 22],
                left: index % 2 === 0 ? [22, 0, 22] : [0, 0, 0],
              }
            : diffX === -1 && diffY === 0
            ? {
                right: index % 2 === 0 ? [22, 22, 0] : [22, 0, 22],
                left: index % 2 === 0 ? [22, 22, 22] : [22, 0, 0],
              }
            : diffX === 1 && diffY === 0
            ? {
                right: index % 2 === 0 ? [22, 22, 22] : [22, 0, 0],
                left: index % 2 === 0 ? [22, 22, 0] : [0, 22, 0],
              }
            : {
                right: [22, 0, 22],
                left: [22, 0, 0],
              };
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
              scale={1}
            />
            <PRISMA.SnakeBodyLeftPrisma
              position={new Vector3(pos.left[0], pos.left[1], pos.left[2])}
              rotation-x={rot.left[0]}
              rotation-y={rot.left[1]}
              rotation-z={rot.left[2]}
              scale={1}
            />
          </group>
        );
      })}
    </group>
  );
};

export default Snake;
