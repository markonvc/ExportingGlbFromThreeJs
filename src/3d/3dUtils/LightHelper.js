import * as THREE from "three";

class Light {
  addLight(scene) {
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 40, 17);
    scene.add(light);

    const AmbientLight = new THREE.AmbientLight(0xffffff, 1);
    AmbientLight.position.set(0, 10, 15);
    scene.add(AmbientLight);
  }
}
export default new Light();
