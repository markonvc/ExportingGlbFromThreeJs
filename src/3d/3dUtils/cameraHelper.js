
import * as THREE from "three";

class Camera {
  setCamera(scene, sizes) {
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      1000
    );
    camera.position.set(0, 1, 4);
    scene.add(camera);

    return camera
  }
}

export default new Camera();
