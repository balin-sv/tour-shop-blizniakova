import React, { useState, useEffect } from "react";
import ItemListContainer from "../item-list-container";
import { useOutletContext } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import FirebaseService from "../firebase-service";

const Tours = () => {
  const [items, setItems] = useState([]);
  const { setIsLoaded } = useOutletContext();
  const fbService = new FirebaseService();

  useEffect(() => {
    let mounted = true;
    setIsLoaded(true);
    (async () => {
      try {
        const q = query(
          collection(db, "items"),
          where("category", "==", "tours")
        );
        const res = await fbService.getItemsByQuery(q);
        if (mounted) {
          setItems((prev) => res);
          setTimeout(() => {
            setIsLoaded(false);
          }, 500);
        }
      } catch (error) {
        console.log(error);
      }
    })();
    return () => (mounted = false);
  }, []);

  return (
    <div>
      <ItemListContainer data={items} />
    </div>
  );
};

export default Tours;
