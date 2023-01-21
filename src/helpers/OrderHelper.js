import Store from "../store/Store";

function singleSeatOrder() {
  let scene = Store.scene;

  if (scene.children.length >= 7) {
    console.log(scene.children);
    let leftSeatImg = document.getElementById("leftSeat");
    leftSeatImg.style.opacity = 1;
    leftSeatImg.disabled = false;

    let singleSeatImg = document.getElementById("singleSeat");
    singleSeatImg.style.opacity = 0.1;
    singleSeatImg.disabled = true;

    return;
  }

  scene.children.forEach((item) => {
    if (item.name === "cornerSeat") {
      let rightSeatImg = document.getElementById("rightSeat");
      rightSeatImg.style.opacity = 1;
      rightSeatImg.disabled = false;

      let singleSeatImg = document.getElementById("singleSeat");
      singleSeatImg.style.opacity = 1;
      singleSeatImg.disabled = false;
    } else if (item.name === "rightSeat") {
      let leftSeatImg = document.getElementById("leftSeat");
      leftSeatImg.style.opacity = 1;
      leftSeatImg.disabled = false;

      let cornerSeatImg = document.getElementById("cornerSeat");
      cornerSeatImg.style.opacity = 1;
      cornerSeatImg.disabled = false;
    } else if (item.name === "singleSeat") {
      let leftSeatImg = document.getElementById("leftSeat");
      leftSeatImg.style.opacity = 1;
      leftSeatImg.disabled = false;
    } else if (item.name === "leftSeat") {
      let rightSeatImg = document.getElementById("rightSeat");
      rightSeatImg.style.opacity = 1;
      rightSeatImg.disabled = false;
    }
  });
  let singleSeatImg = document.getElementById("singleSeat");
  singleSeatImg.style.opacity = 0.1;
  singleSeatImg.disabled = true;
  console.log(singleSeatImg.disabled);
}

function leftSeatOrder() {
  let scene = Store.scene;
  console.log(scene.children.length);
  if (scene.children.length >= 8) {
    console.log("yyy");
    let leftSeatImg = document.getElementById("leftSeat");
    leftSeatImg.style.opacity = 0.1;
    leftSeatImg.disabled = true;

    let cornerSeatImg = document.getElementById("cornerSeat");
    cornerSeatImg.style.opacity = 0.1;
    cornerSeatImg.disabled = true;

    return;
  }

  let leftSeatImg = document.getElementById("leftSeat");
  leftSeatImg.style.opacity = 0.1;
  leftSeatImg.disabled = true;

  let cornerSeatImg = document.getElementById("cornerSeat");
  cornerSeatImg.style.opacity = 0.1;
  cornerSeatImg.disabled = true;

  let rightSeatImg = document.getElementById("rightSeat");
  rightSeatImg.style.opacity = 0.1;
  rightSeatImg.disabled = true;

  scene.children.forEach((item) => {
    if (item.name === "singleSeat") {
      let rightSeatImg = document.getElementById("rightSeat");
      rightSeatImg.style.opacity = 1;
      rightSeatImg.disabled = false;
    }
  });

  scene.children.forEach((item) => {
    if (item.name === "rightSeat") {
      let rightSeatImg = document.getElementById("rightSeat");
      rightSeatImg.style.opacity = 0.1;
      rightSeatImg.disabled = true;
    }
  });
}

function rightSeatOrder() {
  let scene = Store.scene;
  scene.children.forEach((item) => {
    if (item.name === "singleSeat" && scene.children < 4) {
      let leftSeatImg = document.getElementById("leftSeat");
      leftSeatImg.style.opacity = 1;
      leftSeatImg.disabled = false;

      let cornerSeatImg = document.getElementById("cornerSeat");
      cornerSeatImg.style.opacity = 1;
      cornerSeatImg.disabled = false;
    } else if (item.name === "cornerSeat") {
      let singleSeatImg = document.getElementById("singleSeat");
      singleSeatImg.style.opacity = 1;
      singleSeatImg.disabled = false;
    }
  });

  if (scene.children.length === 4) {
    let rightSeatImg = document.getElementById("rightSeat");
    rightSeatImg.style.opacity = 0.1;
    rightSeatImg.disabled = true;

    let cornerSeatImg = document.getElementById("cornerSeat");
    cornerSeatImg.style.opacity = 0.1;
    cornerSeatImg.disabled = true;

    let leftSeatImg = document.getElementById("leftSeat");
    leftSeatImg.style.opacity = 0.1;
    leftSeatImg.disabled = true;
  }

  let rightSeatImg = document.getElementById("rightSeat");
  rightSeatImg.style.opacity = 0.1;
  rightSeatImg.disabled = true;
}

function cornerSeatOrder() {
  let scene = Store.scene;
  scene.children.forEach((item) => {
    if (item.name === "singleSeat") {
      let rightSeatImg = document.getElementById("rightSeat");
      rightSeatImg.style.opacity = 1;
      rightSeatImg.disabled = false;
    }
  });
  let cornerSeatImg = document.getElementById("cornerSeat");
  cornerSeatImg.style.opacity = 0.1;
  cornerSeatImg.disabled = true;

  let leftSeatImg = document.getElementById("leftSeat");
  leftSeatImg.style.opacity = 0.1;
  leftSeatImg.disabled = true;

  if (scene.children.length < 5) {
    let rightSeatImg = document.getElementById("rightSeat");
    rightSeatImg.style.opacity = 0.1;
    rightSeatImg.disabled = true;
  }

  scene.children.forEach((item) => {
    if (item.name === "rightSeat") {
      let rightSeatImg = document.getElementById("rightSeat");
      rightSeatImg.style.opacity = 0.1;
      rightSeatImg.disabled = true;

      let singleSeatImg = document.getElementById("singleSeat");
      singleSeatImg.style.opacity = 1;
      singleSeatImg.disabled = false;
    }
  });
}

export { singleSeatOrder, leftSeatOrder, rightSeatOrder, cornerSeatOrder };
