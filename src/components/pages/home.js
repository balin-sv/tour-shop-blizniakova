import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import ItemListContainer from "../item-list-container";
import { getAllItemsList } from "../services";

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getAllItemsList().then((res) => {
      setItems(res);
    });
  }, []);

  return (
    <div>
      <ItemListContainer data={items} />
    </div>
  );
};

export default Home;
