import { useFrame, useThree } from "@react-three/fiber";
import { OrthographicCamera } from "@react-three/drei";
import setLevelEvent from "../../engine/events/setLevelEvent";
import { useState } from "react";
import { getTimerStep } from "../../engine/time/timerStepPerLevel";
import { getField } from "../../engine/field/fieldPerLevel";
import Fields from "./Field";
import Food from "./Food";
import Snake from "./Snake";

type GameProps = {
  start: number;
};

function Game(props: GameProps) {
  const { start } = props;
  const gridSize = getField();
  setLevelEvent(start);
  const { size } = useThree();
  const [previousTime, setPreviousTime] = useState(0);
  // Получаем размеры экрана

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if ((elapsedTime - previousTime) * 1000 > getTimerStep()) {
      /*  Игровые механики  */
      setPreviousTime(elapsedTime);
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
      <Fields size={gridSize} />
      <Food />
      <Snake />
    </>
  );
}

export default Game;
