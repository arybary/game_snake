import { useFrame } from "@react-three/fiber";
import setLevelEvent from "../../engine/events/setLevelEvent";
import * as TIMER from "../../engine/time/timerStepPerLevel";
import Playground from "./Playground";
import { getField } from "../../engine/field/fieldPerLevel";
import * as DREI from "@react-three/drei";
import Food from "./Food";

type GameProps = {
  start: number;
};

function Game(props: GameProps) {
  const { start } = props;
  const gridSize = getField();
  setLevelEvent(start);
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if ((elapsedTime - TIMER.getTimerStep()) * 1000 > TIMER.getTimerStep()) {
      /*  Игровые механики  */
      TIMER.setTimerStep(elapsedTime);
    }
  });

  return (
    <>
      <DREI.OrthographicCamera makeDefault position={[0, 0, 10]} zoom={100} />
      <ambientLight />
      <directionalLight position={[0, 0, 5]} intensity={1} />
      {/* Вывод всех объектов игры */}
      <Playground size={gridSize} />
      <Food />
    </>
  );
}

export default Game;
