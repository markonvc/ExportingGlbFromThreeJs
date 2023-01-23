import ConfigureModel from "../3d/3dUtils/ConfigureModelPart";
import Raycaster from "../3d/3dUtils/RaycastHelper";
import TargetHelper from "../3d/3dUtils/TargetHelper";
import Store from "../store/Store";

export function dragStart(modelName, setOrderImages) {
  let canvas = document.getElementById("canvasContainer");
  document.getElementById("canvasContainer").style.zIndex = 2;

  if (canvas.getAttribute("model")) {
    canvas.setAttribute("model", modelName);
  } else {
    canvas.setAttribute("model", modelName);
    canvas.addEventListener("dragenter", function (e) {
      e.preventDefault();
      let scene = Store.scene;
      let model = this.getAttribute("model");

      Store.draggableModel = model;
      TargetHelper.loadTarget(model, scene);

      ConfigureModel.loadModel(model, scene, true, setOrderImages);
      Raycaster.initializeRaycaster(scene, this);
    });
  }
}
