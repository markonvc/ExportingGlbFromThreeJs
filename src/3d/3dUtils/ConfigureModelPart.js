import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { ModelUrls } from "../../mockData/ModelUrls";
class ConfigureModel {
  loadModel(newModel, scene, hideModel) {
    let model;
    console.log(newModel);
    scene.children.forEach((item) => {
      if (item.name === "singleSeat" && newModel === "singleSeat") {
        newModel = "singleSeatleftSide";
      } else if (item.name === "cornerSeat" && newModel === "leftSeat") {
        newModel = "leftSeatleftSide";
      }
    });

    const modelUrl = ModelUrls[newModel].modelUrl;
    const loader = new GLTFLoader();

    !hideModel
      ? (document.getElementById("canvasContainer").style.zIndex = -2)
      : (document.getElementById("canvasContainer").style.zIndex = 2);

    console.log(document.getElementById("canvasContainer").style.zIndex);

    loader.load(
      modelUrl,
      (gltf) => {
        model = gltf.scene;
        model.name = newModel;
        model.userData.name = newModel;
        model.userData.draggable = true;
        model.scale.set(3, 3, 3);
        model.position.z = 10;
        model.position.x = -1;
        model.position.y = 1;
        // model.position.y = 1;

        hideModel ? (model.visible = false) : (model.visible = true);
        scene.add(model);
        console.log(scene);

        if (!hideModel) {
          scene.children.forEach((item) => {
            console.log(item.name);
            if (item.isGroup && item.name === newModel) {
              let css;
              newModel === "cornerSeat"
                ? (css = `.leftSeat:hover{ opacity: 1; zIndex: 0 }`)
                : (css = `.${newModel}:hover{ opacity: 1 }`);
              let style = document.createElement("style");

              if (style.styleSheet) {
                style.styleSheet.cssText = css;
              } else {
                console.log(style);
                style.appendChild(document.createTextNode(css));
              }

              document.getElementsByTagName("head")[0].appendChild(style);
            }
          });
        }
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      function (error) {
        console.log(error);
      }
    );
  }
}

export default new ConfigureModel();
