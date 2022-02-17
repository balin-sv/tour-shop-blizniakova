import React, { useContext } from "react";
import "./item-detail.css";
import ItemCount from "../item-count";
import { CartContext, CartProvider } from "../context/cart-context";

const ItemDetail = ({ data }) => {
  const value = useContext(CartContext);

  return (
    <>
      <div class="container">
        <h1 class="display-4">{data.name}</h1>
        <h3>
          Precio: <span>{data.price}</span> USD
        </h3>
        <div class="flex-row">
          <div className="img-block">
            <img
              src={data.imgURL}
              className="img-fluid img-size"
              alt="Responsive image"
            ></img>
          </div>
          <div className="text-block">
            <p>{data.description}</p>
          </div>
        </div>
        <ItemCount data={data} />
      </div>
      {/* </div> */}
    </>
  );
};

export default ItemDetail;
