import { SnakeBodyGeometryProps } from "../../types/snake";
import SnakeBodyGeometry from "./snakeBodyGeometry";

export function SnakeBodyRightPrisma(props: SnakeBodyGeometryProps) {
  return (
    <mesh {...props}>
      <SnakeBodyGeometry />
      <meshStandardMaterial color={"red"} />
    </mesh>
  );
}

export function SnakeBodyLeftPrisma(props: SnakeBodyGeometryProps) {
  return (
    <mesh {...props}>
      <SnakeBodyGeometry />
      <meshStandardMaterial color={"white"} />
    </mesh>
  );
}
