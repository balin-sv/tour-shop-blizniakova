import React from "react";
import Item from "../item";

const ItemList = ({ data }) => {
  const itemList = data.map((item) => {
    console.log("itemList ", item.id);
    return (
      <>
        <Item
          key={item.id}
          title={item.name}
          price={item.price}
          img={item.imgURL}
          category={item.category}
          id={item.id}
          itemID={item.itemID}
        />
      </>
    );
  });
  return <>{itemList}</>;
};

export default ItemList;
