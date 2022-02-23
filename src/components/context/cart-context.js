import { useState, createContext } from "react";
import React from "react";

//objeto
export const CartContext = createContext();

//component
export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [id, setId] = useState(0);
  const [isAdded, setIsAdded] = useState(false);
  const addItem = (item) => {
    setItems((prevArray) => [...prevArray, item]);
  };

  const generateItemID = () => {
    setId(id + 1);
    return id;
  };

  const removeItem = (id) => {
    const newArray = items.filter((item) => {
      return item.id !== id;
    });
    setItems(newArray);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        setItems,
        addItem,
        removeItem,
        generateItemID,
        isAdded,
        setIsAdded,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
