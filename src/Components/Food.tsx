import * as React from "react";
// import { useTexture } from "@react-three/drei";
// import foodTexture from "../assets/food.png"; // Путь к текстуре еды

interface FoodProps {
  position: [number, number, number]; // Позиция еды на поле
}

const Food: React.FC<FoodProps> = ({ position }) => {
  // const texture = useTexture(foodTexture);
  const updatedPosition = [...position, 1];
  console.log(updatedPosition);

  return (
    <mesh position={updatedPosition}>
      <boxGeometry args={[1, 1, 1]} /> {/* Пример геометрии для еды */}
      {/* <meshStandardMaterial map={texture} /> Применение текстуры */}
    </mesh>
  );
};

export default Food;
