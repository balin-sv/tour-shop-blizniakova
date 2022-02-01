import React from "react";
import "./item-detail.css";

const ItemDetail = ({ data }) => {
  console.log(data);
  return (
    <div className="container ">
      <div className="row mt-5">
        <h3>
          <span>{data.name}</span>
        </h3>
      </div>
      <div className="row mt-5">
        <div className="col">
          <p>
            Cupos disponibles: <span>{data.vacant}</span>
          </p>
        </div>
        <div className="col">
          <p>
            Precio: <span>{data.price} USD</span>
          </p>
        </div>
        <div className="col box">
          <img src={data.img}></img>
        </div>
      </div>
      <p>{data.description}</p>
    </div>
  );
};

export default ItemDetail;
