import { useEffect } from "react";
import Viewer3D from "./3d/sceneHelper";
import Menu from "./components/Menu";
import OpenInAr from "./components/OpenInAr";
import ModelViewer from "./components/ModelViewer";

function App() {
  useEffect(() => {
    Viewer3D.createScene();
  }, []);

  return (
    <div>
      <OpenInAr />

      <div style={{ display: "flex" }} className="App">
        <div
          style={{ marginTop: "40px", background: "Lightgrey" }}
          className="webgl"
        ></div>

        <Menu />
      </div>

      <ModelViewer />
    </div>
  );
}

export default App;
