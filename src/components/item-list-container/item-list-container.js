import React from "react";
import { useParams } from "react-router-dom";
import ItemCount from "../item-count";
import ItemList from "../item-list";

import "./item-list-container.css";

const ItemListContainer = ({ data }) => {
  return (
    <div className="item-container">
      {/* <ItemCount data={data} onAdd={onAddHandler} /> */}
      <ItemList data={data} />
    </div>
  );
};

export default ItemListContainer;
