import * as THREE from "three";

class InitializeRenderer {
    initializeWebGlRenderer = (canvas) => {
        let renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        });

        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMap.enabled = true;
        this.initializeDOM(renderer, canvas)

        return renderer;
    }



    initializeDOM = (renderer, canvas) => {
        canvas.appendChild(renderer.domElement)
        console.log(canvas);
    };
}

export default new InitializeRenderer()