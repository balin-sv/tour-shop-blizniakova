import React from "react";
import ItemDetail from "../item-detail";

const ItemDetailContainer = (props) => {
  return (
    <>
      <ItemDetail data={props.data} />
    </>
  );
};

export default ItemDetailContainer;
