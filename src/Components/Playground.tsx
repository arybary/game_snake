import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import floorTexture from "../assets/floor.png";

type GroundProps = {
  size: number;
};

const Playground: React.FC<GroundProps> = ({ size }) => {
  const texture = useTexture(floorTexture);
  const { viewport } = useThree();
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  return (
    <mesh position={[0, 0, 0]} receiveShadow>
      <planeGeometry args={[viewport.width, viewport.height]} />
      <meshStandardMaterial
        color="gray"
        map={texture}
        map-repeat={[size, size]}
      />
    </mesh>
  );
};

export default Playground;
