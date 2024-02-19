import { Canvas } from "@react-three/fiber";
import Wrapper from "./Components/Wrapper";
import Game from "./Components/Game";

function App() {
  return (
    <Wrapper>
      <Canvas>
        <Game />
      </Canvas>
    </Wrapper>
  );
}

export default App;
