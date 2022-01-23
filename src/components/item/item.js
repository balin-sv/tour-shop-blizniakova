import React from "react";
import "./item.css";
const Item = ({ title, price, img }) => {
  return (
    <>
      <div class="card m-3">
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <h3 class="price">{price}</h3>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Detalles
          </a>
        </div>
      </div>
    </>
  );
};

export default Item;
