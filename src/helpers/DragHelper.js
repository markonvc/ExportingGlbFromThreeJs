import ConfigureModel from "../3d/3dUtils/ConfigureModelPart";
import Raycaster from "../3d/3dUtils/RaycastHelper";
import pickingOrder from "./ModelPickingOrderHelper";
import TargetHelper from "../3d/3dUtils/TargetHelper";
import Store from "../store/Store";

export function dragStart(modelName) {
  let canvas = document.getElementById("canvasContainer");
  console.log(canvas.style.zIndex);
  document.getElementById("canvasContainer").style.zIndex = 2;

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
  console.log(model);

  let repeatingModels = [];
  Store.loadedModels.forEach(item => {
    if (item === model) repeatingModels.push(item);
  })

  repeatingModels.length < 2 && pickingOrder(model);
  // let leftSideModel = null;

  // scene.children.forEach((item) => {
  //   if (item.name === "singleSeat" && model === "singleSeat") {
  //     leftSideModel = "singleSeatleftSide";
  //   } else if (item.name === "cornerSeat" && model === "leftSeat") {
  //     leftSideModel = "leftSeatleftSide";
  //   }
  // });

  Store.draggableModel = model;


  TargetHelper.loadTarget(model, scene);

  ConfigureModel.loadModel(model, scene, true);
  Raycaster.initializeRaycaster(scene, this);


  if (model === "singleSeatleftSide") {
    let modelImg = document.getElementById("singleSeat");
    modelImg.style.opacity = 0.1;
    modelImg.disabled = true;
  } else if (model === "leftSeatleftSide") {
    let modelImg = document.getElementById("leftSide");
    modelImg.style.opacity = 0.1;
    modelImg.disabled = true;
  } else {
    let modelImg = document.getElementById(model);
    modelImg.style.opacity = 0.1;
    modelImg.disabled = true;
  }

}
