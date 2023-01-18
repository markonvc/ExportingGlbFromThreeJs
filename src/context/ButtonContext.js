import React, { createContext, useState } from "react";

export const ButtonContext = createContext();

export const ButtonContextProvider = (props) => {
  const [showDeleteButtonSingleSeat, setShowDeleteButtonSingleSeat] =
    useState(true);
  const [showDeleteButtonLeftSeat, setShowDeleteButtonLeftSeat] =
    useState(true);
  const [showDeleteButtonRightSeat, setShowDeleteButtonRightSeat] =
    useState(true);
  const [showDeleteButtonSingleLeftSeat, setShowDeleteButtonSingleLeftSeat] =
    useState(true);
  const [showDeleteButtonLeftSideSeat, setShowDeleteButtonLeftSideSeat] =
    useState(true);
  const [showDeleteButtonCornerSeat, setShowDeleteButtonCornerSeatSeat] =
    useState(true);

  const buttonContextvalue = {
    showDeleteButtonSingleSeat,
    showDeleteButtonLeftSeat,
    showDeleteButtonRightSeat,
    showDeleteButtonSingleLeftSeat,
    showDeleteButtonLeftSideSeat,
    showDeleteButtonCornerSeat,
    setShowDeleteButtonSingleSeat,
    setShowDeleteButtonLeftSeat,
    setShowDeleteButtonRightSeat,
    setShowDeleteButtonSingleLeftSeat,
    setShowDeleteButtonLeftSideSeat,
    setShowDeleteButtonCornerSeatSeat,
  };

  return (
    <ButtonContext.Provider value={buttonContextvalue}>
      {props.children}
    </ButtonContext.Provider>
  );
};
