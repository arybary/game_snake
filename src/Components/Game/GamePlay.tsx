import { useThree } from "@react-three/fiber";
import { getField } from "../../engine/field/fieldPerLevel";
import { OrthographicCamera } from "@react-three/drei";
import Fields from "../Field/Field";
import { getObstacles } from "../../engine/obstacles/obstaclesPerLevel";
import { ObstaclesFix, ObstaclesX, ObstaclesY } from "../Obstacles/Obstacles";
import { getBonuses } from "../../engine/bonuses/bonusesPerLevel";
import Bonuses from "../Bonuses/Bonuses";
import Snake from "../Snake/Snake";
import Food from "../Food/Food";
import { getAmountOfFood } from "../../engine/food/amountOfFoodPerLevel";

function GamePlay() {
  const gridSize = getField();
  const { size } = useThree();
  return (
    <mesh>
      {/* <OrbitControls /> */}
      <OrthographicCamera
        makeDefault
        left={-10}
        right={10}
        top={10}
        bottom={-10}
        far={100}
        near={-100}
        rotation={[0.7, 0, 0]}
        position={[0, 0, 1]}
        zoom={Math.min(size.width, size.height) / gridSize / getAmountOfFood()}
      />
      <ambientLight intensity={0.5} />
      <directionalLight castShadow position={[0, 0, 5]} intensity={1} />
      <Fields size={gridSize} />
      {getObstacles().length !== 0 && (
        <>
          <ObstaclesX />
          <ObstaclesY />
          <ObstaclesFix />
        </>
      )}
      {getBonuses().length !== 0 && <Bonuses />}
      <Snake />
      <Food />
    </mesh>
  );
}

export default GamePlay;
