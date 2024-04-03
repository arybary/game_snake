// import * as THREE from "three";
// import * as VERT from "./snakeScullVertices";
// import { material1 } from "../../snakeMaterials";

function snakeUpperPalateGeometry() {
  // const upperPalateFaceQZR = VERT.verticesQ.concat(
  //   VERT.verticesZ,
  //   VERT.verticesR
  // );
  // const upperPalateFaceRZY = VERT.verticesR.concat(
  //   VERT.verticesZ,
  //   VERT.verticesY
  // );
  // const upperPalateFaceRYS = VERT.verticesR.concat(
  //   VERT.verticesY,
  //   VERT.verticesS
  // );
  // const upperPalateFaceSYX = VERT.verticesS.concat(
  //   VERT.verticesY,
  //   VERT.verticesX
  // );
  // const upperPalateFaceSXT = VERT.verticesS.concat(
  //   VERT.verticesX,
  //   VERT.verticesT
  // );
  // const upperPalateFaceTXW = VERT.verticesT.concat(
  //   VERT.verticesX,
  //   VERT.verticesW
  // );
  // const upperPalateFaceTWU = VERT.verticesT.concat(
  //   VERT.verticesW,
  //   VERT.verticesU
  // );
  // const upperPalateFaceUWV = VERT.verticesU.concat(
  //   VERT.verticesW,
  //   VERT.verticesV
  // );
  // const allUpperPalateFaces = upperPalateFaceQZR.concat(
  //   upperPalateFaceRZY,
  //   upperPalateFaceRYS,
  //   upperPalateFaceSYX,
  //   upperPalateFaceSXT,
  //   upperPalateFaceTXW,
  //   upperPalateFaceTWU,
  //   upperPalateFaceUWV
  // );
  // const upperPalatesVertices = new Float32Array(allUpperPalateFaces);
  // const upperPalatesBufferAttribute = new THREE.BufferAttribute(
  //   upperPalatesVertices,
  //   3
  // );
  // const upperPalatesGeometry = new THREE.BufferGeometry();
  // upperPalatesGeometry.setAttribute("position", upperPalatesBufferAttribute);
  // const upperPalates = new THREE.Mesh(upperPalatesGeometry, material1);
  // upperPalates.position.set(1.5, 0, 1.5);
  // return upperPalates;
}

export default snakeUpperPalateGeometry;
