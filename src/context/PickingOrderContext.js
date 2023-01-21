import React, { createContext, useState } from "react";

export const PickingOrderContext = createContext();

export const PickingOrderContextProvider = (props) => {
    const [orderPicking, setOrderPicking] = useState(true);

    const pickingorderContextvalue = {
        orderPicking,
        setOrderPicking,
    };

    return (
        <PickingOrderContext.Provider value={pickingorderContextvalue}>
            {props.children}
        </PickingOrderContext.Provider>
    );
};