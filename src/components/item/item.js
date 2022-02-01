import React from "react";
import { useNavigate } from "react-router-dom";
import "./item.css";

const Item = ({ title, price, img, category, id }) => {
  const navigate = useNavigate();

  const goToItem = () => {
    navigate(`/${category}/${id}`);
  };
  return (
    <>
      <div class="card m-3">
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <h3 class="price">{price} USD</h3>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button onClick={() => goToItem()} class="btn btn-primary">
            Detalles
          </button>
        </div>
      </div>
    </>
  );
};

export default Item;
