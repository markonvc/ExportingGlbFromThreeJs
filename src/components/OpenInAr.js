import React, { useContext } from "react";
import ExportGlb from "../3d/3dUtils/ExportGlbHelper";
import Store from "../store/Store";
import { ArContext } from "../context/ArContext";

function OpenInAr() {
  const { setEnterAr } = useContext(ArContext);

  function exportGLBRunMv() {
    Store.modelHref = "/models/armChair.glb";
    setEnterAr(true);
    // ExportGlb.exportglbFromScene(Store.scene, setEnterAr);
  }

  return (
    <div>
      <button onClick={exportGLBRunMv}>Open in AR</button>
    </div>
  );
}

export default OpenInAr;
