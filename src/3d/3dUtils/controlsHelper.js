import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

class ControlsHelper {

    initializeControls(camera, renderer) {

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.minDistance = 1.6;
        controls.maxDistance = 4;
        controls.zoomSpeed = 0.6;
        controls.rotateSpeed = 0.5;
        controls.enablePan = false;

        controls.enableDamping = true;
        controls.dampingFactor = 0.1;
        controls.update();

        return controls;
    }
}

export default new ControlsHelper();
