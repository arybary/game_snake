import { useFrame } from "@react-three/fiber";
import setLevelEvent from "../../engine/events/setLevelEvent";
import { useState } from "react";
import { getTimerStep } from "../../engine/time/timerStepPerLevel";
import Playground from "./Playground";
import { getField } from "../../engine/field/fieldPerLevel";
import * as DREI from "@react-three/drei";

type GameProps = {
  start: number;
};

function Game(props: GameProps) {
  const { start } = props;
  const gridSize = getField();
  const [lastUpdate, setLastUpdate] = useState(0);
  setLevelEvent(start);
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if ((elapsedTime - lastUpdate) * 1000 > getTimerStep()) {
      /*  Игровые механики  */
      setLastUpdate(elapsedTime);
    }
  });

  return (
    <>
      <DREI.OrthographicCamera makeDefault position={[0, 0, 10]} zoom={100} />
      <ambientLight />
      <directionalLight position={[0, 0, 5]} intensity={1} />
      <Playground size={gridSize} />
      {/* Вывод всех объектов игры */}
    </>
  );
}

export default Game;
