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
  } = useContext(ButtonContext);

  function deleteSelectedModel() {
    const scene = Store.scene;

    scene.children.forEach((item) => {
      if (item.isGroup && item.name === model) {
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
          default:
            console.log("error setting delete button hidden");
        }
        scene.remove(item);
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
