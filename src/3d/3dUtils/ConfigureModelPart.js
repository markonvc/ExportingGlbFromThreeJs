import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { ModelUrls } from "../../mockData/ModelUrls";
class ConfigureModel {
  loadModel(newModel, scene, hideModel) {
    let model;

    scene.children.forEach((item) => {
      if (item.name === "singleSeat" && newModel === "singleSeat") {
        newModel = "singleSeatleftSide";
      } else if (item.name === "cornerSeat" && newModel === "leftSeat") {
        newModel = "leftSeatleftSide";
      }
    });

    const modelUrl = ModelUrls[newModel].modelUrl;
    const loader = new GLTFLoader();

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
