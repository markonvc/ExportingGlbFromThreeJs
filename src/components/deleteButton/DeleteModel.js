import React, { useContext } from "react";
import { ButtonContext } from "../../context/ButtonContext";
import { PickingOrderContext } from "../../context/PickingOrderContext";
import Store from "../../store/Store";
import "./DeleteModel.scss";

function DeleteModel({ model }) {
  const {
    setShowDeleteButtonSingleSeat,
    setShowDeleteButtonLeftSeat,
    setShowDeleteButtonRightSeat,
    setShowDeleteButtonSingleLeftSeat,
    setShowDeleteButtonLeftSideSeat,
    setShowDeleteButtonCornerSeatSeat,
  } = useContext(ButtonContext);

  const { setOrderPicking } = useContext(PickingOrderContext);

  function deleteSelectedModel() {
    const scene = Store.scene;

    scene.children.forEach((item) => {
      console.log(item.name);
      if (item.isGroup && item.name === model) {
        console.log(item.name);
        item.children[0].children.forEach((objectModel) => {
          objectModel.children.forEach((mesh) => {
            if (mesh.isMesh) {
              mesh.geometry.dispose();
              mesh.material.dispose();
              objectModel.remove(mesh);
            }
          });
        });
        switch (model) {
          case "singleSeat":
            setShowDeleteButtonSingleSeat(false);
            break;
          case "leftSeat":
            setShowDeleteButtonLeftSeat(false);
            break;
          case "rightSeat":
            setShowDeleteButtonRightSeat(false);
            break;
          case "singleSeatleftSide":
            setShowDeleteButtonSingleLeftSeat(false);
            break;
          case "leftSeatleftSide":
            setShowDeleteButtonLeftSideSeat(false);
            break;
          case "cornerSeat":
            setShowDeleteButtonCornerSeatSeat(false);
            break;
          default:
            console.log("error setting delete button hidden");
        }

        scene.remove(item);

        setOrderPicking(false);

        let modelDeletedImg
        model === "singleSeatleftSide" ? modelDeletedImg = document.getElementById("singleSeat") :
          model === "leftSeatleftSide" ? modelDeletedImg = document.getElementById("leftSeat") :
            modelDeletedImg = document.getElementById(model)
        modelDeletedImg.style.opacity = 1;
        modelDeletedImg.disabled = false;

        if (model === "leftSeat") {
          console.log("fffrrr");
          let cornerSeatImg = document.getElementById("cornerSeat");
          cornerSeatImg.style.opacity = 1;
          cornerSeatImg.disabled = false
        } else if (model === "cornerSeat") {
          let leftSeatImg = document.getElementById("leftSeat");
          leftSeatImg.style.opacity = 1;
          leftSeatImg.disabled = false
        }

      } else if (item.isGroup && item.name.includes(model)) {
        console.log(item);
        item.children.forEach((objectModel) => {
          if (objectModel.isMesh) {
            objectModel.geometry.dispose();
            objectModel.material.dispose();
            item.remove(objectModel);
          }
        });
      }
    });
  }

  return (
    <div className={model} id={`delete_${model}`} onClick={deleteSelectedModel}>
      <p className="deleteButton">X</p>
    </div>
  );
}

export default DeleteModel;
