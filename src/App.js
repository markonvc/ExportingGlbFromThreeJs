import { useEffect } from "react";
import Viewer3D from "./3d/SceneHelper";
import Menu from "./components/menu/Menu";
import OpenInAr from "./components/openInAr/OpenInAr";
import ModelViewer from "./components/mv/ModelViewer";

import "./App.css";

function App() {
  useEffect(() => {
    Viewer3D.createScene();
  }, []);

  return (
    <div>
      <OpenInAr />

      <div className="threeAndMenu">
        <div
          style={{ marginTop: "20px", background: "Lightgrey" }}
          className="webgl"
        ></div>

        <Menu />
      </div>

      <ModelViewer />
    </div>
  );
}

export default App;
