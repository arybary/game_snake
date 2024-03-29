import * as THREE from "three";
import * as VERT from "./snakeEyesVertices";
import { material4 } from "../../snakeMaterials";

function snakeEyePupilGeometry() {
  const eyePupilGeometry = new THREE.SphereGeometry(VERT.eyePupilRadius);
  const eyePupilRight = new THREE.Mesh(eyePupilGeometry, material4);
  eyePupilRight.position.set(
    VERT.verticesA[0],
    VERT.verticesA[1],
    VERT.verticesA[2]
  );
  const eyePupilLeft = new THREE.Mesh(eyePupilGeometry, material4);
  eyePupilLeft.position.set(
    VERT.verticesB[0],
    VERT.verticesB[1],
    VERT.verticesB[2]
  );

  return { eyePupilRight, eyePupilLeft };
}

export default snakeEyePupilGeometry;
