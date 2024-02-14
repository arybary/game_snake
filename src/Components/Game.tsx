import { useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import setLevelEvent from "../../engine/events/setLevelEvent";
import { useState } from "react";
import { getTimerStep } from "../../engine/time/timerStepPerLevel";
import { getField } from "../../engine/field/fieldPerLevel";
import Fields from "./Field";
import Food from "./Food";

type GameProps = {
  start: number;
};

function Game(props: GameProps) {
  const { start } = props;
  const gridSize = getField();
  setLevelEvent(start);
  const gridSize = getField();
  const { size } = useThree();
  // Получаем размеры экрана

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if ((elapsedTime - TIMER.getTimerStep()) * 1000 > TIMER.getTimerStep()) {
      /*  Игровые механики  */
      TIMER.setTimerStep(elapsedTime);
    }
  });

  return (
    <>
      <OrthographicCamera
        makeDefault
        position={[0, 0, 10]}
        zoom={Math.min(size.width, size.height) / gridSize} // Используем минимальный размер экрана
      />
      <ambientLight />
      <directionalLight position={[0, 0, 5]} intensity={1} />
      <OrbitControls />
      <Fields size={gridSize} />
      <Food />
    </>
  );
}

export default Game;
