import Store from "../../store/Store";

class RemoveMesh {
    deletedMeshes = 0;
    removeMesh() {
        console.log(this.deletedMeshes);
        const scene = Store.scene

        scene.children.forEach(item => {
            if (item.isGroup) {
                item.children.forEach(mesh => {
                    if (mesh.isMesh && (mesh.name === "legs" || mesh.name === "circle" || mesh.name === "handrail")) {
                        mesh.geometry.dispose();
                        mesh.material.dispose();
                        item.remove(mesh);
                        this.deletedMeshes++
                    }
                })
            }
        })

        return this.deletedMeshes;

    }
}

export default new RemoveMesh();