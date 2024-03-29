import * as THREE from "three";
import snakeScull from "./snakeScull/snakeScull";
import snakeEyes from "./snakeEyes/snakeEyes";
import snakeJawGeometry from "./snakeJaw/snakeJawGeometry";

function snakeHead() {
  const head = new THREE.Group();

  head.add(snakeScull());
  head.add(snakeEyes());
  head.add(snakeJawGeometry());
  head.position.set(0, 0, -0.15);

  return head;
}

export default snakeHead;
