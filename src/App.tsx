import { Canvas } from "@react-three/fiber";
import Wrapper from "./Components/Wrapper";
import Game from "./Components/Game";

function App() {
  return (
    <Wrapper>
      <Canvas camera={{ fov: 75, near: 0.1, far: 20000, position: [0, 0, 5] }}>
        <Game start={1} />
      </Canvas>
    </Wrapper>
  );
}

export default App;
