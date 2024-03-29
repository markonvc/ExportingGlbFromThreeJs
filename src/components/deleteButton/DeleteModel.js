import React, { useContext } from "react";
import { ButtonContext } from "../../context/ButtonContext";
import { single } from "../../helpers/OrderHelper";
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
            setShowDeleteButtonRightSeat(true);
            setShowDeleteButtonSingleSeat(true);
            setShowDeleteButtonCornerSeatSeat(true);
            break;
          case "leftSeatleftSide":
            setShowDeleteButtonLeftSideSeat(false);
            setShowDeleteButtonRightSeat(true);
            setShowDeleteButtonSingleSeat(true);
            setShowDeleteButtonCornerSeatSeat(true);
            break;
          case "cornerSeat":
            setShowDeleteButtonCornerSeatSeat(false);
            setShowDeleteButtonRightSeat(true);
            setShowDeleteButtonSingleSeat(true);
            break;
          default:
            console.log("error setting delete button hidden");
        }

        scene.remove(item);
        single();

        let rightSeat = scene.children.filter((item) => {
          return item.name === "leftSeat";
        });

        let leftSeat = scene.children.filter((item) => {
          return item.name === "rightSeat";
        });

        if (
          model === "singleSeat" &&
          rightSeat.length > 0 &&
          leftSeat.length > 0
        ) {
          scene.children.forEach((item) => {
            if (item.name === "leftSeat") {
              item.position.x = 0;
            }

            if (
              item.name === "rightSeat" &&
              rightSeat.length > 0 &&
              leftSeat.length > 0
            ) {
              item.position.x = -2.15;
            }

            if (item.name === "leftSeatTarget") {
              item.children.forEach((objectModel) => {
                if (objectModel.isMesh) {
                  objectModel.geometry.dispose();
                  objectModel.material.dispose();
                  item.remove(objectModel);
                }
              });
            }

            if (item.name === "rightSeatTarget") {
              item.children.forEach((objectModel) => {
                if (objectModel.isMesh) {
                  objectModel.geometry.dispose();
                  objectModel.material.dispose();
                  item.remove(objectModel);
                }
              });
            }

            if (item.name === "singleSeatTarget") {
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
      } else if (item.isGroup && item.name.includes(model)) {
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
