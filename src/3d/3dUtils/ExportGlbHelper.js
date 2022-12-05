import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter";
import Store from "../../store/Store";

class ExportGlb {
  exportglbFromScene(scene, setEnterAr) {
    console.log(scene);
    const exporter = new GLTFExporter();
    exporter.parse(
      scene,
      (result) => {
        if (result instanceof ArrayBuffer) {
          this.saveArrayBuffer(result, "scene.glb", setEnterAr);
        } else {
          const output = JSON.stringify(result, null, 2);
          console.log(output);
          this.saveString(output, "scene.gltf", setEnterAr);
        }
      },
      (error) => {
        console.log("An error happened during parsing", error);
      },
      {
        trs: false,
        onlyVisible: true,
        binary: true,
        maxTextureSize: 4096,
      }
    );
  }

  save(blob, fileName, setEnterAr) {
    const link = document.createElement("a");
    document.body.appendChild(link);

    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    Store.modelHref = "/models/armChair.glb";
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
