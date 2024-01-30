import React, { useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { gridSizeField, speedSnake } from "./constants";

interface SnakeProps {
  onEat: () => void;
  position: { x: number; y: number };
}

const Snake: React.FC<SnakeProps> = ({ onEat, position }) => {
  const gridSize = gridSizeField;
  const initialSnake = [{ x: gridSize / 2, y: gridSize / 2 }];
  const [snake, setSnake] = useState(initialSnake);
  const [direction, setDirection] = useState("right");
  const [lastUpdate, setLastUpdate] = useState(0);
   // Управление скоростью

  useEffect(() => {
    const head = snake[0];
    if (head.x === position.x && head.y === position.y) {
      setSnake((prevSnake) => {
        const newSnake = [...prevSnake];
        const tail = { ...newSnake[newSnake.length - 1] };
        newSnake.push(tail);
        return newSnake;
      });
      onEat();
    }
  }, [onEat, position, snake]);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    if (elapsedTime - lastUpdate > 1 / speedSnake) {
      setSnake((prevSnake) => {
        const newSnake = [...prevSnake];

        // Move the snake in the current direction
        const head = { ...newSnake[0] };
        switch (direction) {
          case "up":
            head.y = (head.y + 1) % gridSize;
            break;
          case "down":
            head.y = (head.y - 1 + gridSize) % gridSize;
            break;
          case "left":
            head.x = (head.x - 1 + gridSize) % gridSize;
            break;
          case "right":
            head.x = (head.x + 1) % gridSize;
            break;
          default:
            break;
        }

        newSnake.unshift(head);

        // Remove the tail only if the snake didn't eat food
        if (!(head.x === position.x && head.y === position.y)) {
          newSnake.pop();
        }

        return newSnake;
      });

      setLastUpdate(elapsedTime);
    }
  });

  // Обработка управления
  useEffect(() => {
    const handleKeyPress = (event: { key: unknown }) => {
      switch (event.key) {
        case "ArrowUp":
          setDirection("up");
          break;
        case "ArrowDown":
          setDirection("down");
          break;
        case "ArrowLeft":
          setDirection("left");
          break;
        case "ArrowRight":
          setDirection("right");
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <group>
      {snake.map((segment, index) => (
        <mesh
          key={index}
          position={[
            segment.x - gridSize / 2 + 0.5,
            segment.y - gridSize / 2 + 0.5,
            0.1,
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
