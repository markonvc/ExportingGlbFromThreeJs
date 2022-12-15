import React, { useContext } from "react";
import ExportGlb from "../../3d/3dUtils/ExportGlbHelper";
import { ArContext } from "../../context/ArContext";

function OpenInAr() {
  const { enterAr, setEnterAr } = useContext(ArContext);

  function exportGLBRunMv() {
    if (enterAr) {
      setEnterAr(!enterAr);
      ExportGlb.exportglbFromScene(setEnterAr);
    } else ExportGlb.exportglbFromScene(setEnterAr);
  }

  return (
    <div
      style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}
    >
      <button onClick={exportGLBRunMv}>Open in AR</button>
    </div>
  );
}

export default OpenInAr;
