import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { TargetUrls } from "../../mockData/TargetUrls";

class Target {
  loadTarget(targetModel, scene) {
    let model;
    const modelUrl = TargetUrls[targetModel].modelUrl;
    const loader = new GLTFLoader();

    loader.load(
      modelUrl,
      (gltf) => {
        model = gltf.scene;
        model.scale.set(1, 1, 1);
        model.position.z = 10;
        model.position.x = -1;
        model.position.y = 1;
        model.name = targetModel + "Target";
        // model.material.color = "black";
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
