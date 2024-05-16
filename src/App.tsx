import { Canvas } from "@react-three/fiber";
import Wrapper from "./Components/Wrapper/Wrapper";
import Game from "./Components/Game/Game";
import { useMenuStore } from "./store/menuStore";
import Menu from "./Components/Menu/Menu";

function App() {

  const { isVisible } = useMenuStore();
  return (
    <>
    <Wrapper>
      <Canvas>
        <Game />
      </Canvas>
    </Wrapper>
    {isVisible && <Menu />}
    </>
  );
}

export default App;
