import * as THREE from "three";
import Controls from "./3dUtils/controlsHelper";
import Renderer from "./3dUtils/initializeRenderer";
import Light from "./3dUtils/LightHelper";
import Camera from "./3dUtils/cameraHelper";

import Loader from "./3dUtils/LoadHelper";

import Store from "../store/Store";

class Viewer3D {
  createScene() {
    const canvas = document.querySelector(".webgl");
    const scene = new THREE.Scene();
    Store.scene = scene;

    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    let renderer = Renderer.initializeWebGlRenderer(canvas);
    console.log(renderer);

    let camera = Camera.setCamera(scene, sizes);

    Light.addLight(scene);

    Controls.initializeControls(camera, renderer);

    Loader.loadModel("twoSeat", null, scene);

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

    animate();
  }
}

export default new Viewer3D();
