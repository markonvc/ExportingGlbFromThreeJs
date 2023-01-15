import React, { useEffect, useRef } from "react";
import CofigureModelPart from "../../3d/3dUtils/ConfigureModelPart";
// import ColorHelper from "../../3d/3dUtils/ColorHelper";
import { dragStart } from "../../helpers/DragHelper";
import pickingOrder from "../../helpers/ModelPickingOrderHelper";
import Store from "../../store/Store";
import "./Menu.scss";

function Menu() {
  const dragSingleSeat = useRef(null);
  const dragleftSeat = useRef(null);
  const dragRightSeat = useRef(null);
  const dragCorner = useRef(null);

  function addModel(modelName) {
    const scene = Store.scene;
    let leftSideModel = null

    scene.children.forEach(item => {
      if (modelName === "singleSeat" && item.name === "singleSeat") {
        leftSideModel = "singleSeatleftSide";
      } else if (modelName === "leftSeat" && item.name === "cornerSeat") {
        leftSideModel = "leftSeatleftSide";
      }
    })

    console.log(leftSideModel);
    pickingOrder(modelName);
    leftSideModel ? CofigureModelPart.loadModel(leftSideModel, scene) : CofigureModelPart.loadModel(modelName, scene)

  }

  // function changeColor() {
  //   ColorHelper.changeColor();
  // }

  useEffect(() => {
    if (
      dragSingleSeat.current !== null &&
      dragleftSeat.current !== null &&
      dragRightSeat.current !== null &&
      dragCorner.current !== null
    ) {
      let dragImages = [];
      dragImages.push(dragSingleSeat.current);
      dragImages.push(dragleftSeat.current);
      dragImages.push(dragRightSeat.current);
      dragImages.push(dragCorner.current);

      dragImages.forEach((img) => {
        img.addEventListener("dragstart", (e) => {
          setTimeout(() => {
            e.target.style.opacity = "0.1";
            e.target.style.setProperty("cursor", "grab", "important");
          }, 0);

          dragStart(img.id);
        });
      });

      dragImages.forEach((img) => {
        img.addEventListener("dragend", (e) => {
          setTimeout(() => {
            e.target.style.opacity = "1";
            e.target.style.cursor = "grab";
          }, 0);
        });
      });
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
              id="singleSeat"
              ref={dragSingleSeat}
              style={{
                width: "100px",
                height: "100px",
                border: "none",
                padding: "0",
              }}
              className="change-model"
              onClick={() => addModel("singleSeat")}
            >
              <img
                className="imgModel"
                draggable="true"
                style={{ width: "100%", height: "100%", cursor: "pointer" }}
                src="singleSeat.png"
                alt="model"
              ></img>
            </button>
          </div>

          <p style={{ textAlign: "center" }} className="add-model">
            Add Single Seat
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
              id="leftSeat"
              ref={dragleftSeat}
              style={{
                width: "100px",
                height: "100px",
                border: "none",
                padding: "0",
              }}
              className="change-model"
              onClick={() => addModel("leftSeat")}
            >
              <img
                className="imgModel"
                draggable="true"
                style={{ width: "100%", height: "100%", cursor: "pointer" }}
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
              id="rightSeat"
              ref={dragRightSeat}
              style={{
                width: "100px",
                height: "100px",
                border: "none",
                padding: "0",
              }}
              className="change-model"
              onClick={() => addModel("rightSeat")}
            >
              <img
                className="imgModel"
                draggable="true"
                style={{ width: "100%", height: "100%", cursor: "pointer" }}
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
              id="cornerSeat"
              ref={dragCorner}
              style={{
                width: "100px",
                height: "100px",
                border: "none",
                padding: "0",
              }}
              className="change-model"
              onClick={() => addModel("cornerSeat")}
            >
              <img
                className="imgModel"
                draggable="true"
                style={{ width: "100%", height: "100%", cursor: "pointer" }}
                src="singleCorner.png"
                alt="model"
              ></img>
            </button>
          </div>

          <p style={{ textAlign: "center" }} className="add-model">
            Add Corner
          </p>
        </div>
      </div>
    </div>
  );
}

export default Menu;
