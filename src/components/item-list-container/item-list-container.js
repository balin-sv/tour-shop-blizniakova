import React from "react";
import ItemCount from "../item-count";
import ItemList from "../item-list";

import "./item-list-container.css";

const ItemListContainer = ({ data, onAddHandler }) => {
  return (
    <div className="item-container">
      {/* <ItemCount data={data} onAdd={onAddHandler} /> */}
      <ItemList />
    </div>
  );
};

export default ItemListContainer;
