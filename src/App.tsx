import { Canvas } from "@react-three/fiber";
import Wrapper from "./Components/Wrapper/Wrapper";
import Game from "./Components/Game/Game";
import PlayPause from "./Components/Button/PlayPause";
// import GameInfo from "./Components/GameInfo/GameInfo";

function App() {
  return (
    <Wrapper>
      <Canvas>
        <Game />
      </Canvas>
      {/* <GameInfo /> */}
      <PlayPause />
      {/* <button onClick={() => console.log("Button clicked")}>Click me</button> */}
    </Wrapper>
  );
}

export default App;
