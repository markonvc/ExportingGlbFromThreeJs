import { useEffect } from "react";
import Viewer3D from "./3d/sceneHelper";
import Menu from "./components/Menu";

function App() {
  useEffect(() => {
    Viewer3D.createScene();
  }, []);

  return (
    <div style={{ display: "flex" }} className="App">
      <div
        style={{ marginTop: "40px", background: "Lightgrey" }}
        className="webgl"
      ></div>
      <Menu />
    </div>
  );
}

export default App;
