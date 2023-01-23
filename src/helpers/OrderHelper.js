import Store from "../store/Store";

function single() {
  let scene = Store.scene;

  scene.children.forEach((item) => {
    if (item.name === "singleSeat") {
      let singleSeatImg = document.getElementById("singleSeat");
      singleSeatImg.style.opacity = 0.1;
      singleSeatImg.disabled = true;
    }

    if (item.name === "singleSeatleftSide") {
      let singleSeatImg = document.getElementById("singleSeat");
      singleSeatImg.style.opacity = 0.1;
      singleSeatImg.disabled = true;

      let leftSeatImg = document.getElementById("leftSeat");
      leftSeatImg.style.opacity = 1;
      leftSeatImg.disabled = false;
    }

    if (item.name === "rightSeat") {
      let rightSeatImg = document.getElementById("rightSeat");
      rightSeatImg.style.opacity = 0.1;
      rightSeatImg.disabled = true;
    }

    if (item.name === "cornerSeat") {
      let cornerSeatImg = document.getElementById("cornerSeat");
      cornerSeatImg.style.opacity = 0.1;
      cornerSeatImg.disabled = true;

      let rightSeatImg = document.getElementById("rightSeat");
      rightSeatImg.style.opacity = 0.1;
      rightSeatImg.disabled = true;

      let leftSeatImg = document.getElementById("leftSeat");
      leftSeatImg.style.opacity = 0.1;
      leftSeatImg.disabled = true;

      let singleSeatImg = document.getElementById("singleSeat");
      singleSeatImg.style.opacity = 1;
      singleSeatImg.disabled = false;
    }

    if (item.name === "leftSeat") {
      let leftSeatImg = document.getElementById("leftSeat");
      leftSeatImg.style.opacity = 0.1;
      leftSeatImg.disabled = true;

      let cornerSeatImg = document.getElementById("cornerSeat");
      cornerSeatImg.style.opacity = 0.1;
      cornerSeatImg.disabled = true;

      let rightSeatImg = document.getElementById("rightSeat");
      rightSeatImg.style.opacity = 0.1;
      rightSeatImg.disabled = true;
    }

    if (item.name === "leftSeatleftSide") {
      let leftSeatImg = document.getElementById("leftSeat");
      leftSeatImg.style.opacity = 0.1;
      leftSeatImg.disabled = true;
    }
  });

  let rightModel = scene.children.filter((item) => {
    return item.name === "rightSeat";
  });

  let singleModelLeftSide = scene.children.filter((item) => {
    return item.name === "singleSeatleftSide";
  });

  let leftModelLeftSide = scene.children.filter((item) => {
    return item.name === "leftSeatleftSide";
  });

  let leftModel = scene.children.filter((item) => {
    return item.name === "leftSeat";
  });

  let cornerModel = scene.children.filter((item) => {
    return item.name === "cornerSeat";
  });

  let singleModel = scene.children.filter((item) => {
    return item.name === "singleSeat";
  });

  if (rightModel.length === 0 && singleModel.length > 0) {
    let rightSeatImg = document.getElementById("rightSeat");
    rightSeatImg.style.opacity = 1;
    rightSeatImg.disabled = false;
  }

  if (cornerModel.length === 0 && leftModel.length === 0) {
    let cornerSeatImg = document.getElementById("cornerSeat");
    cornerSeatImg.style.opacity = 1;
    cornerSeatImg.disabled = false;

    let leftSeatImg = document.getElementById("leftSeat");
    leftSeatImg.style.opacity = 0.1;
    leftSeatImg.disabled = true;

    let singleSeatImg = document.getElementById("singleSeat");
    singleSeatImg.style.opacity = 0.1;
    singleSeatImg.disabled = true;
  }

  if (leftModel.length === 0 && cornerModel.length === 0) {
    let leftSeatImg = document.getElementById("leftSeat");
    leftSeatImg.style.opacity = 1;
    leftSeatImg.disabled = false;
  }

  if (singleModel.length === 0) {
    let singleSeatImg = document.getElementById("singleSeat");
    singleSeatImg.style.opacity = 1;
    singleSeatImg.disabled = false;
  }

  if (
    cornerModel.length > 0 &&
    singleModel.length > 0 &&
    rightModel.length === 0
  ) {
    let singleSeatImg = document.getElementById("singleSeat");
    singleSeatImg.style.opacity = 0.1;
    singleSeatImg.disabled = true;
  }

  if (
    cornerModel.length > 0 &&
    singleModel.length > 0 &&
    rightModel.length > 0
  ) {
    let singleSeatImg = document.getElementById("singleSeat");
    singleSeatImg.style.opacity = 1;
    singleSeatImg.disabled = false;
  }

  if (
    cornerModel.length > 0 &&
    singleModel.length > 0 &&
    rightModel.length > 0 &&
    singleModelLeftSide.length > 0
  ) {
    let singleSeatImg = document.getElementById("singleSeat");
    singleSeatImg.style.opacity = 0.1;
    singleSeatImg.disabled = true;
  }

  if (
    cornerModel.length === 0 &&
    leftModel.length === 0 &&
    singleModel.length === 0 &&
    rightModel.length > 0
  ) {
    let leftSeatImg = document.getElementById("leftSeat");
    leftSeatImg.style.opacity = 0.1;
    leftSeatImg.disabled = true;

    let cornerSeatImg = document.getElementById("cornerSeat");
    cornerSeatImg.style.opacity = 0.1;
    cornerSeatImg.disabled = true;
  }

  if (
    cornerModel.length === 0 &&
    leftModel.length === 0 &&
    singleModel.length === 0 &&
    rightModel.length === 0
  ) {
    let leftSeatImg = document.getElementById("leftSeat");
    leftSeatImg.style.opacity = 1;
    leftSeatImg.disabled = false;

    let cornerSeatImg = document.getElementById("cornerSeat");
    cornerSeatImg.style.opacity = 1;
    cornerSeatImg.disabled = false;

    let singleSeatImg = document.getElementById("singleSeat");
    singleSeatImg.style.opacity = 1;
    singleSeatImg.disabled = false;

    let rightSeatImg = document.getElementById("rightSeat");
    rightSeatImg.style.opacity = 1;
    rightSeatImg.disabled = false;
  }

  if (
    singleModelLeftSide.length > 0 &&
    leftModelLeftSide.length > 0 &&
    singleModel.length > 0 &&
    rightModel.length > 0 &&
    cornerModel.length === 0
  ) {
    let cornerSeatImg = document.getElementById("cornerSeat");
    cornerSeatImg.style.opacity = 1;
    cornerSeatImg.disabled = false;

    let leftSeatImg = document.getElementById("leftSeat");
    leftSeatImg.style.opacity = 0.1;
    leftSeatImg.disabled = true;
  }
}

export { single };
