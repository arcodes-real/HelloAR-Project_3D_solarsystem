
import { Canvas } from '@react-three/fiber';
import MainContainer from "./MainContainer";
import { OrbitControls } from '@react-three/drei';

function App() {
  

  return (
    <>
      <Canvas 
        shadows
        camera={{fov: 100, near: 0.1, far: 1000, position: [16, 8.5, 19.5]}}>
      <color attach="background" args={["black"]} />  
      <MainContainer />
      <OrbitControls />
      </Canvas> 
    </>
  )
}

export default App;
