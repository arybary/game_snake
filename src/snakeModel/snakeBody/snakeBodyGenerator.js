import * as THREE from "three";
import snakeBodyGeometry from "./snakeBodyGeometry";
import { material1, material2 } from "../snakeMaterials";

function snakeBodyGenerator(length) {
  const body = new THREE.Group();
  const groups = [];
  const boxes1 = [];
  const boxes2 = [];
  let distance = 1.4;

  for (let i = 0; i < length; i++) {
    boxes1.length = i + 1;
    boxes2.length = i + 1;
    groups.length = i + 1;
    boxes1[boxes1.length - 1] = new THREE.Mesh(snakeBodyGeometry(), material1);
    if (i % 2 === 0) {
      boxes1[boxes1.length - 1].rotateX(55);
      boxes1[boxes1.length - 1].rotateY(22);
      boxes1[boxes2.length - 1].rotateZ(22);
      boxes1[boxes1.length - 1].position.set(-0.1, 0, 0);
    } else {
      boxes1[boxes1.length - 1].rotateX(55);
      boxes1[boxes1.length - 1].position.set(-0.1, 0, 0);
    }
    boxes2[boxes2.length - 1] = new THREE.Mesh(snakeBodyGeometry(), material2);
    if (i % 2 === 0) {
      boxes2[boxes2.length - 1].rotateX(55);
      boxes2[boxes2.length - 1].rotateY(22);
      boxes2[boxes2.length - 1].position.set(0.1, 0, 0);
    } else {
      boxes2[boxes2.length - 1].rotateX(55);
      boxes2[boxes2.length - 1].rotateZ(22);
      boxes2[boxes2.length - 1].position.set(0.1, 0, 0);
    }
    groups[groups.length - 1] = new THREE.Group();
    groups[groups.length - 1].add(
      boxes1[boxes1.length - 1],
      boxes2[boxes2.length - 1]
    );
    groups[groups.length - 1].scale.setScalar(1 - i * 0.1);
    distance += 2 * (1 - i * 0.1) + 0.4;
    groups[groups.length - 1].position.x = distance;
    groups[groups.length - 1].rotateX(55);
    groups[groups.length - 1].position.z = 2 * (1 - i * 0.05);

    body.add(groups[groups.length - 1]);
  }

  return body;
}

export default snakeBodyGenerator;
