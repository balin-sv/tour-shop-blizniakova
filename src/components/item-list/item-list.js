import React, { useEffect, useState } from "react";
import Item from "../item";

const ItemList = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const res = await fetch("http://localhost:3000/tours.json");
    const data = await res.json();
    setTours(data);
  };

  const tousList = tours.map((item) => {
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
  return <>{tousList}</>;
};

export default ItemList;
