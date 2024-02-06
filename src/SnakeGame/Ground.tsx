import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import floorTexture from "../assets/floor.png";

interface GroundProps {
  size: number;
}

const Ground: React.FC<GroundProps> = ({ size }) => {
  const texture = useTexture(floorTexture);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  return (
    <mesh position={[0, 0, 0]} receiveShadow>
      <planeGeometry args={[size, size]} />
      <meshStandardMaterial
        color="gray"
        // map={texture}
        // map-repeat={[size, size]}
      />
    </mesh>
  );
};

export default Ground;
