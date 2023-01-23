import React, { useContext, useEffect, useRef, useState } from "react";
import Store from "../../store/Store";
import { ArContext } from "../../context/ArContext";
import "@google/model-viewer";
import "./Mv.scss";

function ModelViewer() {
  const { enterAr } = useContext(ArContext);
  const mv = useRef(null);

  useEffect(() => {
    if (mv.current !== null) {
      const mvElement = mv.current;

      mvElement.addEventListener("load", () => {
        try {
          mvElement.activateAR();
          setTimeout(() => {
            URL.revokeObjectURL(Store.modelHref);
          }, 1000);
        } catch (error) {}
      });
    }
  }, [enterAr]);

  return (
    <>
      {enterAr && (
        <model-viewer
          id="mviewer"
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
          ar-modes="quick-look"
        >
          <div className="overlay"></div>

          <button type="button" id="ar-error" className="hide">
            AR Error
          </button>

          <button id="ar-failure">AR is not tracking!</button>

          <div id="error" className="hide">
            AR is not supported on this device
          </div>
        </model-viewer>
      )}
    </>
  );
}

export default ModelViewer;
