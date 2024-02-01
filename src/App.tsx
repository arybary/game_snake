// import "./App.css";
import { Canvas } from "@react-three/fiber";
import SnakeGame from "./SnakeGame/SnakeGame";
import Wrapper from "./wrapper";

function App() {
  return (
    // <div id="container">
    <Wrapper>
      <Canvas camera={{ fov: 90 }}>
        <SnakeGame />
      </Canvas>
    </Wrapper>
    // </div>
  );
}

export default App;
