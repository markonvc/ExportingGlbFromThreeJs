import React, { useEffect, useRef, useContext, useState } from "react";
import { ButtonContext } from "../../context/ButtonContext";
import { single } from "../../helpers/OrderHelper";
import CofigureModelPart from "../../3d/3dUtils/ConfigureModelPart";
// import ColorHelper from "../../3d/3dUtils/ColorHelper";
import { dragStart } from "../../helpers/DragHelper";
import Store from "../../store/Store";
import "./Menu.scss";

function Menu() {
  const dragSingleSeat = useRef(null);
  const dragleftSeat = useRef(null);
  const dragRightSeat = useRef(null);
  const dragCorner = useRef(null);
  const [currentModel, setCurrentModel] = useState(null);
  const [orderImages, setOrderImages] = useState(false);

  const {
    setShowDeleteButtonSingleSeat,
    setShowDeleteButtonLeftSeat,
    setShowDeleteButtonRightSeat,
    setShowDeleteButtonSingleLeftSeat,
    setShowDeleteButtonLeftSideSeat,
    setShowDeleteButtonCornerSeatSeat,
  } = useContext(ButtonContext);

  function addModel(modelName) {
    setOrderImages(false)
    let modelImg = document.getElementById(modelName)
    if (modelImg.disabled) return;
    console.log("tttt");
    let leftSideModel = null;
    Store.scene.children.forEach((item) => {
      if (modelName === "singleSeat" && item.name === "singleSeat") {
        leftSideModel = "singleSeatleftSide";
      } else if (modelName === "leftSeat" && item.name === "cornerSeat") {
        leftSideModel = "leftSeatleftSide";
      }
    });

    leftSideModel ? setCurrentModel(leftSideModel) : setCurrentModel(modelName);

    if (modelName === "singleSeat") {
      Store.scene.children.forEach(item => {
        if (item.name === "leftSeat") {
          item.position.x = -1
        }

        if (item.name === "rightSeat") {
          item.position.x = -1
        }
      })
    }
  }

  // function changeColor() {
  //   ColorHelper.changeColor();
  // }

  useEffect(() => {
    if (!currentModel) return
    const scene = Store.scene;

    switch (currentModel) {
      case "singleSeat":
        let cornerSeat = scene.children.filter(item => {
          return item.name === "cornerSeat"
        })
        if (cornerSeat.length > 0) {
          setShowDeleteButtonSingleSeat(false);
        } else setShowDeleteButtonSingleSeat(true);
        break;
      case "leftSeat":
        setShowDeleteButtonLeftSeat(true);
        break;
      case "rightSeat":
        let corner = scene.children.filter(item => {
          return item.name === "cornerSeat"
        })
        if (corner.length > 0) {
          setShowDeleteButtonRightSeat(false);
        } else setShowDeleteButtonRightSeat(true);

        break;
      case "singleSeatleftSide":
        setShowDeleteButtonSingleLeftSeat(true);
        setShowDeleteButtonRightSeat(false);
        setShowDeleteButtonSingleSeat(false);
        setShowDeleteButtonCornerSeatSeat(false);
        break;
      case "leftSeatleftSide":
        setShowDeleteButtonLeftSideSeat(true);
        setShowDeleteButtonRightSeat(false);
        setShowDeleteButtonSingleSeat(false);
        setShowDeleteButtonCornerSeatSeat(false);
        break;
      case "cornerSeat":
        setShowDeleteButtonCornerSeatSeat(true);
        setShowDeleteButtonRightSeat(false);
        setShowDeleteButtonSingleSeat(false);
        break;
      default:
        console.log("error setting delete button hidden");
    }

    CofigureModelPart.loadModel(currentModel, scene, false, setOrderImages);
    setCurrentModel(null);

  }, [currentModel])

  useEffect(() => {
    if (!orderImages) return
    single()
  }, [orderImages])

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
          let modelImg = document.getElementById(img.id)
          if (modelImg.disabled) return;

          setOrderImages(false);

          setTimeout(() => {
            e.target.style.opacity = "0.1";
            e.target.style.setProperty("cursor", "grab", "important");
          }, 0);

          let modelToLoad = img.id;

          Store.scene.children.forEach(item => {
            if (item.name === "singleSeat" && modelToLoad === "singleSeat") {
              modelToLoad = "singleSeatleftSide"
            } else if (item.name === "cornerSeat" && modelToLoad === "leftSeat") {
              modelToLoad = "leftSeatleftSide"
            }
          })

          switch (modelToLoad) {
            case "singleSeat":
              let cornerSeat = Store.scene.children.filter(item => {
                return item.name === "cornerSeat"
              })
              if (cornerSeat.length > 0) {
                setShowDeleteButtonSingleSeat(false);
              } else setShowDeleteButtonSingleSeat(true);
              break;
            case "leftSeat":
              setShowDeleteButtonLeftSeat(true);
              break;
            case "rightSeat":
              let corner = Store.scene.children.filter(item => {
                return item.name === "cornerSeat"
              })
              if (corner.length > 0) {
                setShowDeleteButtonRightSeat(false);
              } else setShowDeleteButtonRightSeat(true);

              break;
            case "singleSeatleftSide":
              setShowDeleteButtonSingleLeftSeat(true);
              setShowDeleteButtonRightSeat(false);
              setShowDeleteButtonSingleSeat(false);
              setShowDeleteButtonCornerSeatSeat(false);
              break;
            case "leftSeatleftSide":
              setShowDeleteButtonLeftSideSeat(true);
              setShowDeleteButtonRightSeat(false);
              setShowDeleteButtonSingleSeat(false);
              setShowDeleteButtonCornerSeatSeat(false);
              break;
            case "cornerSeat":
              setShowDeleteButtonCornerSeatSeat(true);
              setShowDeleteButtonRightSeat(false);
              setShowDeleteButtonSingleSeat(false);
              break;
            default:
              console.log("error setting delete button hidden");
          }

          const loadedModels = Store.loadedModels;
          loadedModels.push(modelToLoad);

          dragStart(modelToLoad, setOrderImages);

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
