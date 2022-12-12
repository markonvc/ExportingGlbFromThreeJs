import React from "react";
import { BackSide } from "three";
import CofigureModelPart from "../../3d/3dUtils/CofigureModelPart";
import ColorHelper from "../../3d/3dUtils/ColorHelper";
import Store from "../../store/Store";

function Menu() {
  function changeModel() {
    CofigureModelPart.loadModel("armChair", 1, Store.scene);
  }

  function changeColor() {
    ColorHelper.changeColor();
  }

  return (
    <div
      style={{
        width: "100%",
        marginTop: "20px",
        display: "flex",
        justifyContent: "space-around"
      }}
      className="menu"
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
            onClick={changeModel}
          >
            <img
              style={{ width: "100%" }}
              src="Screenshot_7.png"
              alt="model"
            ></img>
          </button>
        </div>
        <p style={{ textAlign: "center" }} className="add-model">
          add armChair
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
            style={{ width: "100px", height: "100px", background: "red" }}
            className="change-model"
            onClick={changeColor}
          >
          </button>
        </div>
        <p style={{ textAlign: "center" }} className="add-model">
          change color of the back
        </p>
      </div>
    </div>
  );
}

export default Menu;
