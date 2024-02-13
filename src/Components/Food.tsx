import { getField } from "../../engine/field/fieldPerLevel";
import { useThree } from "@react-three/fiber";
import { getFoodCoord } from "../../engine/food/food";

const Food: React.FC = () => {
  const { viewport } = useThree();
  const cellWidth = (viewport.width * 0.8) / getField();
  let currentFoodCoord: number[] = getFoodCoord();
  currentFoodCoord = currentFoodCoord.map(
    (coord) => coord - Math.floor(getField() / 2 + 1)
  );

  return (
    <mesh
      position={[
        (cellWidth * currentFoodCoord[0]) / 0.801,
        (cellWidth * currentFoodCoord[1]) / 0.83,
        0,
      ]}
    >
      <boxGeometry args={[cellWidth, cellWidth, cellWidth]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
};

export default Food;
