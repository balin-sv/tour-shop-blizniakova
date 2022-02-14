import { useState, useEffect, createContext } from "react";
import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";

//objeto
export const SearchContext = createContext();

//component
export const SearchProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [resultArray, setResultArray] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getFirebaseData = async () => {
      const query = collection(db, "items");
      const snapshot = await getDocs(query);
      let newArr = [];
      snapshot.forEach((doc) => {
        const a = doc.data();
        const b = { ...a, id: doc.id };
        newArr.push(b);
      });
      setItems((prev) => newArr);
    };
    getFirebaseData();
  }, []);

  const goToItem = () => {
    navigate(`/search`);
  };

  const onClickHandler = (searchValue) => {
    const res = items.filter((item) => {
      return item.name.includes(searchValue);
    });
    setResultArray(res);
    goToItem();
  };

  return (
    <SearchContext.Provider
      value={{
        items,
        setItems,
        onClickHandler,
        resultArray,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
