import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { ModelUrls } from "../../mockData/ModelUrls";
class Loader {
  loadModel(newModel, scene) {
    let model;
    const modelUrl = ModelUrls[newModel].modelUrl;

    const loader = new GLTFLoader();
    loader.load(
      modelUrl,
      (gltf) => {
        model = gltf.scene;
        scene.add(model);
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

export default new Loader();
