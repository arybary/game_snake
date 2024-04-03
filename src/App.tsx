import { Canvas } from "@react-three/fiber";
import Wrapper from "./Components/Wrapper";
import Game from "./Components/Game";
// import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <Wrapper>
      <Canvas>
        {/* <OrbitControls /> */}
        <Game />
      </Canvas>
    </Wrapper>
  );
}

export default App;
