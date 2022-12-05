import * as THREE from "three";

class Light {
  addLight(scene) {
    const DirectionalLight = new THREE.DirectionalLight(0xffffff, 1);
    DirectionalLight.position.set(0, 0.5, 3);
    scene.add(DirectionalLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    ambientLight.position.set(0, 5, 0);
    // scene.add(ambientLight);
  }
}
export default new Light();
