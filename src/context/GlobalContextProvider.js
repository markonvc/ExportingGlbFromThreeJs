import React from "react";
import { ArContextProvider } from "./ArContext";
import { ButtonContextProvider } from "./ButtonContext";
import { PickingOrderContextProvider } from "./PickingOrderContext";

const GlobalContextProvider = (props) => {
  return (
    <ArContextProvider>
      <ButtonContextProvider>
        <PickingOrderContextProvider>
          {props.children}
        </PickingOrderContextProvider>
      </ButtonContextProvider>
    </ArContextProvider>
  );
};

export default GlobalContextProvider;
