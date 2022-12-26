import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { ModelUrls } from "../../mockData/ModelUrls";

class Target {
  loadTarget(newModel, scene) {
    let model;
    const modelUrl = ModelUrls[newModel].modelUrl;

    const loader = new GLTFLoader();

    console.log(modelUrl);

    loader.load(
      modelUrl,
      (gltf) => {
        model = gltf.scene;
        model.name = newModel;
        model.scale.set(1, 1, 1);
        model.position.y = 0.5;
        model.position.z = 12;
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

export default new Target();
