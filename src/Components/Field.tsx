import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import floorTexture from "../assets/floor.png";

interface FieldsProps {
  size: number;
}

const Fields: React.FC<FieldsProps> = ({ size }) => {
  const texture = useTexture(floorTexture);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  console.log({ size });

  return (
    <group>
      <mesh position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[size, size]} />
        <meshStandardMaterial
          color="green"
          map={texture}
          map-repeat={[size, size]}
        />
      </mesh>
    </group>
  );
};

export default Fields;
