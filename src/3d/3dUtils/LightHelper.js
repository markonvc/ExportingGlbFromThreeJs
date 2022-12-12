import * as THREE from "three";

class Light {
  addLight(scene) {
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 3, 3);
    console.log(light.target);
    scene.add(light);
    console.log(scene);

    const AmbientLight = new THREE.AmbientLight(0xffffff, 1);
    AmbientLight.position.set(0, 5, 0);
    scene.add(AmbientLight);
  }
}
export default new Light();
