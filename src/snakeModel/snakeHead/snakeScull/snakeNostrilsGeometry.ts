import * as THREE from "three";
import * as VERT from "./snakeScullVertices";
import { material2 } from "../../snakeMaterials";

function snakeNostrilsGeometry() {
  const nostrilsFaceKMO = VERT.verticesK.concat(VERT.verticesO, VERT.verticesM);
  const nostrilsFaceLNP = VERT.verticesL.concat(VERT.verticesN, VERT.verticesP);
  const allNostrilsFaces = nostrilsFaceKMO.concat(nostrilsFaceLNP);
  const nostrilsVertices = new Float32Array(allNostrilsFaces);
  const nostrilsBufferAttribute = new THREE.BufferAttribute(
    nostrilsVertices,
    3
  );
  const nostrilsGeometry = new THREE.BufferGeometry();
  nostrilsGeometry.setAttribute("position", nostrilsBufferAttribute);
  const nostrils = new THREE.Mesh(nostrilsGeometry, material2);
  nostrils.position.set(1.5, 0, 1.5);

  return nostrils;
}

export default snakeNostrilsGeometry;
