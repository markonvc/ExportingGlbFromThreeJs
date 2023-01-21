import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { ModelUrls } from "../../mockData/ModelUrls";
class ConfigureModel {
  loadModel(newModel, scene, hideModel, setOrderImages) {
    let model;

    const modelUrl = ModelUrls[newModel].modelUrl;
    const loader = new GLTFLoader();

    !hideModel
      ? (document.getElementById("canvasContainer").style.zIndex = -2)
      : (document.getElementById("canvasContainer").style.zIndex = 2);

    if (newModel === "leftSeat") {
      setTimeout(() => {
        document.getElementById("delete_leftSeat").style.display = "flex";
        try {
          document.getElementById("delete_cornerSeat").style.display = "none";
        } catch (error) {
          console.log(error);
        }
      }, 1500)

    } else if (newModel === "cornerSeat") {
      setTimeout(() => {
        document.getElementById("delete_cornerSeat").style.display = "flex";
        try {
          document.getElementById("delete_leftSeat").style.display = "none";
        } catch (error) {
          console.log(error);
        }

      }, 1500)

    }

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
        setOrderImages(true);

        if (!hideModel) {
          scene.children.forEach((item) => {
            if (item.isGroup && item.name === newModel) {
              console.log(newModel);
              let css = `.${newModel}:hover{ opacity: 1 }`;
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
