import React from "react";
import CofigureModelPart from "../../3d/3dUtils/CofigureModelPart";
// import ColorHelper from "../../3d/3dUtils/ColorHelper";
import Store from "../../store/Store";

function Menu() {
  function changeModel(modelName) {
    console.log(modelName);
    let loadedModels = Store.loadedModels;
    let model = loadedModels.find((m) => m === modelName);

    if (model) {
      alert(`Model: ${modelName} is already added!`);
      return;
    }
    console.log(model);
    if (model === "leftSeat" && modelName === "corner") {
      alert(`Can't add ${modelName}`);
      return;
    }

    CofigureModelPart.loadModel(modelName, Store.scene);
    Store.loadedModels.push(modelName);
  }

  // function changeColor() {
  //   ColorHelper.changeColor();
  // }

  return (
    <div
      style={{
        width: "100%",
        marginTop: "20px",
        display: "flex",
        justifyContent: "space-around",
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
            onClick={() => changeModel("leftSeat")}
          >
            <img style={{ width: "100%" }} src="leftSeat.png" alt="model"></img>
          </button>
        </div>

        <p style={{ textAlign: "center" }} className="add-model">
          Add Left Seat
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
            onClick={() => changeModel("rightSeat")}
          >
            <img
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
            onClick={() => changeModel("corner")}
          >
            <img style={{ width: "100%" }} src="corner.png" alt="model"></img>
          </button>
        </div>

        <p style={{ textAlign: "center" }} className="add-model">
          Add corner
        </p>
      </div>
    </div>
  );
}

export default Menu;
