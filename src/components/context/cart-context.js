import { useState, createContext, useEffect } from "react";
import React from "react";

//objeto
export const CartContext = createContext();

//component
export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [id, setId] = useState(0);
  // const [size, setSize] = useState();

  const [isEmpty, setIsEmpty] = useState(true);
  const [isAdded, setIsAdded] = useState(false);

  // const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    if (isEmpty) {
      setItems((prev) => []);
    }
  }, [isEmpty]);

  const addItem = (item) => {
    setItems((prevArray) => [...prevArray, item]);
  };

  const getCartQuantity = () => {
    if (items.length > 0) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
    return items.length;
  };

  // const getCartQuantity = () => {
  //   if (items.length > 0) {
  //     setIsEmpty(false);
  //   } else {
  //     setIsEmpty(true);
  //   }
  //   return items.length;
  // };

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
        setIsEmpty,
        setItems,
        addItem,
        getCartQuantity,
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
