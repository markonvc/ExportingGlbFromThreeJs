import * as THREE from "three";

class Ground {
    loadGround(scene) {
        let pos = { x: 0, y: -1, z: 1 }
        let scale = { x: 100, y: 2, z: 100 }

        let blockPlane = new THREE.Mesh(new THREE.BoxGeometry(),
            new THREE.MeshPhongMaterial({ color: 0xf9c834 }));
        blockPlane.position.set(pos.x, pos.y, pos.z);
        blockPlane.scale.set(scale.x, scale.y, scale.z);
        blockPlane.castShadow = true;
        blockPlane.receiveShadow = true;
        blockPlane.name = "ground"
        scene.add(blockPlane);


        blockPlane.userData.draggable = false;
        blockPlane.userData.name = "ground";

    }
}

export default new Ground();
