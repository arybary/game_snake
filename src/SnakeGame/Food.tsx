interface FoodProps {
  position: { x: number; y: number };
}

const Food: React.FC<FoodProps> = ({ position }) => {
  console.log("f:", position);
  return (
    <mesh position={[position.x - 3.5, position.y - 3.5, 0.1]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
};

export default Food;
