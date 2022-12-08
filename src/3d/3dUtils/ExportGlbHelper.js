import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter";
import Store from "../../store/Store";

class ExportGlb {
  exportglbFromScene(setEnterAr) {
    const exporter = new GLTFExporter();
    // const scene = Store.scene;
    console.log(Store.scene);
    let meshes = [];
    Store.scene.children.forEach((item) => {
      if (item.isGroup) {
        item.children.forEach((mesh) => {
          mesh.isMesh && meshes.push(mesh);
        });
      }
    });
    console.log(meshes);
    exporter.parse(
      meshes,
      (result) => {
        if (result instanceof ArrayBuffer) {
          this.saveArrayBuffer(result, "scene.glb", setEnterAr);
        } else {
          const output = JSON.stringify(result, null, 2);
          this.saveString(output, "scene.gltf", setEnterAr);
        }
      },
      (error) => {
        console.log("An error happened during parsing", error);
      },
      {
        binary: true,
      }
    );
  }

  save(blob, fileName, setEnterAr) {
    console.log(Store.renderer);
    Store.modelHref = URL.createObjectURL(blob);
    console.log(Store.renderer);
    setEnterAr(true);
  }

  saveArrayBuffer(buffer, fileName, setEnterAr) {
    this.save(
      new Blob([buffer], { type: "application/octet-stream" }),
      fileName,
      setEnterAr
    );
  }

  saveString(text, fileName, setEnterAr) {
    this.save(new Blob([text], { type: "text/plain" }), fileName, setEnterAr);
  }
}

export default new ExportGlb();
