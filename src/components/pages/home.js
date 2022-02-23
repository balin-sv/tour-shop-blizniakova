import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import ItemListContainer from "../item-list-container";

import FirebaseService from "../firebase-service";
import { db } from "../../firebase";
import { collection, query } from "firebase/firestore";

const Home = () => {
  const { setIsLoaded } = useOutletContext();
  const [items, setItems] = useState([]);
  const fbService = new FirebaseService();

  useEffect(() => {
    let mounted = true;
    setIsLoaded(true);
    (async () => {
      try {
        const q = query(collection(db, "items"));
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

export default Home;
