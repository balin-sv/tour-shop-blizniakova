import React, { useState, useEffect } from "react";
import ItemListContainer from "../item-list-container";
import { useOutletContext } from "react-router-dom";
import { collection, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import FirebaseService from "../firebase-service";

const Tickets = () => {
  const { setIsLoaded } = useOutletContext();
  const [items, setItems] = useState([]);
  const fbService = new FirebaseService();

  useEffect(() => {
    let mounted = true;
    setIsLoaded(true);
    (async () => {
      try {
        const q = query(
          collection(db, "items"),
          where("category", "==", "tickets")
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

export default Tickets;
