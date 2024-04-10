import { Vector3 } from "@react-three/fiber";

export type GeometryProps = {
  position: Vector3;
  "rotation-x": number;
  "rotation-y": number;
  "rotation-z": number;
  scale: number;
};

export type SnakePositionAnimationProps = {
  initialPosition: number[];
  finalPosition: number[];
};
