import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetailContainer from "../item-detail-container";
import { getAllItemsList } from "../services";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

const Detale = () => {
  const { category, id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    const getFirebaseData = async () => {
      const ref = doc(db, "items", id);
      const docSnap = await getDoc(ref);
      setItem(docSnap.data());
    };
    getFirebaseData();
  }, []);

  return (
    <div>
      <h1>Detail</h1>
      <ItemDetailContainer data={item} />
    </div>
  );
};

export default Detale;
