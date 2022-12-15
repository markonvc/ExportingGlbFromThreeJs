import * as THREE from "three";
import Store from "../../store/Store";

class Color {
  changeColor() {
    const scene = Store.scene;

    scene.children.forEach((item) => {
      if (item.isGroup) {
        item.children.forEach((mesh) => {
          if (mesh.isMesh && mesh.name === "back") {
            mesh.material = new THREE.MeshStandardMaterial({
              side: THREE.DoubleSide,
              needsUpdate: true,
            });
            mesh.material.color.setRGB(0, 0, 0);
          }
        });
      }
    });
  }
}

export default new Color();
