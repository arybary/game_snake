import { useFrame, useThree } from "@react-three/fiber";
import { OrthographicCamera } from "@react-three/drei";
import { useState } from "react";
import { getTimerStep } from "../../engine/time/timerStepPerLevel";
import { getField } from "../../engine/field/fieldPerLevel";
import Fields from "./Field";
import Food from "./Food";
import Snake from "./Snake";
import moveSnake from "../../engine/snake/moveSnake";
import snakeCatchesFoodEvent from "../../engine/events/snakeCatchesFoodEvent";

function Game() {
  const gridSize = getField();
  const { size } = useThree();
  const [previousTime, setPreviousTime] = useState(0);
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if ((elapsedTime - previousTime) * 1000 > getTimerStep()) {
      /*  Игровые механики  */
      moveSnake();
      snakeCatchesFoodEvent();
      /* ------------------- */
      setPreviousTime(elapsedTime);
    }
  });

  return (
    <>
      <OrthographicCamera
        makeDefault
        position={[0, 0, 10]}
        zoom={Math.min(size.width, size.height) / gridSize}
      />
      <ambientLight />
      <directionalLight position={[0, 0, 5]} intensity={1} />
      <Fields size={gridSize} />
      <Food />
      <Snake />
    </>
  );
}

export default Game;
