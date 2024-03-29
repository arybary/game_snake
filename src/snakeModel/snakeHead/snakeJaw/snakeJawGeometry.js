import * as THREE from "three";
import * as VERT from "./snakeJawVertices";
import { material2 } from "../../snakeMaterials";

function snakeJawGeometry() {
  const jawFaceABH = VERT.verticesA.concat(VERT.verticesH, VERT.verticesB);
  const jawFaceAHE = VERT.verticesA.concat(VERT.verticesE, VERT.verticesH);
  const jawFaceACF = VERT.verticesA.concat(VERT.verticesC, VERT.verticesF);
  const jawFaceAFE = VERT.verticesA.concat(VERT.verticesF, VERT.verticesE);
  const jawFaceABD = VERT.verticesA.concat(VERT.verticesB, VERT.verticesD);
  const jawFaceADC = VERT.verticesA.concat(VERT.verticesD, VERT.verticesC);
  const jawFaceBDG = VERT.verticesB.concat(VERT.verticesG, VERT.verticesD);
  const jawFaceBGH = VERT.verticesB.concat(VERT.verticesH, VERT.verticesG);
  const jawFaceCDG = VERT.verticesC.concat(VERT.verticesD, VERT.verticesG);
  const jawFaceCGF = VERT.verticesC.concat(VERT.verticesG, VERT.verticesF);
  const jawFaceGEH = VERT.verticesG.concat(VERT.verticesH, VERT.verticesE);
  const jawFaceGEF = VERT.verticesG.concat(VERT.verticesE, VERT.verticesF);
  const allJawFaces = jawFaceGEF.concat(
    jawFaceABH,
    jawFaceAHE,
    jawFaceACF,
    jawFaceAFE,
    jawFaceABD,
    jawFaceADC,
    jawFaceBDG,
    jawFaceBGH,
    jawFaceCDG,
    jawFaceCGF,
    jawFaceGEH
  );
  const jawVertices = new Float32Array(allJawFaces);
  const jawBufferAttribute = new THREE.BufferAttribute(jawVertices, 3);
  const jawGeometry = new THREE.BufferGeometry();
  jawGeometry.setAttribute("position", jawBufferAttribute);
  const jaw = new THREE.Mesh(jawGeometry, material2);
  jaw.position.set(1, 0, 1.5);

  return jaw;
}

export default snakeJawGeometry;
