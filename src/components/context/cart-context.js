import { useState, createContext } from "react";
import React from "react";

//objeto
export const CartContext = createContext();

//component
export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [id, setId] = useState(0);
  const [isEmpty, setIsEmpty] = useState(true);

  const addItem = (item) => {
    setItems((oldArray) => [...oldArray, item]);
  };

  const getCartQuantity = () => {
    if (items.length > 0) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
    return items.length;
  };

  const generateItemID = () => {
    setId(id + 1);
    return id;
  };

  const removeItem = (id) => {
    const newArray = items.filter((item) => {
      return item.id !== id;
    });
    console.log(newArray);
    setItems(newArray);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        isEmpty,
        setItems,
        addItem,
        getCartQuantity,
        removeItem,
        generateItemID,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
