import React from "react";
import ItemCount from "../item-count";
import "./item-list-container.css";

const ItemListContainer = ({ data, onAddHandler }) => {
  return (
    <div className="item-container d-flex container mt-5 justify-content-center">
      <ItemCount data={data} onAdd={onAddHandler} />
    </div>
  );
};

export default ItemListContainer;
