import React from "react";
import Item from "../item";

const ItemList = ({ data }) => {
  const itemList = data.map((item) => {
    return (
      <>
        {console.log("unique key: ", item.id)}
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
