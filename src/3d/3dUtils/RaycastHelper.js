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

      if (found.length > 0) {
        let draggable = [];
        scene.children.forEach((item) => {
          if (item.isGroup) {
            draggable.push(item);
          }
        });

        for (let m of found) {
          if (m.object.userData.name === "ground") {
            canvas.removeEventListener("mousemove", this.mouseMove);
            draggable.forEach((item) => {
              item.position.x = -1;
              item.position.z = 10;
              item.visible = true;
              document.getElementById("canvasContainer").style.zIndex = -2;

              scene.children.forEach((currentModel) => {
                if (currentModel.isGroup && currentModel.name === item.name) {
                  let css = `.${item.name}:hover{ opacity: 1 }`;
                  let style = document.createElement("style");

                  if (style.styleSheet) {
                    style.styleSheet.cssText = css;
                  } else {
                    style.appendChild(document.createTextNode(css));
                  }

                  document.getElementsByTagName("head")[0].appendChild(style);
                }
              });
            });

            draggable = [];
          }
        }
      }
    });
  }

  mouseMove(e) {
    let draggableModel = Store.draggableModel;
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
