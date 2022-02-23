import React from "react";
import ItemDetail from "../item-detail";
import "./item-detail-container.css";

const ItemDetailContainer = ({ data, max }) => {
  return (
    <div>
      <ItemDetail data={data} max={max} />
    </div>
  );
};

export default ItemDetailContainer;
