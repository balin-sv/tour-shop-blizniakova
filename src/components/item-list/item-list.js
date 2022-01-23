import React from "react";
import Item from "../item";
import data from "../../tours.json";

const ItemList = () => {
  console.log(data[0].id);

  const tousList = data.map((item) => {
    return (
      <>
        <Item
          key={item.id}
          title={item.name}
          price={item.price}
          img={item.img}
        />
      </>
    );
  });
  console.log(tousList);

  return <>{tousList}</>;
};

export default ItemList;
