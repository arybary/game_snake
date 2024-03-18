/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";
import { useState, useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { getField } from "../engine/field/fieldPerLevel";

const ControlPanel: React.FC = () => {
  const gridSize = getField();
  const { size } = useThree();
  const viewerWidth = window.innerWidth;
  const viewerHeight = window.innerHeight;
  let xCoord = 0;
  let yCoord = 0;
  const zCoord = 0;
  const controlUnit =
    (Math.min(size.width, size.height) * gridSize) /
    9 /
    Math.max(viewerWidth, viewerHeight);

  const [windowSize, setWindowSize] = useState<number[]>([
    window.innerWidth,
    window.innerHeight,
  ]);
  if (windowSize[1] > windowSize[0]) {
    xCoord = 0;
    yCoord = -0.66 * gridSize;
  } else {
    xCoord = 0.66 * gridSize;
    yCoord = 0;
  }

  useEffect(() => {
    setWindowSize([window.innerWidth, window.innerHeight]);
  }, [window.innerWidth, window.innerHeight, gridSize]);

  return (
    <>
      <mesh position={[xCoord, yCoord + controlUnit * 1.5, zCoord]}>
        <circleGeometry args={[controlUnit]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[xCoord, yCoord, zCoord]}>
        <planeGeometry args={[controlUnit * 2, controlUnit * 3]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[xCoord, yCoord - controlUnit * 1.5, zCoord]}>
        <circleGeometry args={[controlUnit]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[xCoord - controlUnit * 1.5, yCoord, zCoord]}>
        <circleGeometry args={[controlUnit]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[xCoord, yCoord, zCoord]}>
        <planeGeometry args={[controlUnit * 3, controlUnit * 2]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[xCoord + controlUnit * 1.5, yCoord, zCoord]}>
        <circleGeometry args={[controlUnit]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
    </>
  );
};

export default ControlPanel;
