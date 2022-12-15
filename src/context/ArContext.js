import React, { createContext, useState } from "react";

export const ArContext = createContext();

export const ArContextProvider = (props) => {
  const [enterAr, setEnterAr] = useState(false);

  const arContextvalue = {
    enterAr,
    setEnterAr,
  };

  return (
    <ArContext.Provider value={arContextvalue}>
      {props.children}
    </ArContext.Provider>
  );
};
