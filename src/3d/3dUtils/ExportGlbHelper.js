import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter";
import Store from "../../store/Store";

class ExportGlb {
  exportglbFromScene(setEnterAr) {
    const exporter = new GLTFExporter();
    const scene = Store.scene;

    let meshes = [];
    scene.children.forEach((item) => {
      if (item.isGroup) {
        item.children.forEach((mesh) => {
          mesh.isMesh && meshes.push(mesh);
        });
      }
    });
    exporter.parse(
      scene,
      (result) => {
        if (result instanceof ArrayBuffer) {
          this.saveArrayBuffer(result, "scene.glb", setEnterAr);
        } else {
          const output = JSON.stringify(result, null, 2);
          this.saveString(output, "scene.gltf", setEnterAr);
        }
      },
      (error) => {
        alert("An error happened during parsing", error);
      },
      {
        binary: false,
      }
    );
  }

  save(blob, fileName, setEnterAr) {
    Store.modelHref = URL.createObjectURL(blob);
    alert(Store.modelHref)
    setEnterAr(true);
    // const link = document.createElement('a')
    // document.body.appendChild(link)
    // link.href = URL.createObjectURL(blob);
    // link.download = fileName;
    // link.click();
  }

  saveArrayBuffer(buffer, fileName, setEnterAr) {
    alert("binari")
    this.save(
      new Blob([buffer], { type: "application/octet-stream" }),
      fileName,
      setEnterAr
    );
  }

  saveString(text, fileName, setEnterAr) {
    alert("text")
    this.save(new Blob([text], { type: "text/plain" }), fileName, setEnterAr);
  }
}

export default new ExportGlb();
