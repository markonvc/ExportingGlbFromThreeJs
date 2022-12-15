import { useEffect, useRef } from "react";
import Viewer3D from "./3d/SceneHelper";
import Menu from "./components/menu/Menu";
import OpenInAr from "./components/openInAr/OpenInAr";
import ModelViewer from "./components/mv/ModelViewer";
import ModelViewerIos from "./components/mv/ModelViewerIos";

import "./App.css";

function App() {
  const webgl = useRef(null);

  function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
      return <ModelViewer />;
    }

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return <ModelViewerIos />;
    }

    return <ModelViewer />;
  }

  useEffect(() => {
    if (webgl !== null) {
      Viewer3D.createScene();
    }
  }, []);

  return (
    <div>
      <OpenInAr />

      <div className="threeAndMenu">
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
            background: "Lightgrey",
          }}
          className="webgl"
          ref={webgl}
        ></div>

        <Menu />
      </div>

      {getMobileOperatingSystem()}
    </div>
  );
}

export default App;
