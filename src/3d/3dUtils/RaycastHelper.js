import * as THREE from "three";
import Store from "../../store/Store";

class Raycaster {
  raycasterMove;
  raycastClick;
  clickMouse;
  moveMouse;
  model;

  initializeRaycaster(scene, nModel, canvas) {
    console.log(nModel);
    this.model = nModel;
    console.log(this.model);
    canvas.addEventListener("mousemove", this.mouseMove);

    canvas.addEventListener("click", (event) => {
      this.raycastClick = new THREE.Raycaster();
      this.clickMouse = new THREE.Vector2();
      this.clickMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      this.clickMouse.y = (event.clientY / window.innerHeight) * 2 + 1;

      this.raycastClick.setFromCamera(this.clickMouse, Store.camera);
      const found = this.raycastClick.intersectObjects(scene.children);

      if (found.length > 0) {
        let draggable = [];
        scene.children.forEach((item) => {
          if (item.isGroup) {
            draggable.push(item);
          }
        });

        console.log(`find click: ${draggable}`);

        for (let m of found) {
          if (m.object.userData.name === "ground") {
            canvas.removeEventListener("mousemove", this.mouseMove);
            draggable.forEach((item) => {
              console.log(item.name);
              item.position.x = -1;
              item.position.z = 12;
              item.visible = true;
            });
          }
        }
      }
    });
  }

  mouseMove(e) {
    let draggableModel = Store.draggableModel;
    console.log(draggableModel);
    this.raycasterMove = new THREE.Raycaster();
    this.moveMouse = new THREE.Vector2();

    this.moveMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    this.moveMouse.y = (e.clientY / window.innerHeight) * 2 + 1;

    this.raycasterMove.setFromCamera(this.moveMouse, Store.camera);
    const found = this.raycasterMove.intersectObjects(Store.scene.children);

    if (found.length > 0) {
      let draggable;
      Store.scene.children.forEach((item) => {
        if (item.isGroup && item.name === draggableModel) {
          draggable = item;
        }
      });
      console.log(`find draggable: ${draggable}`);

      for (let m of found) {
        if (m.object.userData.name === "ground") {
          console.log(m.object.userData.name);
          draggable.position.x = m.point.x;
          draggable.position.z = -m.point.z;
          draggable.visible = true;
        }
      }
    }
  }
}

export default new Raycaster();
