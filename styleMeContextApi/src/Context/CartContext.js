import React, { createContext } from "react";

export const cartContext = createContext({
    products:[],
    cartItems:[],
    apidata:[],
    itemcount:0,
    addToCart : () =>{}
})

export const CartContextProvider = cartContext.Provider