import { useEffect } from "react";
import Viewer3D from "./3d/sceneHelper";

function App() {
  useEffect(() => {
    Viewer3D.createScene()
  }, []);

  return (
    <div className="App">
      <div className="webgl"></div>
    </div>
  );
}

export default App;
