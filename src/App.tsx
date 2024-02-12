import { Canvas } from "@react-three/fiber";
import Wrapper from "./Components/Wrapper";
import Game from "./Components/Game";

function App() {
  return (
    <Wrapper>
      <Canvas>
        <Game start={1} />
      </Canvas>
    </Wrapper>
  );
}

export default App;
