import React, { useEffect, useRef } from "react";
import CofigureModelPart from "../../3d/3dUtils/CofigureModelPart";
// import ColorHelper from "../../3d/3dUtils/ColorHelper";
import { dragStart, dragEnd } from "../../helpers/DragHelper";
import Store from "../../store/Store";
import "./Menu.scss"

function Menu() {
  const dragSingleSeat = useRef(null);
  const dragleftSeat = useRef(null);
  const dragRightSeat = useRef(null);
  const dragCorner = useRef(null);

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
    if (dragSingleSeat.current !== null && dragleftSeat.current
      !== null && dragleftSeat !== null && dragCorner !== null) {

      let dragImages = [];
      dragImages.push(dragSingleSeat.current);
      dragImages.push(dragleftSeat.current);
      dragImages.push(dragRightSeat.current);
      dragImages.push(dragCorner.current);

      dragImages.forEach(img => {
        img.addEventListener("dragstart", (e) => {

          setTimeout(() => {
            e.target.style.opacity = "0.1";
            e.target.style.setProperty('cursor', 'grab', 'important');
          }, 0)


          dragStart(img.id)
        });
      })

      dragImages.forEach(img => {
        img.addEventListener("dragend", (e) => {

          setTimeout(() => {
            e.target.style.opacity = "1";
            e.target.style.cursor = "grab";
          }, 0)

        });
      })
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
              style={{ width: "100px", height: "100px", border: "none", padding: "0" }}
              className="change-model"
              onClick={() => addModel("singleSeat")}
            >
              <img
                className="imgModel"
                id="singleSeat"
                ref={dragSingleSeat}
                draggable="true"
                style={{ width: "100%", height: "100%", cursor: "pointer" }}
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
              style={{ width: "100px", height: "100px", border: "none", padding: "0" }}
              className="change-model"
              onClick={() => addModel("leftSeat")}
            >
              <img
                className="imgModel"
                id="leftSeat"
                ref={dragleftSeat}
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
              style={{ width: "100px", height: "100px", border: "none", padding: "0" }}
              className="change-model"
              onClick={() => addModel("rightSeat")}
            >
              <img
                className="imgModel"
                id="rightSeat"
                ref={dragRightSeat}
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
              style={{ width: "100px", height: "100px", border: "none", padding: "0" }}
              className="change-model"
              onClick={() => addModel("corner")}
            >
              <img
                className="imgModel"
                id="corner"
                ref={dragCorner}
                draggable="true"
                style={{ width: "100%", height: "100%", cursor: "pointer" }}
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
