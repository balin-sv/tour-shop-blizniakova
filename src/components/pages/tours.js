import React, { useState, useEffect } from "react";
import ItemListContainer from "../item-list-container";
import { getAllItemsList } from "../services";
import {
  collection,
  getDocs,
  query,
  where,
  getDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../firebase";

const Tours = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getFirebaseData = async () => {
      const q = query(
        collection(db, "items"),
        where("category", "==", "tours")
      );
      const snapshot = await getDocs(q);
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
      <h1>Tours</h1>
      <ItemListContainer data={items} />
    </div>
  );
};

export default Tours;
