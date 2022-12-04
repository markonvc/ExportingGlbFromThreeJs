import React from "react";
import LoadHelper from "../3d/3dUtils/LoadHelper";
import Store from "../store/Store";

function Menu() {
  function changeModel() {
    LoadHelper.loadModel("armChair", 1, Store.scene);
  }

  return (
    <div
      style={{
        width: "100%",
        marginTop: "40px",
        marginLeft: "20px",
      }}
      className="menu"
    >
      <h2 style={{ marginTop: "0", textAlign: "center" }} className="heading">
        get-plop configuration menu
      </h2>
      <div className="menu-content">
        <div
          style={{
            marginTop: "50px",
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
    </div>
  );
}

export default Menu;
