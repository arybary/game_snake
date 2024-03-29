/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import { getFoodCoord } from "./../engine/food/food";
import { useState, useEffect } from "react";
import { getField } from "./../engine/field/fieldPerLevel";
import { Vector3 } from "@react-three/fiber";
import { getFoodEaten } from "./../engine/events/snakeCatchesFoodEvent";
import { howMuchIsLeftToEat } from "./../engine/food/currentFoodNumber";

const Food: React.FC = () => {
  const [foodPosition, setFoodPosition] = useState<Vector3>([0, 0, 0]);
  useEffect(() => {
    const updatedPosition = getFoodCoord();
    const gridSize = getField();
    const adjustedX = Math.round(updatedPosition[0] - gridSize / 2 - 1);
    const adjustedY = Math.round(updatedPosition[1] - gridSize / 2 - 1);
    const adjustedPosition: Vector3 = [adjustedX, adjustedY, 0];
    setFoodPosition(adjustedPosition);
  }, [getFoodEaten()]);
  return (
    <>
      {howMuchIsLeftToEat() !== 0 && (
        <mesh position={foodPosition}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="blue" />
        </mesh>
      )}
    </>
  );
};

export default Food;
