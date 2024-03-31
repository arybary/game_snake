import * as THREE from "three";
import * as VERT from "./snakeScullVertices";
import { material1 } from "../../snakeMaterials";

function snakeCheeksGeometry() {
  const cheekFaceQAR = VERT.verticesQ.concat(VERT.verticesR, VERT.verticesA);
  const cheekFaceARC = VERT.verticesA.concat(VERT.verticesR, VERT.verticesC);
  const cheekFaceCRG = VERT.verticesC.concat(VERT.verticesR, VERT.verticesG);
  const cheekFaceGRS = VERT.verticesG.concat(VERT.verticesR, VERT.verticesS);
  const cheekFaceSGT = VERT.verticesS.concat(VERT.verticesT, VERT.verticesG);
  const cheekFaceTGH = VERT.verticesT.concat(VERT.verticesH, VERT.verticesG);
  const cheekFaceHTK = VERT.verticesH.concat(VERT.verticesT, VERT.verticesK);
  const cheekFaceKTO = VERT.verticesK.concat(VERT.verticesT, VERT.verticesO);
  const cheekFaceOTU = VERT.verticesO.concat(VERT.verticesT, VERT.verticesU);
  const cheekFaceZBY = VERT.verticesZ.concat(VERT.verticesB, VERT.verticesY);
  const cheekFaceBYD = VERT.verticesB.concat(VERT.verticesD, VERT.verticesY);
  const cheekFaceDYJ = VERT.verticesD.concat(VERT.verticesJ, VERT.verticesY);
  const cheekFaceJYX = VERT.verticesJ.concat(VERT.verticesX, VERT.verticesY);
  const cheekFaceXJW = VERT.verticesX.concat(VERT.verticesJ, VERT.verticesW);
  const cheekFaceWJI = VERT.verticesW.concat(VERT.verticesJ, VERT.verticesI);
  const cheekFaceIWL = VERT.verticesI.concat(VERT.verticesL, VERT.verticesW);
  const cheekFaceLWP = VERT.verticesL.concat(VERT.verticesP, VERT.verticesW);
  const cheekFacePWV = VERT.verticesP.concat(VERT.verticesV, VERT.verticesW);

  const allCheeksFaces = cheekFaceQAR.concat(
    cheekFaceARC,
    cheekFaceCRG,
    cheekFaceGRS,
    cheekFaceSGT,
    cheekFaceTGH,
    cheekFaceHTK,
    cheekFaceKTO,
    cheekFaceOTU,
    cheekFaceZBY,
    cheekFaceBYD,
    cheekFaceDYJ,
    cheekFaceJYX,
    cheekFaceXJW,
    cheekFaceWJI,
    cheekFaceIWL,
    cheekFaceLWP,
    cheekFacePWV
  );
  const cheeksVertices = new Float32Array(allCheeksFaces);
  const cheeksBufferAttribute = new THREE.BufferAttribute(cheeksVertices, 3);
  const cheeksGeometry = new THREE.BufferGeometry();
  cheeksGeometry.setAttribute("position", cheeksBufferAttribute);
  const cheeks = new THREE.Mesh(cheeksGeometry, material1);
  cheeks.position.set(1.5, 0, 1.5);

  return cheeks;
}

export default snakeCheeksGeometry;
