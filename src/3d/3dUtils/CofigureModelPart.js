import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import RemoveHelper from "./RemoveMesh";
import ModelUrls from "../../mockData/modelUrls";
import Store from "../../store/Store";

class ConfigureModel {
    deletedMeshes = 0;

    loadModel(newModel, mPosition, scene) {
        let model;
        const modelUrl = ModelUrls[newModel].modelUrl;

        while (this.deletedMeshes < 3) {
            console.log("hhh");
            this.deletedMeshes = RemoveHelper.removeMesh();
            console.log(this.deletedMeshes);
        }

        // const scene = Store.scene;
        scene.children.forEach(item => {
            console.log("jjj");
            if (item.isGroup) {
                item.children.forEach(mesh => {
                    if (mesh.isMesh) {
                        console.log("rr");
                        mesh.position.setX(-0.26)
                    }
                })
            }
        })



        // const loader = new GLTFLoader();

        // loader.load(
        //     modelUrl,
        //     (gltf) => {
        //         model = gltf.scene;
        //         scene.add(model)
        //         let meshes = [];

        //         model?.traverse((mesh) => {
        //             if (mesh.isMesh) {
        //                 meshes.push(mesh);
        //             }
        //         });

        //         meshes.forEach((mesh) => {
        //             mPosition && mesh.position.setX(mPosition);
        //             console.log(mesh);
        //             scene.add(mesh);
        //         });

        //         console.log(scene);
        //     },
        //     function (xhr) {
        //         console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        //     },
        //     function (error) {
        //         console.log(error);
        //     }
        // );
    }
}

export default new ConfigureModel();
