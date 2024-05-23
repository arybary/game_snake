import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import { getTimerStep } from "../../engine/time/timerStepPerLevel";
import renderInfo from "../../engine/render/renderInfo";
import { checkTimerWorking } from "../../engine/time/isTimer";
import { setTimer } from "../../engine/time/timer";
import gameLoop from "./gameLoop";
import GamePlay from "./GamePlay";
import { useMenuStore } from "../../store/menuStore";
import keyboardEvents from "../../engine/events/keyboardEvents";

function Game() {
  const { isVisible } = useMenuStore();
  if (isVisible) document.removeEventListener("keydown", keyboardEvents);
  else document.addEventListener("keydown", keyboardEvents);
  renderInfo();
  const [previousTime, setPreviousTime] = useState(0);
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if ((elapsedTime - previousTime) * 1000 > getTimerStep()) {
      gameLoop();
      if (checkTimerWorking()) setTimer(getTimerStep());
      setPreviousTime(elapsedTime);
    }
  });

  return <GamePlay />;
}

export default Game;
