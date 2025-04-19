import React, { createContext } from "react";

export const cartContext = createContext({
    products:[],
    cartItems:[],
    apidata:[],
   
    addToCart : () =>{}
})

export const CartContextProvider = cartContext.Provider