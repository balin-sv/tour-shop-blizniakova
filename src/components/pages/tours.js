import React, { useState, useEffect } from "react";
import ItemListContainer from "../item-list-container";
import { getAllItemsList } from "../services";

const Tours = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getAllItemsList().then((res) => {
      const a = res.filter((el) => {
        return el.category === "tours";
      });
      setItems(a);
    });
  }, []);
  return (
    <div>
      <h1>Tours</h1>
      <ItemListContainer data={items} />
    </div>
  );
};

export default Tours;
