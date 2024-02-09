import { useFrame } from "@react-three/fiber";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import setLevelEvent from "../../engine/events/setLevelEvent";
import { useState } from "react";
import { getTimerStep } from "../../engine/time/timerStepPerLevel";
import { getField } from "../../engine/field/fieldPerLevel";
import Fields from "./Field";
import Food from "./Food";
import { getFoodCoord } from "../../engine/food/food";

type GameProps = {
  start: number;
};

function Game(props: GameProps) {
  const { start } = props;
  const [lastUpdate, setLastUpdate] = useState(0);
  setLevelEvent(start);
  const gridSize = getField();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if ((elapsedTime - lastUpdate) * 1000 > getTimerStep()) {
      setLastUpdate(elapsedTime);
    }
  });
  return (
    <>
      <OrthographicCamera makeDefault position={[0, 0, 10]} zoom={100} />
      <ambientLight />
      <directionalLight position={[0, 0, 5]} intensity={1} />
      <OrbitControls />
      <Fields size={gridSize} />
      <Food position={getFoodCoord()} />
    </>
  );
}

export default Game;
