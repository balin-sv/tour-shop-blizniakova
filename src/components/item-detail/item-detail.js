import React, { useContext, useEffect } from "react";
import "./item-detail.css";
import ItemCount from "../item-count";
import { CartContext, CartProvider } from "../context/cart-context";

const ItemDetail = ({ data, max }) => {
  const value = useContext(CartContext);

  return (
    <div className="container">
      <h1 className="d-flex justify-content-center mt-4">{data.name}</h1>
      <div className="d-flex flex-wrap justify-content-around ">
        <div className="img-block">
          <img
            src={data.imgURL}
            className="img-fluid"
            alt="Responsive image"
          ></img>
        </div>
        <div className="mt-4 ">
          <h3>
            Precio: <span className="vacant">{data.price}</span> USD
          </h3>
          <ItemCount data={data} max={max} />
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-around mt-4">
        <h3>Descripcion</h3>
        <p className="px-5">{data.description}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
