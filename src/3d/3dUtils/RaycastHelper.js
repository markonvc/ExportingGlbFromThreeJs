import * as THREE from "three";
import Store from "../../store/Store";

class Raycaster {
  raycasterMove;
  raycastClick;
  clickMouse;
  moveMouse;
  model;

  initializeRaycaster(scene, canvas) {
    // console.log(nModel);
    // this.model = nModel;
    canvas.addEventListener("mousemove", this.mouseMove);

    canvas.addEventListener("click", (event) => {
      this.raycastClick = new THREE.Raycaster();
      this.clickMouse = new THREE.Vector2();
      this.clickMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      this.clickMouse.y = (event.clientY / window.innerHeight) * 2 + 1;

      this.raycastClick.setFromCamera(this.clickMouse, Store.camera);
      const found = this.raycastClick.intersectObjects(scene.children);
      console.log(found);
      if (found.length > 0) {
        let draggable = [];
        scene.children.forEach((item) => {
          if (item.isGroup) {
            draggable.push(item);
          }
        });

        draggable.forEach((item) => {
          console.log(item);
        });

        for (let m of found) {
          if (m.object.userData.name === "ground") {
            canvas.removeEventListener("mousemove", this.mouseMove);
            draggable.forEach((item) => {
              item.position.x = -1;
              item.position.z = 10;
              item.visible = true;
            });

            draggable = [];
          }
        }
      }
    });
  }

  mouseMove(e) {
    console.log("drag");
    let draggableModel = Store.draggableModel;
    console.log(draggableModel);
    this.raycasterMove = new THREE.Raycaster();
    this.moveMouse = new THREE.Vector2();

    this.moveMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    this.moveMouse.y = (e.clientY / window.innerHeight) * 2 + 1;

    this.raycasterMove.setFromCamera(this.moveMouse, Store.camera);
    const found = this.raycasterMove.intersectObjects(Store.scene.children);
    console.log(found.length);

    if (found.length > 0) {
      let draggable;
      Store.scene.children.forEach((item) => {
        if (item.isGroup && item.name === draggableModel) {
          draggable = item;
        }
      });

      for (let m of found) {
        if (m.object.userData.name === "ground") {
          draggable.position.x = m.point.x + 2;
          draggable.position.z = -m.point.z - 2;
          draggable.visible = true;
        }
      }
    }
  }
}

export default new Raycaster();
