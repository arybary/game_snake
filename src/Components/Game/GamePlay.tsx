import { useThree, useFrame } from "@react-three/fiber";
import { getField } from "../../engine/field/fieldPerLevel";
import { OrthographicCamera } from "@react-three/drei";
import Fields from "../Field/Field";
import { getObstacles } from "../../engine/obstacles/obstaclesPerLevel";
import { ObstaclesFix, ObstaclesX, ObstaclesY } from "../Obstacles/Obstacles";
import { getBonuses } from "../../engine/bonuses/bonusesPerLevel";
import Bonuses from "../Bonuses/Bonuses";
import Snake from "../Snake/Snake";
import Food from "../Food/Food";
import { useRef } from "react";
import { Vector3 } from "three";
import { getFoodCoord } from "../../engine/food/food";

function GamePlay() {
  const gridSize = getField();
  const { size, camera } = useThree();
  const headPosition = useRef(new Vector3(0, 0, 0));
  const targetPosition = useRef(new Vector3(0, 0, 5)); // Уменьшили значение Z до 5
  const lightPoint = getFoodCoord();
  const aspect = size.width / size.height;
  const cameraHeight = gridSize;
  const cameraWidth = cameraHeight * aspect;
  let ratioX = aspect < 1 ? 43 : 33;
  if (
    Math.min(window.innerHeight, window.innerWidth) < 1000 &&
    Math.max(window.innerHeight, window.innerWidth) > 1000
  )
    ratioX = aspect < 1 ? 41 : 31;

  if (Math.max(window.innerHeight, window.innerWidth) < 1000)
    ratioX = aspect < 1 ? 45 : 24;
  useFrame(() => {
    targetPosition.current.lerp(headPosition.current, 0.1);
    camera.position.set(
      Math.abs(Math.round(targetPosition.current.x)) <= ratioX
        ? targetPosition.current.x
        : camera.position.x,
      Math.abs(Math.round(targetPosition.current.y)) <= 38
        ? targetPosition.current.y
        : camera.position.y,
      3.5
    );
    camera.updateProjectionMatrix();
  });

  return (
    <mesh>
      <OrthographicCamera
        makeDefault
        left={-cameraWidth / 2}
        right={cameraWidth / 2}
        top={cameraHeight / 2}
        bottom={-cameraHeight / 2}
        far={100}
        near={-100}
        rotation={[0.7, 0, 0]}
        position={[0, 0, 1]}
        zoom={4}
      />
      {/*<ambientLight intensity={0.1} />*/}
      <directionalLight castShadow position={[0, 0, 5]} intensity={0.5} />
      <pointLight
        castShadow
        position={[
          Math.round(lightPoint[0] - gridSize / 2 - 1),
          Math.round(lightPoint[1] - gridSize / 2 - 1),
          70,
        ]}
        intensity={15000}
      />
      <Fields size={gridSize} />
      {getObstacles().length !== 0 && (
        <>
          <ObstaclesX />
          <ObstaclesY />
          <ObstaclesFix />
        </>
      )}
      {getBonuses().length !== 0 && <Bonuses />}
      <Snake
        onHeadPositionUpdate={(position) =>
          headPosition.current.set(...position)
        }
      />
      <Food />
    </mesh>
  );
}

export default GamePlay;
