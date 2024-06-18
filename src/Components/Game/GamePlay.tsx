import { useThree, useFrame } from "@react-three/fiber";
import { getField } from "../../engine/field/fieldPerLevel";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import Fields from "../Field/Field";
import { getObstacles } from "../../engine/obstacles/obstaclesPerLevel";
import { ObstaclesFix, ObstaclesX, ObstaclesY } from "../Obstacles/Obstacles";
import { getBonuses } from "../../engine/bonuses/bonusesPerLevel";
import Bonuses from "../Bonuses/Bonuses";
import Snake from "../Snake/Snake";
import Food from "../Food/Food";

import { getAmountOfFood } from "../../engine/food/amountOfFoodPerLevel";

import { useRef } from "react";
import { Vector3 } from "three";


function GamePlay() {
  const gridSize = getField();
  const { size, camera } = useThree();
  const headPosition = useRef(new Vector3(0, 0, 0));
  const targetPosition = useRef(new Vector3(0, 0, 5)); // Уменьшили значение Z до 5

  useFrame(() => {
    targetPosition.current.lerp(headPosition.current, 0.1);
    camera.position.set(targetPosition.current.x, targetPosition.current.y, 3.5);
    camera.updateProjectionMatrix();
  });

  return (
    <mesh>

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
      <Snake onHeadPositionUpdate={(position) => headPosition.current.set(...position)} />
      <Food />
    </mesh>
  );
}

export default GamePlay;
