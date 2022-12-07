import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter";
import Store from "../../store/Store";

class ExportGlb {
  exportglbFromScene(setEnterAr) {
    const exporter = new GLTFExporter();
    const scene = Store.scene;
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
        console.log("An error happened during parsing", error);
      },
      {
        trs: false,
        onlyVisible: true,
        binary: false,
        maxTextureSize: 4096,
      }
    );
  }

  save(blob, fileName, setEnterAr) {
    console.log(Store.renderer);
    Store.modelHref = URL.createObjectURL(blob);
    Store.renderer.resetState();
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
