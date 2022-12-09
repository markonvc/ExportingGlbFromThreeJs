import Store from "../../store/Store";

class Color {
    changeColor() {
        const scene = Store.scene;

        scene.children.forEach(item => {
            if (item.isGroup) {
                item.children.forEach(mesh => {
                    if (mesh.isMesh) {
                        console.log(mesh);
                    }
                })
            }
        })
    }
}

export default new Color();