import React, { useEffect, useRef } from "react";
import CofigureModelPart from "../../3d/3dUtils/CofigureModelPart";
// import ColorHelper from "../../3d/3dUtils/ColorHelper";
import { dragStart, dragEnd } from "../../helpers/DragHelper";
import Store from "../../store/Store";

function Menu() {
  const dragImg = useRef(null);

  function addModel(modelName) {
    const scene = Store.scene;
    let add = true;

    const model = scene.children.find((item) => {
      return item.name === "corner" || item.name === "leftSeat";
    });

    console.log(model);

    scene.children.forEach((item) => {
      if (item.isGroup && item.name === modelName) {
        console.log(modelName);
        add = false;
      }
    });

    if (
      (model?.name === "corner" && modelName === "leftSeat") ||
      (model?.name === "leftSeat" && modelName === "corner")
    ) {
      add = false;
    }

    console.log(add);

    add && CofigureModelPart.loadModel(modelName, scene);
  }

  // function changeColor() {
  //   ColorHelper.changeColor();
  // }

  useEffect(() => {
    if (dragImg.current !== null) {
      console.log(dragImg.current);
      let dragElement = dragImg.current;
      dragElement.addEventListener("dragstart", dragStart);
      dragElement.addEventListener("dragend", dragEnd);
    }
  }, []);

  return (
    <div
      style={{
        width: "40%",
        marginTop: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
      }}
      className="menu"
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div className="menu-content">
          <div
            style={{
              marginTop: "10px",
              display: "flex",
              justifyContent: "center",
            }}
            className="button-container"
          >
            <button
              style={{ width: "100px", height: "100px" }}
              className="change-model"
              onClick={() => addModel("singleSeat")}
            >
              <img
                ref={dragImg}
                draggable="true"
                style={{ width: "100%" }}
                src="singleSeat.png"
                alt="model"
              ></img>
            </button>
          </div>

          <p style={{ textAlign: "center" }} className="add-model">
            Add single Seat
          </p>
        </div>
        <div className="menu-content">
          <div
            style={{
              marginTop: "10px",
              display: "flex",
              justifyContent: "center",
            }}
            className="button-container"
          >
            <button
              style={{ width: "100px", height: "100px" }}
              className="change-model"
              onClick={() => addModel("leftSeat")}
            >
              <img
                ref={dragImg}
                style={{ width: "100%" }}
                src="leftSeat.png"
                alt="model"
              ></img>
            </button>
          </div>

          <p style={{ textAlign: "center" }} className="add-model">
            Add Left Seat
          </p>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div className="menu-content">
          <div
            style={{
              marginTop: "10px",
              display: "flex",
              justifyContent: "center",
            }}
            className="button-container"
          >
            <button
              style={{ width: "100px", height: "100px" }}
              className="change-model"
              onClick={() => addModel("rightSeat")}
            >
              <img
                ref={dragImg}
                style={{ width: "100%" }}
                src="rightSeat.png"
                alt="model"
              ></img>
            </button>
          </div>

          <p style={{ textAlign: "center" }} className="add-model">
            Add Right Seat
          </p>
        </div>
        <div className="menu-content">
          <div
            style={{
              marginTop: "10px",
              display: "flex",
              justifyContent: "center",
            }}
            className="button-container"
          >
            <button
              style={{ width: "100px", height: "100px" }}
              className="change-model"
              onClick={() => addModel("corner")}
            >
              <img
                ref={dragImg}
                style={{ width: "100%" }}
                src="singleCorner.png"
                alt="model"
              ></img>
            </button>
          </div>

          <p style={{ textAlign: "center" }} className="add-model">
            Add corner
          </p>
        </div>
      </div>
    </div>
  );
}

export default Menu;
