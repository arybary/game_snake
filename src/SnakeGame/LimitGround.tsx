import { gridSizeField } from "./constants";

export const collisionSnakeGroundWall = (cord: number) => {
  const limitSizeGround = gridSizeField;
  if (cord === 0 || cord === limitSizeGround) {
    alert("game over");
    location.reload()
  }
};
