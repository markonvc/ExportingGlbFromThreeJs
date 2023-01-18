import React, { useContext } from "react";
import { ButtonContext } from "../../context/ButtonContext";
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

  function deleteSelectedModel() {
    const scene = Store.scene;

    scene.children.forEach((item) => {
      if (item.isGroup && item.name.includes(model)) {
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
        console.log(scene);
        let modelDeletedImg = document.getElementById(model);
        console.log(modelDeletedImg);
        modelDeletedImg.style.opacity = 1;
        modelDeletedImg.disable = false;
      }
    });

    console.log(scene);
  }
  return (
    <div className={model} id={`delete_${model}`} onClick={deleteSelectedModel}>
      <p className="deleteButton">X</p>
    </div>
  );
}

export default DeleteModel;
