import Store from "../store/Store";

function singleSeatOrder() {
  let scene = Store.scene;

  scene.children.forEach((item) => {
    if (item.name === "cornerSeat") {
      let rightSeatImg = document.getElementById("rightSeat");
      rightSeatImg.style.opacity = 1;
      rightSeatImg.disable = false;
    } else if (item.name === "rightSeat") {
      let leftSeatImg = document.getElementById("leftSeat");
      leftSeatImg.style.opacity = 1;
      leftSeatImg.disable = false;

      let cornerSeatImg = document.getElementById("cornerSeat");
      cornerSeatImg.style.opacity = 1;
      cornerSeatImg.disable = false;
    }
  });
  let singleSeatImg = document.getElementById("singleSeat");
  singleSeatImg.style.opacity = 0.1;
  singleSeatImg.disable = true;
}

function leftSeatOrder() {
  let scene = Store.scene;
  scene.children.forEach((item) => {
    console.log(item.name);
  });
  let leftSeatImg = document.getElementById("leftSeat");
  leftSeatImg.style.opacity = 0.1;
  leftSeatImg.disable = true;

  let cornerSeatImg = document.getElementById("cornerSeat");
  cornerSeatImg.style.opacity = 0.1;
  cornerSeatImg.disable = true;
}

function rightSeatOrder() {
  let scene = Store.scene;
  scene.children.forEach((item) => {
    console.log(item.name);
  });
  let rightSeatImg = document.getElementById("rightSeat");
  rightSeatImg.style.opacity = 0.1;
  rightSeatImg.disable = true;
}

function cornerSeatOrder() {
  let scene = Store.scene;
  scene.children.forEach((item) => {
    console.log(item.name);
  });
  let cornerSeatImg = document.getElementById("cornerSeat");
  cornerSeatImg.style.opacity = 0.1;
  cornerSeatImg.disable = true;

  let leftSeatImg = document.getElementById("leftSeat");
  leftSeatImg.style.opacity = 0.1;
  leftSeatImg.disable = true;

  let rightSeatImg = document.getElementById("rightSeat");
  rightSeatImg.style.opacity = 0.1;
  rightSeatImg.disable = true;
}

export { singleSeatOrder, leftSeatOrder, rightSeatOrder, cornerSeatOrder };
