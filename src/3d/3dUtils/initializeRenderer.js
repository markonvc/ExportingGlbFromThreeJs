import * as THREE from "three";

class InitializeRenderer {
  initializeWebGlRenderer = (canvas) => {
    let renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth * 0.65, window.innerHeight * 0.6);
    renderer.shadowMap.enabled = true;
    this.initializeDOM(renderer, canvas);

    return renderer;
  };

  initializeDOM = (renderer, canvas) => {
    canvas.appendChild(renderer.domElement);
    console.log(canvas);
  };
}

export default new InitializeRenderer();
