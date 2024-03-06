/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";
import { useState, useEffect } from "react";
import { useSpring } from "@react-spring/three";
import { useDrag } from "@use-gesture/react";
import { useCursor } from "@react-three/drei";
import { Vector3, useThree } from "@react-three/fiber";
import { getField } from "../engine/field/fieldPerLevel";

const ControlBall: React.FC = () => {
  const gridSize = getField();
  const { size } = useThree();

  const viewerWidth = window.innerWidth;
  const viewerHeight = window.innerHeight;
  let xCoord = 0;
  let yCoord = 0;
  let zCoord = 0;
  const controlUnit =
    (Math.min(size.width, size.height) * gridSize) /
    9 /
    Math.max(viewerWidth, viewerHeight);
  const [position, setPosition] = useState<Vector3>([xCoord, yCoord, zCoord]);
  const [windowSize, setWindowSize] = useState<number[]>([
    window.innerWidth,
    window.innerHeight,
  ]);
  const [clicked, setClicked] = useState(true);
  const springs = useSpring({
    deep: clicked ? 0 : -0.7,
  });
  const [hovered, hover] = useState(false);
  useCursor(hovered);
  const handleClick = () => {
    setClicked((s) => !s);
  };
  if (windowSize[1] > windowSize[0]) {
    xCoord = 0;
    yCoord = -0.66 * gridSize;
  } else {
    xCoord = 0.66 * gridSize;
    yCoord = 0;
  }
  useEffect(() => {
    setWindowSize([window.innerWidth, window.innerHeight]);
    zCoord = Number(springs.deep.animation.to);
    setPosition([xCoord, yCoord, zCoord]);
  }, [
    window.innerWidth,
    window.innerHeight,
    gridSize,
    xCoord,
    yCoord,
    zCoord,
    clicked,
  ]);

  return (
    <mesh
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      position={position}
      onClick={handleClick}
    >
      <sphereGeometry args={[controlUnit]} />
      <meshStandardMaterial color="#00ff00" />
    </mesh>
  );
};

export default ControlBall;
