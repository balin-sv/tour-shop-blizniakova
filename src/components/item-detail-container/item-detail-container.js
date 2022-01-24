import React, { useEffect, useState } from "react";
import ItemDetail from "../item-detail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  useEffect(() => {
    getItem().then((data) => {
      const dataForPrint = extractData(data);
      setItem(dataForPrint);
    });
  }, []);

  async function getItem() {
    try {
      const res = await fetch(
        `https://swapi.dev/api/people/${Math.floor(Math.random() * 10) + 1}/`
      );
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  function extractData(data) {
    const item = {
      name: data.name,
      height: data.height,
      birth: data.birth_year,
      eyeColor: data.eye_color,
    };
    return item;
  }
  return (
    <>
      <ItemDetail data={item} />
    </>
  );
};

export default ItemDetailContainer;
