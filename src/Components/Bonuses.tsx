/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import { useState, useEffect } from "react";
import { Vector3 } from "@react-three/fiber";
import { getField } from "../../engine/field/fieldPerLevel";
import { getFoodEaten } from "../../engine/events/snakeCatchesFoodEvent";
import { getBonusCoord, getCurrentBonus } from "../../engine/bonuses/bonus";
import { getBonusAvailability } from "../../engine/bonuses/bonusAvailableState";
import { getBonuses } from "../../engine/bonuses/bonusesPerLevel";

const Bonuses: React.FC = () => {
  const [bonusPosition, setBonusPosition] = useState<Vector3>([0, 0, 0]);
  useEffect(() => {
    const gridSize = getField();
    if (getBonusCoord()) {
      const bonusX = Math.round(getBonusCoord()[1] - gridSize / 2 - 1);
      const bonusY = Math.round(getBonusCoord()[0] - gridSize / 2 - 1);
      const currentBonusPosition: Vector3 = [bonusX, bonusY, 0];
      setBonusPosition(currentBonusPosition);
    }
  }, [getFoodEaten()]);
  return (
    <>
      {getBonusAvailability() && (
        <mesh position={bonusPosition}>
          <boxGeometry args={[1, 1, 1]} />
          {getBonuses()[getCurrentBonus()].type === "snakeBreaksObstacles" && (
            <meshStandardMaterial color="darkgreen" />
          )}
          {getBonuses()[getCurrentBonus()].type === "snakeStopsGrowing" && (
            <meshStandardMaterial color="green" />
          )}
          {getBonuses()[getCurrentBonus()].type === "snakeCrossesBorders" && (
            <meshStandardMaterial color="lime" />
          )}
          {getBonuses()[getCurrentBonus()].type === "addExtraTime" && (
            <meshStandardMaterial color="greenyellow" />
          )}
          {getBonuses()[getCurrentBonus()].type === "addExtraLives" && (
            <meshStandardMaterial color="darkolivegreen" />
          )}
          {getBonuses()[getCurrentBonus()].type === "addExtraScores" && (
            <meshStandardMaterial color="olive" />
          )}
          {getBonuses()[getCurrentBonus()].type === "doubleScoresFood" && (
            <meshStandardMaterial color="yellowgreen" />
          )}
        </mesh>
      )}
    </>
  );
};

export default Bonuses;
