import ConfigureModel from "../3d/3dUtils/ConfigureModelPart";
import Raycaster from "../3d/3dUtils/RaycastHelper";
import pickingOrder from "./ModelPickingOrderHelper";
import TargetHelper from "../3d/3dUtils/TargetHelper";
import Store from "../store/Store";

export function dragStart(modelName) {
  console.log(modelName);
  let canvas = document.getElementById("canvasContainer");

  if (canvas.getAttribute("model")) {
    canvas.setAttribute("model", modelName);
  } else {
    canvas.setAttribute("model", modelName);
    canvas.addEventListener("dragenter", dragEnter);
  }
}

function dragEnter(e) {
  e.preventDefault();
  let scene = Store.scene;
  let model = this.getAttribute("model");
  pickingOrder(model);
  let leftSideModel = null;

  scene.children.forEach((item) => {
    if (item.name === "singleSeat" && model === "singleSeat") {
      leftSideModel = "singleSeatleftSide";
    } else if (item.name === "cornerSeat" && model === "leftSeat") {
      leftSideModel = "leftSeatleftSide";
    }
  });

  leftSideModel
    ? (Store.draggableModel = leftSideModel)
    : (Store.draggableModel = model);

  leftSideModel
    ? TargetHelper.loadTarget(leftSideModel, scene)
    : TargetHelper.loadTarget(model, scene);

  ConfigureModel.loadModel(model, scene);
  Raycaster.initializeRaycaster(scene, this);
}
