import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import RemoveHelper from "./RemoveMesh";
import ModelUrls from "../../mockData/modelUrls";

class ConfigureModel {
  deletedMeshes = 0;

  loadModel(newModel, mPosition, scene) {
    let model;
    const modelUrl = ModelUrls[newModel].modelUrl;

    while (this.deletedMeshes < 3) {
      this.deletedMeshes = RemoveHelper.removeMesh();
    }

    scene.children.forEach((item) => {
      if (item.isGroup) {
        item.children.forEach((mesh) => {
          if (mesh.isMesh) {
            mesh.position.setX(-0.24);
          }
        });
      }
    });

    const loader = new GLTFLoader();

    loader.load(
      modelUrl,
      (gltf) => {
        model = gltf.scene;
        console.log(model);
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
