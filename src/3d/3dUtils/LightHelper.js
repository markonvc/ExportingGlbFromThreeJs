import * as THREE from "three";

class Light {
    addLight(scene) {
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(1, 5, 0);
        light.target.position.set(0, -1, 0);
        // light.target.updateMatrixWorld();
        console.log(light.target);
        scene.add(light);
        console.log(scene);

    }

}
export default new Light()