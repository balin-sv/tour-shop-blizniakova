import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
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
const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getFirebaseData = async () => {
      const query = collection(db, "items");
      // const q = query(
      //   collection(db, "items"),
      //   where("name", "==", "torres del paine")
      // );
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
      {console.log(items)}
      <ItemListContainer data={items} />
    </div>
  );
};

export default Home;
