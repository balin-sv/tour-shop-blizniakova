import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemListContainer from "../item-list-container";
import { getAllItemsList } from "../services";

const Tickets = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    getAllItemsList().then((res) => {
      const a = res.filter((el) => {
        return el.category === "tickets";
      });
      setItem(a);
    });
  }, []);

  return (
    <div>
      <h1>Tickets</h1>
      <ItemListContainer data={item} />
    </div>
  );
};

export default Tickets;
