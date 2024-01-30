
import "./App.css";
import { Canvas } from "@react-three/fiber";
import SnakeGame from "./SnakeGame/SnakeGame";

function App() {
  return (
    <div id="container">
      <Canvas camera={{ fov: 45 }}>     
       <SnakeGame />
      </Canvas>
    </div>
  );
}

export default App;
