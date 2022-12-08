import React, { useContext, useEffect, useRef } from "react";
import Store from "../../store/Store";
import { ArContext } from "../../context/ArContext";

import "./Mv.scss";

function ModelViewer() {
  const { enterAr } = useContext(ArContext);
  const mv = useRef(null);

  useEffect(() => {
    if (mv.current !== null) {
      console.log(Store.modelHref);
      const mvElement = mv.current;
      mvElement.addEventListener("load", () => {
        mvElement.activateAR();
        setTimeout(() => {
          mvElement.style.visibility = "visible";
        }, 2000);

        URL.revokeObjectURL(Store.modelHref);
      });

      mvElement.addEventListener("error", (event) => {
        if (event.detail.type === "loadfailure") {
          document.getElementById("ar-error").click();
          alert("error in ar");
        }
      });

      mvElement.addEventListener("ar-status", (event) => {
        // alert("change in ar-status");
      });

      mvElement.addEventListener("ar-tracking", (event) => {
        // alert("change in ar-tracking");
      });
    }
  }, [enterAr]);

  return (
    <>
      {enterAr && (
        <model-viewer
          id="mviewer"
          ref={mv}
          src="models/armChair.glb"
          shadow-intensity="1"
          camera-controls="true"
          quick-look-browsers="safari chrome"
          touch-action="pan-y"
          alt="A 3D model carousel"
          ar
          ar-scale="auto"
          ar-placement="floor"
          ar-modes="scene-viewer quick-look"
        >
          <button type="button" id="ar-error" className="hide">
            AR Error
          </button>

          <button slot="exit-webxr-ar-button" id="exit-webxr-ar-button">
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
