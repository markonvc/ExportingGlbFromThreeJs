import ConfigureModel from "../3d/3dUtils/CofigureModelPart";
import Raycaster from "../3d/3dUtils/RaycastHelper";
import Store from "../store/Store";

export function dragStart(modelName) {
  let canvas = document.getElementById("canvasContainer");

  if (canvas.getAttribute("model")) {
    canvas.setAttribute("model", modelName);
  } else {
    canvas.setAttribute("model", modelName);
    canvas.addEventListener("dragenter", dragEnter)
  }
}

function dragEnter(e) {
  e.preventDefault()

  let scene = Store.scene;
  let model = this.getAttribute("model");

  ConfigureModel.loadModel(model, scene);
  Raycaster.initializeRaycaster(scene, model)
}
