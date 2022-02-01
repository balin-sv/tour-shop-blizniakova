import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetailContainer from "../item-detail-container";
import { getAllItemsList } from "../services";

const Detale = () => {
  const { category, id } = useParams();
  console.log(category, id);
  const [item, setItem] = useState({});

  useEffect(() => {
    getAllItemsList().then((res) => {
      const a = res.filter((el) => {
        return el.category == category && el.id == id;
      });
      setItem(a[0]);
    });
  }, [id, category]);

  return (
    <div>
      <h1>Detail</h1>
      <ItemDetailContainer data={item} />
    </div>
  );
};

export default Detale;
