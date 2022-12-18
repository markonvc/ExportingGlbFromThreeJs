import * as THREE from "three";
import Store from "../../store/Store";

class Raycaster {
    initializeRaycaster(scene, model) {
        console.log("tttt");
        const camera = Store.camera
        const raycaster = new THREE.Raycaster();
        const clickMouse = new THREE.Vector2();
        const moveMouse = new THREE.Vector2();

        window.addEventListener("mousemove", event => {
            console.log("move");
            moveMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            moveMouse.y = (event.clientY / window.innerHeight) * 2 + 1;
            console.log(moveMouse.x);

            raycaster.setFromCamera(moveMouse, camera);
            const found = raycaster.intersectObjects(scene.children);
            console.log(found);

            if (found.length > 0) {
                console.log("found");
                let draggable;
                scene.children.forEach(item => {
                    if (item.isGroup && item.name === model) {
                        draggable = item;
                    }
                })
                console.log(`find draggable: ${draggable.userData.name}`);

                for (let m of found) {
                    if (m.object.userData.name !== "ground")
                        continue;

                    draggable.position.x = m.point.x;
                    draggable.position.y = m.point.y;
                    // draggable.position.z = m.point.z;
                    draggable.visible = true;
                }


            }
        })


    }
}

export default new Raycaster();