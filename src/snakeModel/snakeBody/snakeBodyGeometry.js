import * as THREE from "three";
import * as VERT from "./snakeBodyVertices";

function snakeBodyGeometry() {
  const faceABC = VERT.verticesA.concat(VERT.verticesC, VERT.verticesB);
  const faceDEF = VERT.verticesD.concat(VERT.verticesE, VERT.verticesF);
  const faceADF = VERT.verticesA.concat(VERT.verticesD, VERT.verticesF);
  const faceACF = VERT.verticesA.concat(VERT.verticesF, VERT.verticesC);
  const faceCBE = VERT.verticesC.concat(VERT.verticesE, VERT.verticesB);
  const faceCFE = VERT.verticesC.concat(VERT.verticesF, VERT.verticesE);
  const faceABD = VERT.verticesA.concat(VERT.verticesB, VERT.verticesD);
  const faceEBD = VERT.verticesE.concat(VERT.verticesD, VERT.verticesB);
  const allFaces = faceABC.concat(
    faceDEF,
    faceADF,
    faceACF,
    faceCBE,
    faceCFE,
    faceABD,
    faceEBD
  );
  const vertices = new Float32Array(allFaces);
  const bufferAttribute = new THREE.BufferAttribute(vertices, 3);
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", bufferAttribute);

  return geometry;
}

export default snakeBodyGeometry;
