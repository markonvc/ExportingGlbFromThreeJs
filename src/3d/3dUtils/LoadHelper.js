import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import ModelUrls from "../../mockData/modelUrls";

class Loader {
  loadModel(newModel, mPosition, scene) {
    let model;
    const modelUrl = ModelUrls[newModel].modelUrl;

    const loader = new GLTFLoader();
    console.log("jjj");
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
