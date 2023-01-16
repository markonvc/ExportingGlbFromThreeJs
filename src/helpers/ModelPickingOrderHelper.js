import {
  singleSeatOrder,
  leftSeatOrder,
  rightSeatOrder,
  cornerSeatOrder,
} from "./OrderHelper";
import Store from "../store/Store";

export default function pickingOrder(model) {
  const scene = Store.scene;

  // scene.children.forEach((item) => {
  //   if (item.name === "singleSeat" && model === "singleSeat") {
  //     model = "singleSeatleftSide";
  //   } else if (item.name === "leftSeat" && model === "lestSeat") {
  //     model = "leftSeatleftSide";
  //   }
  // });
  switch (model) {
    case "singleSeat":
      singleSeatOrder();
      break;
    case "singleSeatleftSide":
      singleSeatOrder();
      break;
    case "leftSeat":
      leftSeatOrder();
      break;
    case "leftSeatleftSide":
      leftSeatOrder();
      break;
    case "rightSeat":
      rightSeatOrder();
      break;
    case "cornerSeat":
      cornerSeatOrder();
      break;
    default:
      console.log("No available order");
  }
}
