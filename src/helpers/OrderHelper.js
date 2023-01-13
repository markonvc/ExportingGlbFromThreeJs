import Store from "../store/Store";

function singleSeatOrder() {
  let scene = Store.scene;

  if (scene.children.length >= 7) {
    console.log(scene.children);
    let leftSeatImg = document.getElementById("leftSeat");
    leftSeatImg.style.opacity = 1;
    leftSeatImg.disable = false;

    let singleSeatImg = document.getElementById("singleSeat");
    singleSeatImg.style.opacity = 0.1;
    singleSeatImg.disable = true;

    return;
  }

  scene.children.forEach((item) => {
    if (item.name === "cornerSeat") {
      let rightSeatImg = document.getElementById("rightSeat");
      rightSeatImg.style.opacity = 1;
      rightSeatImg.disable = false;

      let singleSeatImg = document.getElementById("singleSeat");
      singleSeatImg.style.opacity = 1;
      singleSeatImg.disable = false;
    } else if (item.name === "rightSeat") {
      let leftSeatImg = document.getElementById("leftSeat");
      leftSeatImg.style.opacity = 1;
      leftSeatImg.disable = false;

      let cornerSeatImg = document.getElementById("cornerSeat");
      cornerSeatImg.style.opacity = 1;
      cornerSeatImg.disable = false;
    } else if (item.name === "singleSeat") {
      let leftSeatImg = document.getElementById("leftSeat");
      leftSeatImg.style.opacity = 1;
      leftSeatImg.disable = false;
    } else if (item.name === "leftSeat") {
      let rightSeatImg = document.getElementById("rightSeat");
      rightSeatImg.style.opacity = 1;
      rightSeatImg.disable = false;
    }
  });
  let singleSeatImg = document.getElementById("singleSeat");
  singleSeatImg.style.opacity = 0.1;
  singleSeatImg.disable = true;
}

function leftSeatOrder() {
  let scene = Store.scene;
  console.log(scene.children.length);
  if (scene.children.length >= 8) {
    console.log(scene.children);
    let leftSeatImg = document.getElementById("leftSeat");
    leftSeatImg.style.opacity = 0.1;
    leftSeatImg.disable = true;

    return;
  }

  let leftSeatImg = document.getElementById("leftSeat");
  leftSeatImg.style.opacity = 0.1;
  leftSeatImg.disable = true;

  let cornerSeatImg = document.getElementById("cornerSeat");
  cornerSeatImg.style.opacity = 0.1;
  cornerSeatImg.disable = true;

  let rightSeatImg = document.getElementById("rightSeat");
  rightSeatImg.style.opacity = 0.1;
  rightSeatImg.disable = true;

  scene.children.forEach((item) => {
    if (item.name === "singleSeat") {
      let rightSeatImg = document.getElementById("rightSeat");
      rightSeatImg.style.opacity = 1;
      rightSeatImg.disable = false;
    }
  });

  scene.children.forEach((item) => {
    if (item.name === "rightSeat") {
      let rightSeatImg = document.getElementById("rightSeat");
      rightSeatImg.style.opacity = 0.1;
      rightSeatImg.disable = true;
    }
  });
}

function rightSeatOrder() {
  let scene = Store.scene;
  scene.children.forEach((item) => {
    if (item.name === "singleSeat" && scene.children < 4) {
      let leftSeatImg = document.getElementById("leftSeat");
      leftSeatImg.style.opacity = 1;
      leftSeatImg.disable = false;

      let cornerSeatImg = document.getElementById("cornerSeat");
      cornerSeatImg.style.opacity = 1;
      cornerSeatImg.disable = false;
    } else if (item.name === "cornerSeat") {
      let singleSeatImg = document.getElementById("singleSeat");
      singleSeatImg.style.opacity = 1;
      singleSeatImg.disable = false;
    }
  });

  if (scene.children.length === 4) {
    let rightSeatImg = document.getElementById("rightSeat");
    rightSeatImg.style.opacity = 0.1;
    rightSeatImg.disable = true;

    let cornerSeatImg = document.getElementById("cornerSeat");
    cornerSeatImg.style.opacity = 0.1;
    cornerSeatImg.disable = true;

    let leftSeatImg = document.getElementById("leftSeat");
    leftSeatImg.style.opacity = 0.1;
    leftSeatImg.disable = true;
  }

  let rightSeatImg = document.getElementById("rightSeat");
  rightSeatImg.style.opacity = 0.1;
  rightSeatImg.disable = true;

}

function cornerSeatOrder() {
  let scene = Store.scene;
  scene.children.forEach((item) => {
    if (item.name === "singleSeat") {
      let rightSeatImg = document.getElementById("rightSeat");
      rightSeatImg.style.opacity = 1;
      rightSeatImg.disable = false;
    }
  });
  let cornerSeatImg = document.getElementById("cornerSeat");
  cornerSeatImg.style.opacity = 0.1;
  cornerSeatImg.disable = true;

  let leftSeatImg = document.getElementById("leftSeat");
  leftSeatImg.style.opacity = 0.1;
  leftSeatImg.disable = true;


  if (scene.children.length < 5) {
    let rightSeatImg = document.getElementById("rightSeat");
    rightSeatImg.style.opacity = 0.1;
    rightSeatImg.disable = true;
  }

  scene.children.forEach((item) => {
    if (item.name === "rightSeat") {
      let rightSeatImg = document.getElementById("rightSeat");
      rightSeatImg.style.opacity = 0.1;
      rightSeatImg.disable = true;

      let singleSeatImg = document.getElementById("singleSeat");
      singleSeatImg.style.opacity = 1;
      singleSeatImg.disable = false;
    }
  });

}

export { singleSeatOrder, leftSeatOrder, rightSeatOrder, cornerSeatOrder };
