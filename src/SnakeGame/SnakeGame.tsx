import React, { useState } from "react";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import Snake from "./Snake"; // Ваш компонент Snake
import { gridSizeField } from "./constants";
import Food from "./Food";
import Ground from "./Ground";

const SnakeGame:React.FC= () => {
  const gridSize = gridSizeField;
  const [foodPosition, setFoodPosition] = useState(generateRandomPosition());

  // Генерация случайной позиции на поле
  function generateRandomPosition() {
    const x = Math.floor(Math.random() * 8);
    const y = Math.floor(Math.random() * 8);
    return { x, y };
  }

  // Обработка съедания еды
  const handleEat = () => {
    setFoodPosition(generateRandomPosition());
  };

  return (
    <>
      <OrthographicCamera makeDefault position={[0, 0, 10]} zoom={60} />
      <ambientLight />
      <directionalLight position={[0, 0, 5]} intensity={1} />
      <OrbitControls />

      <Ground size={gridSize} />
      <Food position={foodPosition} />
      <Snake onEat={handleEat} position={foodPosition} />
    </>
  );
};

export default SnakeGame;
