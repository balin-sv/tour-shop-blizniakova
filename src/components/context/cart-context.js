import { useState, createContext } from "react";
import React from "react";

//objeto
export const CartContext = createContext();

//component
export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems((oldArray) => [...oldArray, item]);
  };

  const getCartQuantity = () => {
    return items.length;
  };

  return (
    <CartContext.Provider value={{ items, setItems, addItem, getCartQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
