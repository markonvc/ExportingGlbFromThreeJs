import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { ModelUrls } from "../../mockData/ModelUrls";
class ConfigureModel {
  loadModel(newModel, scene) {
    console.log("usao u configurator");
    let model;
    const modelUrl = ModelUrls[newModel].modelUrl;

    // scene.children.forEach((item) => {
    //   if (item.isGroup) {
    //     item.children.forEach((mesh) => {
    //       if (mesh.isMesh) {
    //         mesh.position.setX(-0.24);
    //       }
    //     });
    //   }
    // });

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

export default new ConfigureModel();
