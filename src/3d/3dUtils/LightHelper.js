import * as THREE from "three";

class Light {
  addLight(scene) {
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(-30, 50, -30);
    scene.add(light);

    const AmbientLight = new THREE.AmbientLight(0xffffff, 0.30);
    // AmbientLight.position.set(0, 5, 0);
    scene.add(AmbientLight);
  }
}
export default new Light();
