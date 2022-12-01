import * as THREE from "three";

class Light {
    addLight(scene) {
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(1, 1, 1);
        scene.add(light);
        console.log(scene);

    }

}
export default new Light()