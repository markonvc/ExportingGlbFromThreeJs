import React, { useContext, useEffect, useRef } from "react";
import Store from "../store/Store";
import { ArContext } from "../context/ArContext";

function ModelViewer() {
  const { enterAr } = useContext(ArContext);
  const mv = useRef(null);

  useEffect(() => {
    if (mv.current !== null) {
      console.log(Store.modelHref);
      const mvElement = mv.current;
      console.log(mvElement);
      mvElement.addEventListener("load", () => {
        mvElement.activateAR();
      });
    }
  }, [enterAr]);

  return (
    <>
      {enterAr && (
        <model-viewer
          ref={mv}
          src={Store.modelHref}
          shadow-intensity="1"
          ar
          ar-modes="webxr, scene-viewer"
          camera-controls
          touch-action="pan-y"
          alt="A 3D model carousel"
        >
          <button slot="ar-button" id="ar-button">
            View in your space
          </button>

          <button id="ar-failure">AR is not tracking!</button>
        </model-viewer>
      )}
    </>
  );
}

export default ModelViewer;
