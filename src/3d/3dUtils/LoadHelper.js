import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import ModelUrls from "../../mockData/modelUrls";

class Loader {
  loadModel(newModel, mPosition, scene) {
    let model;
    const modelUrl = ModelUrls[newModel].modelUrl;
    console.log(modelUrl);

    const loader = new GLTFLoader();

    loader.load(
      modelUrl,
      (gltf) => {
        model = gltf.scene;
        scene.add(model)
        // let meshes = [];

        // model?.traverse((mesh) => {
        //   if (mesh.isMesh) {
        //     meshes.push(mesh);
        //   }
        // });

        // meshes.forEach((mesh) => {
        //   mPosition && mesh.position.setX(mPosition);
        //   console.log(mesh);
        //   scene.add(mesh);
        // });

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

export default new Loader();
