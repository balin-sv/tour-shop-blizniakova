import React, { useState, useEffect, useContext, createContext } from "react";
import { CartContext, CartProvider } from "../context/cart-context";
import { useOutletContext } from "react-router-dom";
import ItemListContainer from "../item-list-container";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const Home = () => {
  const [items, setItems] = useState([]);

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

  return (
    <div>
      <ItemListContainer data={items} />
    </div>
  );
};

export default Home;
