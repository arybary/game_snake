import React from "react";
import SnakeHead from "../../snakeModel/snakeHead/SnakeHead";
import * as PRISMA from "../../snakeModel/snakeBody/SnakeBodyPrisma";
import * as SNAKE from "../../engine/snake/snake";
import SnakeTail from "../../snakeModel/snakeTail/snakeTail";
import setSnakePosition from "./setSnakePosition";
import setSnakeHeadProps from "./snakeHead/setSnakeHeadProps";
import setSnakeTailProps from "./snakeTail/setSnakeTailProps";
import setSnakeBodyProps from "./snakeBody/setSnakeBodyProps";
import { useSpring } from "@react-spring/web";
import { SnakeBodyCoord } from "../../types/snake";

const Snake: React.FC = () => {
  const snakeFrom: SnakeBodyCoord;
  const snakeTo: SnakeBodyCoord;
  SNAKE.getSnakeBodyCoord().forEach();
  const position = useSpring({});

  return (
    <group>
      {SNAKE.getSnakeBodyCoord().map((_: unknown, index: number) => {
        return (
          <group key={index * Math.random()} position={setSnakePosition(index)}>
            {index === 0 && <SnakeHead {...setSnakeHeadProps()} />}
            {index !== 0 && index !== SNAKE.getSnakeBodyCoord().length - 1 && (
              <>
                <PRISMA.SnakeBodyRightPrisma {...setSnakeBodyProps(index)[0]} />
                <PRISMA.SnakeBodyLeftPrisma {...setSnakeBodyProps(index)[1]} />
              </>
            )}
            {index === SNAKE.getSnakeBodyCoord().length - 1 && (
              <SnakeTail {...setSnakeTailProps(index)} />
            )}
          </group>
        );
      })}
    </group>
  );
};

export default Snake;
