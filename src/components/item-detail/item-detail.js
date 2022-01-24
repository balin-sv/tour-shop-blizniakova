import React from "react";
import "./item-detail.css";

const ItemDetail = ({ data }) => {
  return (
    <div className="container ">
      <div className="row mt-5">
        <h3>
          Nombre del personaje STAR WARS: <span>{data.name}</span>
        </h3>
      </div>
      <div className="row mt-5">
        <div className="col">
          <p>
            Altura: <span>{data.height}</span>
          </p>
        </div>
        <div className="col">
          <p>
            Color de ojos: <span>{data.eyeColor}</span>
          </p>
        </div>
        <div className="col">
          <p>
            Fecha de nacimiento: <span>{data.birth}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
