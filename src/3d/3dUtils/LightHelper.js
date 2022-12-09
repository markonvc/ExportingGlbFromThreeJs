import * as THREE from "three";

class Light {
    addLight(scene) {
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(0, 3, 3);
        // light.target.updateMatrixWorld();
        console.log(light.target);
        scene.add(light);
        console.log(scene);

    }

}
export default new Light()