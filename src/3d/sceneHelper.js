import * as THREE from "three";
import Renderer from "./3dUtils/InitializeRenderer";
import Light from "./3dUtils/LightHelper";
import Camera from "./3dUtils/CameraHelper";
import Ground from "./3dUtils/GroundHelper";
import Target from "./3dUtils/TargetHelper";
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
    Store.renderer = renderer;

    let camera = Camera.setCamera(scene, sizes);
    Store.camera = camera;

    Light.addLight(scene);

    Ground.loadGround(scene);

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

    animate();
  }
}

export default new Viewer3D();
