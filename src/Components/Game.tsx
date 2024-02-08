import { useFrame } from "@react-three/fiber";
import setLevelEvent from "../../engine/events/setLevelEvent";
import { useState } from "react";
import { getTimerStep } from "../../engine/time/timerStepPerLevel";

type GameProps = {
  start: number;
};

function Game(props: GameProps) {
  const { start } = props;
  const [lastUpdate, setLastUpdate] = useState(0);
  setLevelEvent(start);
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if ((elapsedTime - lastUpdate) * 1000 > getTimerStep()) {
      setLastUpdate(elapsedTime);
    }
  });
  return <></>;
}

export default Game;
