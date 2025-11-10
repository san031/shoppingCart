import React, { createContext } from "react";

export const cartContext = createContext({
    products:[],
    cartItems:[],
    apidata:[],
    itemcount:0,
    addToCart : () =>{},
    increment : () => {},
    decrement: () => {}
})

export const CartContextProvider = cartContext.Provider