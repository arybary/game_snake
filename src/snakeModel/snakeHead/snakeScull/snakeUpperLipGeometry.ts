import * as THREE from "three";
import * as VERT from "./snakeScullVertices";
import { material1 } from "../../snakeMaterials";

function snakeUpperLipGeometry() {
  const upperLipFaceMNO = VERT.verticesM.concat(VERT.verticesO, VERT.verticesN);
  const upperLipFaceONP = VERT.verticesO.concat(VERT.verticesP, VERT.verticesN);
  const upperLipFaceOPU = VERT.verticesO.concat(VERT.verticesU, VERT.verticesP);
  const upperLipFaceUPV = VERT.verticesU.concat(VERT.verticesV, VERT.verticesP);
  const allUpperLipFaces = upperLipFaceOPU.concat(
    upperLipFaceMNO,
    upperLipFaceONP,
    upperLipFaceUPV
  );
  const upperLipVertices = new Float32Array(allUpperLipFaces);
  const upperLipBufferAttribute = new THREE.BufferAttribute(
    upperLipVertices,
    3
  );
  const upperLipGeometry = new THREE.BufferGeometry();
  upperLipGeometry.setAttribute("position", upperLipBufferAttribute);
  const upperLip = new THREE.Mesh(upperLipGeometry, material1);
  upperLip.position.set(1.5, 0, 1.5);

  return upperLip;
}

export default snakeUpperLipGeometry;
