<<<<<<< HEAD
=======

>>>>>>> 86110167ae5e2d67c0e396175cfd33e36a5ed431
import { GeometryProps } from "../../types/three";
import SnakeBodyGeometry from "./snakeBodyGeometry";

export function SnakeBodyRightPrisma(props: GeometryProps) {
  return (
    <mesh {...props}>
      <SnakeBodyGeometry />
      <meshStandardMaterial color={0x44abda} />
    </mesh>
  );
}

export function SnakeBodyLeftPrisma(props: GeometryProps) {
  return (
    <mesh {...props}>
      <SnakeBodyGeometry />
      <meshStandardMaterial color={0xfedc32} />
    </mesh>
  );
}
