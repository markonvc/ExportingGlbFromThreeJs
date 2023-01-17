import {
  singleSeatOrder,
  leftSeatOrder,
  rightSeatOrder,
  cornerSeatOrder,
} from "./OrderHelper";

export default function pickingOrder(model) {
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
