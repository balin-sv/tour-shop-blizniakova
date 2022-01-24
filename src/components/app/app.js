import React, { useState } from "react";
import AppHeader from "../app-header";
import ItemDetailContainer from "../item-detail-container";
import ItemListContainer from "../item-list-container";

const App = () => {
  // const [data, setData] = useState({
  //   id: 0,
  //   name: "torres del paine full day",
  //   cupos: 8,
  // });

  // const onAddHandler = (num) => {
  //   if (num === 0) {
  //     alert("0 en el carrito");
  //   }

  //   const newData = data.cupos - num;

  //   setData((prev) => {
  //     return { ...prev, cupos: newData };
  //   });
  // };

  return (
    <div>
      <AppHeader />
      {/* <ItemListContainer /> */}
      <ItemDetailContainer />

      {/* <ItemListContainer data={data} onAddHandler={onAddHandler} /> */}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
};

export default App;
