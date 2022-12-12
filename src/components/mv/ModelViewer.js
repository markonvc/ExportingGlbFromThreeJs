import React, { useContext, useEffect, useRef, useState } from "react";
import Store from "../../store/Store";
import { ArContext } from "../../context/ArContext";

import "./Mv.scss";

function ModelViewer() {
  const { enterAr } = useContext(ArContext);
  const mv = useRef(null);
  const ol = useRef(null);
  const [overlay, setOverlay] = useState(true);

  useEffect(() => {
    if (ol.current !== null) {
      const overlayElement = ol.current;
      if (overlay) {
        overlayElement.classList.remove("show");
      } else overlayElement.classList.add("show");
    }
  }, [overlay]);

  useEffect(() => {
    if (mv.current !== null) {
      const mvElement = mv.current;
      console.log(Store.modelHref);
      mvElement.addEventListener("load", () => {
        mvElement.activateAR();
        setOverlay(false);
        URL.revokeObjectURL(Store.modelHref);
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
          ar-modes="webxr quick-look"
        >
          <div ref={ol} className="overlay"></div>

          <button type="button" id="ar-error" className="hide">
            AR Error
          </button>

          <button
            onClick={() => setOverlay(true)}
            slot="exit-webxr-ar-button"
            id="exit-webxr-ar-button"
          >
            Back
          </button>

          <button id="ar-failure">AR is not tracking!</button>

          <div id="ar-prompt">
            <img
              src="https://noplacelike.s3-eu-west-1.amazonaws.com/PhoneHand.png"
              alt="hand"
            />
          </div>

          <div id="error" className="hide">
            AR is not supported on this device
          </div>
        </model-viewer>
      )}
    </>
  );
}

export default ModelViewer;
