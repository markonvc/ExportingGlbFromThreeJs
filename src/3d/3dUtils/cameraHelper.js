import * as THREE from "three";

class Camera {
  setCamera(scene, sizes) {
    const camera = new THREE.PerspectiveCamera(
      25,
      sizes.width / sizes.height,
      0.1,
      2000
    );
    camera.position.set(-3, 15, 30);
    camera.lookAt(new THREE.Vector3(0, -8, 0));
    scene.add(camera);

    return camera;
  }
}

export default new Camera();
