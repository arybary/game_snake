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
import getSnakeMoveDirection from "../../engine/snake/getSnakeMoveDirection";

function GamePlay() {
  const gridSize = getField();
  const { size, camera } = useThree();
  const snakeMoveDirection = getSnakeMoveDirection();
  const headPosition = useRef(new Vector3(0, 0, 0));
  const targetPosition = useRef(new Vector3(0, 0, 5)); // Уменьшили значение Z до 5

  const aspect = size.width / size.height;
  const cameraHeight = gridSize;
  const cameraWidth = cameraHeight * aspect;
  let ratioX = aspect < 1 ? 48 : 44;
  let ratioY = 43;
  const vertOffset = snakeMoveDirection[1] === "down" ? 5 : 0;
  if (Math.min(window.innerHeight, window.innerWidth) > 1400) {
    ratioY = snakeMoveDirection[1] === "down" ? 55 : 43;
  }
  if (
    Math.min(window.innerHeight, window.innerWidth) < 1000 &&
    Math.max(window.innerHeight, window.innerWidth) > 1000
  ) {
    ratioX = aspect < 1 ? 45 : 40;
    ratioY = 40;
  }
  if (Math.max(window.innerHeight, window.innerWidth) < 1000) {
    ratioX = aspect < 1 ? 45 : 17;
    ratioY = 32;
  }
  useFrame(() => {
    targetPosition.current.lerp(headPosition.current, 0.1);
    camera.position.set(
      Math.abs(Math.round(targetPosition.current.x)) <= ratioX
        ? targetPosition.current.x
        : camera.position.x,
      Math.abs(Math.round(targetPosition.current.y)) <= ratioY
        ? targetPosition.current.y - vertOffset
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
        zoom={Math.min(size.width, size.height) / gridSize}
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
