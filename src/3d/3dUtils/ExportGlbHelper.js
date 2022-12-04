import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter";

class ExportGlb {
    exportglbFromScene(scene) {
        console.log(scene);
        const exporter = new GLTFExporter();
        exporter.parse(
            scene,
            (result) => {
                if (result instanceof ArrayBuffer) {
                    console.log("radi");
                    this.saveArrayBuffer(result, 'scene.glb');

                } else {
                    console.log("ne radi");
                    const output = JSON.stringify(result, null, 2);
                    console.log(output);
                    this.saveString(output, 'scene.gltf');

                }
            },
            (error) => {

                console.log('An error happened during parsing', error);

            },
            {
                trs: false,
                onlyVisible: true,
                binary: true,
                maxTextureSize: 4096,
            }
        )
    }

    save(blob, fileName) {
        const link = document.createElement("a");
        document.body.appendChild(link);

        link.href = URL.createObjectURL(blob);
        link.download = fileName;
        link.click();
    }

    saveArrayBuffer(buffer, fileName) {
        this.save(new Blob([buffer], { type: 'application/octet-stream' }), fileName);

    }

    saveString(text, fileName) {
        this.save(new Blob([text], { type: 'text/plain' }), fileName);
    }

}

export default new ExportGlb();