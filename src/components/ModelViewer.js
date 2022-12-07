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
          camera-controls="true"
          quick-look-browsers="safari chrome"
          touch-action="pan-y"
          alt="A 3D model carousel"
          ar
          ar-scale="auto"
          ar-placement="floor"
          ar-modes="webxr scene-viewer quick-look"
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
