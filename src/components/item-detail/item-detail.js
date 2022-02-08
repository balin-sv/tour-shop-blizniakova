import React from "react";
import "./item-detail.css";
import ItemCount from "../item-count";

const ItemDetail = ({ data }) => {
  console.log(data);
  return (
    <div className="container d-flex ">
      <div className="row mt-5">
        <img
          className="col-6 img-fluid"
          alt="Responsive image"
          src={data.imgURL}
        ></img>
        <div className="col-6">
          <h1>{data.name}</h1>
          <h3>
            Precio: <span>{data.price}</span> USD
          </h3>
          <p>{data.description}</p>
        </div>
        <ItemCount data={data} />
      </div>
    </div>
  );
};

export default ItemDetail;
