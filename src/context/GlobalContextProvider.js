import React from "react";
import { ArContextProvider } from "./ArContext";
import { ButtonContextProvider } from "./ButtonContext";

const GlobalContextProvider = (props) => {
  return (
    <ArContextProvider>
      <ButtonContextProvider>{props.children}</ButtonContextProvider>
    </ArContextProvider>
  );
};

export default GlobalContextProvider;
